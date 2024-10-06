import LinkComponent from "@/components/others/LinkComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mefertation",
};

export default function Page() {
    return (
        <>
            <div className={`flex w-full h-screen`}>
                <div className="flex flex-col p-4 md:p-8">
                    <div className="mb-8">
                        <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-2">Mefertation (WWSI)</h1>
                        <p className="text-sm xl:text-lg">Prezentacje grupy: Mateusz Krysiak, Jakub Grabowski, Radosław Mróz.</p>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <LinkComponent link="/presentations/1" number={1} title="Pie Chart | Matplotlib" linkToFiles="/2" />
                    </div>
                </div>
            </div>
        </>
    );
}
