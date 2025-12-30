import Image from 'next/image'

import { cn } from '@/lib/utils'

const LOGO_SRC = '/logos/recompraai.svg'

type LogoProps = {
    className?: string
    priority?: boolean
}

export const Logo = ({ className, priority }: LogoProps) => {
    return (
        <Image
            src={LOGO_SRC}
            alt="RecompraAI"
            width={160}
            height={48}
            priority={priority}
            className={cn('h-6 w-auto', className)}
        />
    )
}

export const LogoIcon = ({ className, priority }: LogoProps) => {
    return (
        <Image
            src={LOGO_SRC}
            alt="RecompraAI"
            width={48}
            height={48}
            priority={priority}
            className={cn('h-8 w-auto', className)}
        />
    )
}

export const LogoStroke = ({ className, priority }: LogoProps) => {
    return (
        <Image
            src={LOGO_SRC}
            alt="RecompraAI"
            width={180}
            height={56}
            priority={priority}
            className={cn('h-10 w-auto', className)}
        />
    )
}
