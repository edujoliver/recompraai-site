import Link from 'next/link'

import { Logo } from '@/components/logo'

const linkGroups = [
    {
        group: 'Soluções',
        items: [
            { title: 'Clientes & CRM 360°', href: '/solucoes/clientes-crm' },
            { title: 'Marketing & Ofertas', href: '/solucoes/marketing-ofertas' },
            { title: 'Reservas & Visitas', href: '/solucoes/reservas-visitas' },
            { title: 'Cashback & Fidelização', href: '/solucoes/cashback-fidelizacao' },
            { title: 'Oráculo de IA', href: '/solucoes/oraculo-ia' },
            { title: 'Integrações & Automação', href: '/solucoes/integracoes-automacao' },
        ],
    },
    {
        group: 'Recursos',
        items: [
            { title: 'Blog', href: '/blog' },
            { title: 'E-books & Guias', href: '/recursos/materiais' },
            { title: 'Webinars & Vídeos', href: '/recursos/webinars' },
            { title: 'FAQ', href: '/recursos/faq' },
            { title: 'Calendário Editorial', href: '/recursos/calendario' },
        ],
    },
    {
        group: 'Empresa',
        items: [
            { title: 'Sobre a RecompraAI', href: '/empresa' },
            { title: 'Carreiras', href: '/empresa/carreiras' },
            { title: 'Imprensa', href: '/empresa/imprensa' },
            { title: 'Programa de Parceiros', href: '/empresa/parceiros' },
            { title: 'Contato', href: '/contato' },
        ],
    },
    {
        group: 'Legal',
        items: [
            { title: 'Política de Privacidade', href: '/politica-de-privacidade' },
            { title: 'Termos de Uso', href: '/legal/termos-de-uso' },
            { title: 'Política de Cookies', href: '/legal/politica-de-cookies' },
            { title: 'LGPD & Segurança', href: '/legal/lgpd-e-seguranca' },
        ],
    },
]

const socialLinks = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/recompraai',
        icon: (
            <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                />
            </svg>
        ),
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/recompraai',
        icon: (
            <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                />
            </svg>
        ),
    },
    {
        name: 'YouTube',
        href: 'https://www.youtube.com/@recompraai',
        icon: (
            <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="M21.58 7.19a2.75 2.75 0 0 0-1.94-1.95C17.86 5 12 5 12 5s-5.86 0-7.64.24A2.75 2.75 0 0 0 2.42 7.19 28.36 28.36 0 0 0 2.18 12a28.36 28.36 0 0 0 .24 4.81 2.75 2.75 0 0 0 1.94 1.95C6.14 19 12 19 12 19s5.86 0 7.64-.24a2.75 2.75 0 0 0 1.94-1.95A28.36 28.36 0 0 0 21.82 12a28.36 28.36 0 0 0-.24-4.81M10 15.46V8.54L15.18 12z"
                />
            </svg>
        ),
    },
]

export default function FooterSection() {
    return (
        <footer className="border-t bg-background/80 backdrop-blur">
            <div className="mx-auto w-full max-w-[88rem] px-4 pb-8 pt-16 sm:px-6 lg:px-10">
                <div className="grid gap-12 md:grid-cols-5">
                    <div className="md:col-span-2 space-y-8">
                        <Link
                            href="/"
                            aria-label="Ir para a página inicial"
                            className="block w-fit">
                            <Logo className="h-6" />
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-sm">
                            O CRM premiado para restaurantes que desejam previsibilidade de receita, fidelização real e decisões orientadas por dados em minutos.
                        </p>
                        <div className="text-sm text-muted-foreground">
                            <p>Av. Paulista, 1234 · São Paulo/SP</p>
                            <p>comercial@recompra.ai · (11) 99999-9999</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-3 md:col-span-3 lg:grid-cols-4">
                        {linkGroups.map((group) => (
                            <div key={group.group} className="space-y-3 text-sm">
                                <span className="block font-medium text-foreground">{group.group}</span>
                                <ul className="space-y-2">
                                    {group.items.map((item) => (
                                        <li key={item.title}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground transition-colors hover:text-primary">
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-6">
                    <span className="order-last w-full text-center text-sm text-muted-foreground md:order-first md:w-auto">
                        © {new Date().getFullYear()} RecompraAI. Todos os direitos reservados.
                    </span>
                    <div className="order-first flex flex-wrap items-center justify-center gap-4 text-sm md:order-last">
                        {socialLinks.map((social) => (
                            <Link
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                className="text-muted-foreground transition-colors hover:text-primary"
                            >
                                {social.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
