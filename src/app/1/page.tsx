import RevealPresentation from '@/components/RevealPresentation';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Mefertation  | Prezentacja 1",
};

export default function Page() {
    return (
        <>
            <RevealPresentation />
        </>
    );
}
