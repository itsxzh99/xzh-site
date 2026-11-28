import './globals.css'
import type { Metadata } from "next";
import type{ ReactNode } from "react";

export const metadata: Metadata = {
    title: 'itsxzh',
    description: '开发者，写代码也写字'
}

export default function RootLayout({children}: {children: ReactNode}){
    return (
        <html lang="zh-CN">
            <body>
                {children}
            </body>
        </html>
    )
}