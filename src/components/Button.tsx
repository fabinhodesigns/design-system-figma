import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (    
        <Comp
            className={clsx(
                'py-4 px-3 bg-purple-900 rounded font-semibold text-white',
                className
            )}
            {...props}
        >
            {children}
        </Comp>
    )
}