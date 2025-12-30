-- Criar tabela para rastrear visualizações diárias
CREATE TABLE IF NOT EXISTS blog_post_views_daily (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
  view_date DATE NOT NULL DEFAULT CURRENT_DATE,
  views_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(post_id, view_date)
);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_blog_post_views_daily_post_id ON blog_post_views_daily(post_id);
CREATE INDEX IF NOT EXISTS idx_blog_post_views_daily_view_date ON blog_post_views_daily(view_date);
CREATE INDEX IF NOT EXISTS idx_blog_post_views_daily_post_date ON blog_post_views_daily(post_id, view_date);

-- Função para incrementar visualizações diárias
CREATE OR REPLACE FUNCTION increment_daily_post_views(post_id UUID)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Incrementar contador diário
  INSERT INTO blog_post_views_daily (post_id, view_date, views_count)
  VALUES (post_id, CURRENT_DATE, 1)
  ON CONFLICT (post_id, view_date)
  DO UPDATE SET 
    views_count = blog_post_views_daily.views_count + 1,
    updated_at = NOW();

  -- Incrementar contador total do post
  UPDATE blog_posts
  SET 
    views = COALESCE(views, 0) + 1,
    updated_at = NOW()
  WHERE id = post_id;
END;
$$;

-- Trigger para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_blog_post_views_daily_updated_at
  BEFORE UPDATE ON blog_post_views_daily
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Habilitar RLS
ALTER TABLE blog_post_views_daily ENABLE ROW LEVEL SECURITY;

-- Policy: Permitir leitura para todos
CREATE POLICY "Permitir leitura de views para todos"
  ON blog_post_views_daily
  FOR SELECT
  USING (true);

-- Policy: Permitir inserção/atualização para todos (função é SECURITY DEFINER)
CREATE POLICY "Permitir registro de views"
  ON blog_post_views_daily
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Comentários
COMMENT ON TABLE blog_post_views_daily IS 'Rastreia visualizações diárias dos posts do blog';
COMMENT ON FUNCTION increment_daily_post_views IS 'Incrementa o contador de visualizações de um post (diário + total)';
