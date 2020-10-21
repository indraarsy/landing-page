import Link from "next/link";

const links = [
  { href: "https://github.com/vercel/next.js", label: "Skills" },
  { href: "https://nextjs.org/docs", label: "Projects" },
  { href: "https://nextjs.org/docs", label: "Experience" },
];

export default function Nav() {
  return (
    <nav className="flex items-center bg-white p-3 flex-wrap justify-center">
      <a href="#" className="p-2 inline-flex items-center">
        <img src="/logo.png" className="w-12"></img>
        {/* <span className="text-xl text-dark font-bold uppercase tracking-wide">
          Talwind ANYING MUMET
        </span> */}
      </a>
      <div
        className="w-full md:inline-flex md:flex-grow md:w-auto"
        id="navigation"
      >
        <ul className="md:inline-flex flex-row md:ml-auto md:w-auto w-full md:items-center items-start flex md:h-auto md:space-x-6">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`} className="flex inline-flex md:inline-flex md:w-auto w-full px-3 py-2 rounded text-dark items-center justify-center">
              <a href={href} className="font-serif">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
