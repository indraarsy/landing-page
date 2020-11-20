import { Component } from "react";
import { IconContext } from "react-icons";
import { FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiPhp, SiJavascript, SiLaravel } from "react-icons/si";

class Skills extends Component {
    render() {
        return (
            <div className="container flex mx-auto h-screen">
                <div className="my-auto w-full px-4 m-2">
                    <div className="mb-16 md:mb-32">
                        <span className="font-serif md:text-5xl text-3xl font-bold">
                            Skills
                        </span>
                    </div>
                    <div className="grid grid-cols-4 md:grid-cols-3 gap-10">
                        <IconContext.Provider
                            value={{
                                className:
                                    "text-4xl md:text-6xl inline-flex mr-4 md:mr-10",
                            }}
                        >
                            <div className="col-span-2 md:col-span-1">
                                <FaHtml5 />
                                <span className="font-serif text-md md:text-xl">
                                    HTML 5
                                </span>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <FaCss3Alt />
                                <span className="font-serif text-md md:text-xl">
                                    CSS 3
                                </span>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <SiTailwindcss />
                                <span className="font-serif text-md md:text-xl">
                                    Tailwind
                                </span>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <SiJavascript />
                                <span className="font-serif text-md md:text-xl">
                                    Javascript
                                </span>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <FaReact />
                                <span className="font-serif text-md md:text-xl">
                                    React Js
                                </span>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <FaVuejs />
                                <span className="font-serif text-md md:text-xl">
                                    Vue Js
                                </span>
                            </div>
                            <div className="col-span-4 md:col-span-3">
                                <hr></hr>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <FaNodeJs />
                                <span className="font-serif text-md md:text-xl">
                                    Node Js
                                </span>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <SiPhp />
                                <span className="font-serif text-md md:text-xl">
                                    PHP
                                </span>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <SiLaravel />
                                <span className="font-serif text-md md:text-xl">
                                    Laravel
                                </span>
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
