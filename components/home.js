import { IconContext } from "react-icons";
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa"
import TextLoop from "react-text-loop";

// will be used later
const links = [
    { href: "https://www.linkedin.com/in/indra-arsy-3a8859157/", label: 'FaLinkedIn' },
    { href: "https://www.linkedin.com/in/indra-arsy-3a8859157/", label: 'FaGithubSquare' },
];

export default function Home() {
    return (
        <div className="container m-auto flex h-full mx-auto items-center relative">
            <div className="grid grid-cols-3 md:auto-cols-min">
                <div className="text-gray-700 px-4 py-2 m-2 my-6 col-span-3 md:col-span-2 p-auto md:pt-40">
                    <div>
                        <span className="md:text-5xl text-3xl font-thin font-serif">Hi! <span className="font-serif font-bold">Indra Arsy Kaloka</span> here.</span>
                        <br></br>
                        <TextLoop interval={2000}>
                            <span className="text-serif text-xl font-normal">Junior Web Developer</span>
                            <span className="text-serif text-xl font-normal">Javascript Enthusiast</span>
                            <span className="text-serif text-xl font-normal">Doing Frontend Backend Stuff</span>
                        </TextLoop>
                    </div>
                    <div className="absolute bottom-0 mb-6">
                        <IconContext.Provider value={{ className: "text-4xl inline-flex mr-4 md:mr-10" }}>
                            <a href="https://www.linkedin.com/in/indra-arsy-3a8859157/" target="_blank">
                                <FaLinkedin />
                            </a>

                            <a href="https://github.com/indraarsy" target="_blank">
                                <FaGithubSquare />
                            </a>

                            <a href="https://twitter.com/indraarsyk" target="_blank">
                                <FaTwitterSquare />
                            </a>
                        </IconContext.Provider>
                    </div>
                </div>
                <div className="text-gray-700 text-center px-4 py-2 m-2 col-span-3 md:col-span-1 hidden md:block">
                    <img src="/me.jpg" className="rounded-xl"></img>
                    {/* <span className="text-6xl">ini foto</span> */}
                    <div className="absolute bottom-0 mb-8 right-0">
                        <a className="font-serif" href="mailto:indraarsykaloka@gmail.com">indraarsykaloka@gmail.com</a>
                    </div>
                </div>
            </div>
        </div >
    )
}