import RevealPresentation from '@/components/RevealPresentation';
import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Mefertation  | Prezentacja 1",
};

export default function Page() {
    return (
        <div className={ montserrat.className+" antialiased" }>
            <RevealPresentation />
        </div>
    );
}
