"use client"
import React from 'react'
import { ThemeProvider as NextThemeProvider, ThemeProviderProps } from 'next-themes'
import Header from '../layout/header'
import Footer from '../layout/footer'
import { cn } from '@/lib/utils'

interface ExtendedThemeProvidersPorps extends ThemeProviderProps {
    containerClassName?: string;
}


const ThemeProvder = ({ children, containerClassName, ...props }: ExtendedThemeProvidersPorps) => {
    return (
        <NextThemeProvider {...props}>
            <Header />
            <main className={cn('container mx-auto px-4', containerClassName)}>
                {children}
            </main>
            <Footer />

        </NextThemeProvider>
    )
}

export default ThemeProvder