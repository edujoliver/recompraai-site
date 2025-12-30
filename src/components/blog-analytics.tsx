"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Eye, TrendingUp, BarChart3 } from "lucide-react";

interface ViewsData {
  date: string;
  views: number;
}

interface TopPost {
  id: string;
  title: string;
  slug: string;
  views: number;
}

export function BlogAnalytics() {
  const [loading, setLoading] = useState(true);
  const [viewsData, setViewsData] = useState<ViewsData[]>([]);
  const [topPosts, setTopPosts] = useState<TopPost[]>([]);
  const [totalViews, setTotalViews] = useState(0);
  const [viewsLastWeek, setViewsLastWeek] = useState(0);
  const [growthRate, setGrowthRate] = useState(0);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      // 1. Buscar views dos últimos 30 dias
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      const { data: dailyViews } = await supabase
        .from("blog_post_views_daily")
        .select("view_date, views_count")
        .gte("view_date", thirtyDaysAgo.toISOString().split("T")[0])
        .order("view_date", { ascending: true });

      // Agrupar views por data
      const viewsByDate = dailyViews?.reduce((acc: Record<string, number>, curr) => {
        const date = curr.view_date;
        acc[date] = (acc[date] || 0) + curr.views_count;
        return acc;
      }, {}) || {};

      const chartData = Object.entries(viewsByDate).map(([date, views]) => ({
        date: new Date(date).toLocaleDateString("pt-BR", { month: "short", day: "numeric" }),
        views,
      }));

      console.log("Views Data:", chartData); // Debug
      setViewsData(chartData);

      // 2. Buscar top 5 posts mais visualizados
      const { data: posts } = await supabase
        .from("blog_posts")
        .select("id, title, slug, views")
        .eq("is_published", true)
        .order("views", { ascending: false })
        .limit(5);

      setTopPosts(posts || []);

      // 3. Calcular total de views
      const { data: allPosts } = await supabase
        .from("blog_posts")
        .select("views");

      const total = allPosts?.reduce((sum, post) => sum + (post.views || 0), 0) || 0;
      setTotalViews(total);

      // 4. Calcular views da última semana e crescimento
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      const { data: lastWeekViews } = await supabase
        .from("blog_post_views_daily")
        .select("views_count")
        .gte("view_date", sevenDaysAgo.toISOString().split("T")[0]);

      const lastWeekTotal = lastWeekViews?.reduce((sum, day) => sum + day.views_count, 0) || 0;
      setViewsLastWeek(lastWeekTotal);

      // Calcular semana anterior para comparação
      const fourteenDaysAgo = new Date();
      fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);

      const { data: previousWeekViews } = await supabase
        .from("blog_post_views_daily")
        .select("views_count")
        .gte("view_date", fourteenDaysAgo.toISOString().split("T")[0])
        .lt("view_date", sevenDaysAgo.toISOString().split("T")[0]);

      const previousWeekTotal = previousWeekViews?.reduce((sum, day) => sum + day.views_count, 0) || 0;
      
      const growth = previousWeekTotal > 0 
        ? ((lastWeekTotal - previousWeekTotal) / previousWeekTotal) * 100 
        : 0;
      
      setGrowthRate(growth);
    } catch (error) {
      console.error("Erro ao carregar analytics:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-[#5C5C73]">Carregando analytics...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Cards de estatísticas */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Total de Views */}
        <div className="rounded-xl border border-[#6841FA]/20 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[#5C5C73]">Total de Visualizações</p>
              <p className="text-2xl font-bold text-[#2C216F]">
                {totalViews.toLocaleString("pt-BR")}
              </p>
            </div>
            <div className="rounded-full bg-[#6841FA]/10 p-3">
              <Eye className="h-6 w-6 text-[#6841FA]" />
            </div>
          </div>
        </div>

        {/* Views Última Semana */}
        <div className="rounded-xl border border-[#6841FA]/20 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[#5C5C73]">Última Semana</p>
              <p className="text-2xl font-bold text-[#2C216F]">
                {viewsLastWeek.toLocaleString("pt-BR")}
              </p>
            </div>
            <div className="rounded-full bg-[#6841FA]/10 p-3">
              <BarChart3 className="h-6 w-6 text-[#6841FA]" />
            </div>
          </div>
        </div>

        {/* Taxa de Crescimento */}
        <div className="rounded-xl border border-[#6841FA]/20 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[#5C5C73]">Crescimento</p>
              <p className={`text-2xl font-bold ${growthRate >= 0 ? "text-green-600" : "text-red-600"}`}>
                {growthRate >= 0 ? "+" : ""}{growthRate.toFixed(1)}%
              </p>
              <p className="text-xs text-[#5C5C73]">vs. semana anterior</p>
            </div>
            <div className={`rounded-full p-3 ${growthRate >= 0 ? "bg-green-100" : "bg-red-100"}`}>
              <TrendingUp className={`h-6 w-6 ${growthRate >= 0 ? "text-green-600" : "text-red-600"}`} />
            </div>
          </div>
        </div>
      </div>

      {/* Gráfico de Views ao longo do tempo */}
      <div className="rounded-xl border border-[#6841FA]/20 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold text-[#2C216F]">
          Visualizações nos Últimos 30 Dias
        </h3>
        {viewsData.length === 0 ? (
          <div className="flex h-64 items-center justify-center">
            <p className="text-sm text-[#5C5C73]">
              Nenhum dado de visualização disponível ainda. 
              <br />
              As visualizações serão registradas conforme os posts forem acessados.
            </p>
          </div>
        ) : (
          <div style={{ width: '100%', height: '256px' }}>
            <ResponsiveContainer>
              <LineChart data={viewsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E4DFFF" />
                <XAxis 
                  dataKey="date" 
                  stroke="#5C5C73"
                  style={{ fontSize: "12px" }}
                />
                <YAxis 
                  stroke="#5C5C73"
                  style={{ fontSize: "12px" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #6841FA",
                    borderRadius: "8px",
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="views" 
                  stroke="#6841FA" 
                  strokeWidth={2}
                  dot={{ fill: "#6841FA", r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Top 5 Posts Mais Visualizados */}
      <div className="rounded-xl border border-[#6841FA]/20 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold text-[#2C216F]">
          Top 5 Posts Mais Visualizados
        </h3>
        <div className="space-y-3">
          {topPosts.length === 0 ? (
            <p className="text-center text-sm text-[#5C5C73]">
              Nenhum post com visualizações ainda
            </p>
          ) : (
            topPosts.map((post, index) => (
              <div
                key={post.id}
                className="flex items-center justify-between rounded-lg border border-gray-100 p-4 hover:border-[#6841FA]/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6841FA]/10 text-sm font-bold text-[#6841FA]">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-[#2C216F]">{post.title}</p>
                    <p className="text-xs text-[#5C5C73]">/blog/{post.slug}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[#6841FA]">
                  <Eye className="h-4 w-4" />
                  <span className="font-semibold">
                    {post.views.toLocaleString("pt-BR")}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
