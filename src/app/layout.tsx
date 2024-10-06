import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, JetBrains_Mono } from "next/font/google";

const jetbrains_mono = JetBrains_Mono({ 
    subsets: ['latin'], 
    variable: '--font-jetbrains_mono',
})

const montserrat = Montserrat({ 
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat',  
})

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pl">
        <body className={`${ jetbrains_mono.variable } ${ montserrat.variable } antialiased`}>
            { children }
        </body>
    </html>
  );
}
