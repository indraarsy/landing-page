import Image from "next/image";

export default function Project() {
    return (
        <div className="container flex mx-auto mobile">
            <div className="pt-24 w-full px-4 m-2">
                <div>
                    <span className="font-serif md:text-5xl text-3xl font-bold">
                        Projects
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 md:pt-16">
                    <div className="col-span-1 md:col-span-1 relative">
                        <div className="w-full absolute bottom-1/2 text-center font-serif font-bold">
                            Landing Page
                        </div>
                        <a href="https://indraarsy.wtf" target="_blank">
                            <Image
                                src="/project1.png"
                                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:opacity-25"
                                width={580}
                                height={350}
                            ></Image>
                        </a>
                    </div>
                    <div className="col-span-1 md:col-span-1 relative">
                        <div className="w-full absolute bottom-1/2 text-center font-serif font-bold">
                            Eazy Trade
                        </div>
                        <a href="http://eazy-trade.net/" target="_blank">
                            <Image
                                src="/project2.png"
                                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:opacity-25"
                                width={580}
                                height={350}
                            ></Image>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
