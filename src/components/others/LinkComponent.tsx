import Link from "next/link";

type Props = {
    link: string;
    number: number;
    title: string;
    linkToFiles?: string | null;
}

const LinkComponent = ({link, number, title, linkToFiles}: Props) => {
    return (
        <div className="flex gap-4">
            <Link href={ link } target="_blank" className="text-sm md:text-base text-nowrap bg-black w-fit px-4 py-2 md:px-8 md:py-4 text-white uppercase hover:bg-white duration-300 hover:text-black cursor-pointer border-[1px] border-black">
                <span className="mr-1">{ number }#</span> { title }
            </Link>
            { linkToFiles && (
            <Link href={ linkToFiles } target="_blank" className="text-sm md:text-base bg-black w-fit px-4 py-2 md:px-6 md:py-4 text-white uppercase hover:bg-white duration-300 hover:text-black cursor-pointer border-[1px] border-black">
                <span className="">📂</span>
            </Link>
            )}
        </div>
    );
}

export default LinkComponent;