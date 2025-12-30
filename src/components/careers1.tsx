import { ArrowRight } from "lucide-react";

type Role = {
  id: string;
  title: string;
  location: string;
  href: string;
};

type Department = {
  title: string;
  roles: Role[];
};

const departments: Department[] = [
  // {
  //   title: "Vendas",
  //   roles: [
  //     {
  //       id: "role-1",
  //       title: "Gerente de Vendas",
  //       location: "São Paulo, SP",
  //       href: "#",
  //     },
  //   ],
  // },
];

const Careers1 = () => {
  return (
    <section className="bg-background py-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-4xl font-bold md:text-6xl"
          style={{
            background: "linear-gradient(to right, #6841FA, #9b7dff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Carreiras
        </h2>
        <p className="text-muted-foreground mt-6 whitespace-pre-wrap md:mb-20 md:text-lg">
          Faça parte do time que está revolucionando o marketing para restaurantes.
        </p>
        
        {departments.length === 0 ? (
          <div className="mt-12 md:mt-20 border border-border rounded-lg p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">
                No momento não temos vagas abertas
              </h3>
              <p className="text-muted-foreground text-lg">
                Mas estamos sempre em busca de talentos! Envie seu currículo para{" "}
                <a 
                  href="mailto:carreiras@recompraai.com.br" 
                  className="text-[#6841FA] hover:underline font-medium"
                >
                  carreiras@recompraai.com.br
                </a>
                {" "}e entraremos em contato quando surgir uma oportunidade que combine com seu perfil.
              </p>
            </div>
          </div>
        ) : (
          departments.map((department) => (
            <div key={department.title} className="mt-12 md:mt-20">
              <h3 className="mb-8 text-3xl font-semibold md:text-4xl">
                {department.title}
              </h3>
              <ul className="divide-border border-border divide-y border-y">
                {department.roles.map((role) => (
                  <li key={role.id} className="group">
                    <a href={role.href} className="flex items-center py-6 hover:bg-muted/50 transition-colors px-4 rounded-lg">
                      <div>
                        <div className="font-medium md:text-lg">{role.title}</div>
                        <div className="text-muted-foreground text-xs md:mt-2 md:text-sm">
                          {role.location}
                        </div>
                      </div>
                      <ArrowRight className="ml-auto size-6 -translate-x-6 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 text-[#6841FA]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export { Careers1 };
