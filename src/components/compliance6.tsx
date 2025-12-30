import { LockKeyhole, ShieldCheck, Users, Database, FileCheck, Eye, Shield } from "lucide-react";

const Compliance6 = () => {
  return (
    <section className="py-32 bg-[#F5F5FF]">
      <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 xl:flex-row">
          <div className="flex flex-col gap-6 lg:max-w-xl">
            <div className="flex items-center gap-1">
              <span className="bg-[#6841FA] h-2 w-4" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#B7A6FF] font-semibold">Compliance & Segurança</span>
            </div>
            <h2 className="text-4xl font-bold md:text-6xl lg:text-7xl text-[#2C216F]">
              Seus dados protegidos com as melhores práticas
            </h2>
            <p className="md:text-xl text-[#5C5C73] leading-relaxed">
              O RecompraAI foi desenvolvido com total conformidade à LGPD e seguindo rigorosos 
              padrões internacionais de segurança da informação. Seus dados e de seus clientes 
              estão protegidos em todos os momentos.
            </p>
          </div>
          <div className="bg-[#E5E5FF] border-[#E5E5FF] grid w-full shrink-0 grid-cols-2 gap-px border md:w-auto md:grid-cols-4">
            <div className="bg-white flex flex-col items-center justify-center gap-3 px-6 py-8 md:px-8 md:py-10">
              <Shield className="w-12 h-12 text-[#6841FA]" />
              <p className="text-center text-sm font-bold uppercase text-[#2C216F]">
                LGPD
              </p>
              <p className="text-center text-xs text-[#5C5C73]">
                Conforme
              </p>
            </div>
            <div className="bg-white flex flex-col items-center justify-center gap-3 px-6 py-8 md:px-8 md:py-10">
              <Database className="w-12 h-12 text-[#6841FA]" />
              <p className="text-center text-sm font-bold uppercase text-[#2C216F]">
                Criptografia
              </p>
              <p className="text-center text-xs text-[#5C5C73]">
                SSL/TLS
              </p>
            </div>
            <div className="bg-white flex flex-col items-center justify-center gap-3 px-6 py-8 md:px-8 md:py-10">
              <FileCheck className="w-12 h-12 text-[#6841FA]" />
              <p className="text-center text-sm font-bold uppercase text-[#2C216F]">
                Backup
              </p>
              <p className="text-center text-xs text-[#5C5C73]">
                Diário
              </p>
            </div>
            <div className="bg-white flex flex-col items-center justify-center gap-3 px-6 py-8 md:px-8 md:py-10">
              <Eye className="w-12 h-12 text-[#6841FA]" />
              <p className="text-center text-sm font-bold uppercase text-[#2C216F]">
                Auditoria
              </p>
              <p className="text-center text-xs text-[#5C5C73]">
                24/7
              </p>
            </div>
          </div>
        </div>
        <div className="border-[#E5E5FF] mt-20 w-full border rounded-2xl overflow-hidden">
          <div className="border-[#E5E5FF] relative hidden h-16 border-b md:block bg-white">
            <div className="absolute inset-0 h-full w-full bg-[repeating-linear-gradient(-45deg,#E5E5FF_0_1px,transparent_1px_16px)]"></div>
          </div>
          <div className="bg-[#E5E5FF] grid grid-cols-1 gap-px lg:grid-cols-3">
            <div className="bg-white flex flex-col justify-between gap-8 px-6 py-10 md:gap-16">
              <LockKeyhole className="size-8 text-[#6841FA]" />
              <div className="flex flex-col gap-6 md:gap-10">
                <h3 className="text-xl font-bold md:text-3xl text-[#2C216F]">
                  Conformidade Total com a LGPD
                </h3>
                <p className="text-[#5C5C73] md:text-lg leading-relaxed">
                  Todos os processos de coleta, armazenamento e tratamento de dados pessoais 
                  seguem rigorosamente a Lei Geral de Proteção de Dados brasileira. Você tem 
                  controle total sobre os dados dos seus clientes.
                </p>
              </div>
            </div>
            <div className="bg-white flex flex-col justify-between gap-8 px-6 py-10 md:gap-16">
              <ShieldCheck className="size-8 text-[#6841FA]" />
              <div className="flex flex-col gap-6 md:gap-10">
                <h3 className="text-xl font-bold md:text-3xl text-[#2C216F]">
                  Privacidade e Controle de Dados
                </h3>
                <p className="text-[#5C5C73] md:text-lg leading-relaxed">
                  Suas informações e de seus clientes permanecem privadas e sob seu total 
                  controle. Implementamos criptografia de ponta a ponta e políticas rígidas 
                  de acesso aos dados.
                </p>
              </div>
            </div>
            <div className="bg-white flex flex-col justify-between gap-8 px-6 py-10 md:gap-16">
              <Users className="size-8 text-[#6841FA]" />
              <div className="flex flex-col gap-6 md:gap-10">
                <h3 className="text-xl font-bold md:text-3xl text-[#2C216F]">
                  Gestão Flexível de Permissões
                </h3>
                <p className="text-[#5C5C73] md:text-lg leading-relaxed">
                  Controle detalhado de permissões para equipes e usuários. Defina quem pode 
                  acessar, visualizar ou modificar dados sensíveis, com logs completos de 
                  auditoria.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de Stats */}
        <div className="mt-20 grid gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="text-5xl font-bold text-[#6841FA] mb-2">256-bit</div>
            <p className="text-[#5C5C73] font-medium">Criptografia AES</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#6841FA] mb-2">99.9%</div>
            <p className="text-[#5C5C73] font-medium">Uptime garantido</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#6841FA] mb-2">24h</div>
            <p className="text-[#5C5C73] font-medium">Backup automático</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#6841FA] mb-2">24/7</div>
            <p className="text-[#5C5C73] font-medium">Monitoramento</p>
          </div>
        </div>

        {/* Seção de Direitos do Titular LGPD */}
        <div className="mt-32">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#2C216F] md:text-4xl mb-4">
              Seus Direitos como Titular de Dados
            </h2>
            <p className="text-[#5C5C73] text-lg max-w-3xl mx-auto">
              De acordo com a LGPD, você tem total controle sobre seus dados pessoais
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-2xl border border-[#E5E5FF] p-6 hover:shadow-lg hover:shadow-[#6841FA]/10 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F5F5FF]">
                  <Eye className="h-5 w-5 text-[#6841FA]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#2C216F] mb-2">Acesso aos Dados</h3>
                  <p className="text-sm text-[#5C5C73]">
                    Solicite e receba cópia de todos os seus dados pessoais armazenados
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#E5E5FF] p-6 hover:shadow-lg hover:shadow-[#6841FA]/10 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F5F5FF]">
                  <FileCheck className="h-5 w-5 text-[#6841FA]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#2C216F] mb-2">Correção de Dados</h3>
                  <p className="text-sm text-[#5C5C73]">
                    Atualize ou corrija informações incompletas, inexatas ou desatualizadas
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#E5E5FF] p-6 hover:shadow-lg hover:shadow-[#6841FA]/10 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F5F5FF]">
                  <ShieldCheck className="h-5 w-5 text-[#6841FA]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#2C216F] mb-2">Anonimização</h3>
                  <p className="text-sm text-[#5C5C73]">
                    Solicite a anonimização dos seus dados pessoais quando aplicável
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#E5E5FF] p-6 hover:shadow-lg hover:shadow-[#6841FA]/10 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F5F5FF]">
                  <Database className="h-5 w-5 text-[#6841FA]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#2C216F] mb-2">Portabilidade</h3>
                  <p className="text-sm text-[#5C5C73]">
                    Exporte seus dados em formato estruturado e interoperável
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#E5E5FF] p-6 hover:shadow-lg hover:shadow-[#6841FA]/10 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F5F5FF]">
                  <LockKeyhole className="h-5 w-5 text-[#6841FA]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#2C216F] mb-2">Exclusão de Dados</h3>
                  <p className="text-sm text-[#5C5C73]">
                    Solicite a eliminação definitiva dos seus dados pessoais
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#E5E5FF] p-6 hover:shadow-lg hover:shadow-[#6841FA]/10 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F5F5FF]">
                  <Users className="h-5 w-5 text-[#6841FA]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#2C216F] mb-2">Revogação de Consentimento</h3>
                  <p className="text-sm text-[#5C5C73]">
                    Retire seu consentimento para uso dos dados a qualquer momento
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Compliance6 };
