import Link from "next/link";
import { Component } from "react";

const links = [
    { href: "#", label: "Skills" },
    { href: "#", label: "Projects" },
    { href: "#", label: "Experience" },
];

class Nav extends Component {
    constructor(props) {
        super(props);
        this.nav = React.createRef();
        this.navClick = this.navClick.bind(this);
    }

    navClick(e) {
        console.log(this.nav);
        // this.nav = e.target.dataset.ref;
        // this.scrollToMyRef;
    }

    scrollToMyRef = () => window.scrollTo(0, this.nav.offsetTop);

    render() {
        return (
            <nav className="flex fixed items-center bg-transparent md:p-3 flex-wrap justify-center h-auto absolute w-full z-10">
                <a href="#" className="p-2 mr-4 inline-flex items-center">
                    <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current text-black h-8 w-8 mr-2"
                    >
                        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                    </svg>
                    {/* <span class="text-xl text-black font-bold uppercase tracking-wide"></span> */}
                </a>
                <div
                    className="w-full md:inline-flex md:flex-grow md:w-auto"
                    id="navigation"
                >
                    <ul className="md:inline-flex flex-row md:ml-auto md:w-auto w-full md:items-center items-start flex md:h-auto md:space-x-6">
                        {links.map(({ href, label }) => (
                            <li
                                key={`${href}${label}`}
                                className="flex inline-flex md:inline-flex md:w-auto w-full py-2 rounded text-dark items-center justify-center hover:text-gray-700"
                                data-ref={label}
                                onClick={this.navClick}
                            >
                                <a
                                    href={href}
                                    className="font-serif"
                                    data-ref={label}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;
