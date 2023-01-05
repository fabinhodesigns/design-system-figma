import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (    
        <Comp
            className={clsx(
                'py-4 px-3 bg-purple-900 rounded font-semibold text-black'
            )}
        >
            {children}
        </Comp>
    )
}