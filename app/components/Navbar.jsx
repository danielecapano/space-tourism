import Image from "next/image";
import Link from "next/link";
import { menuClose, menuOpen } from "../assets";
import { navLinks } from "../constants";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Navbar() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const regex = /^[a-z]+$/gi;

  const isActive = (href) =>
    href === "/" ? path === "/" : path.includes(href);

  return (
    <>
      <nav
        className={`transition-transform duration-[900ms] fixed inset-0 h-screen start-[25%] bg-primary-300/15 tablet:bg-white/5 backdrop-blur-[80px] pl-8 tablet:pl-0 tablet:pr-10 grow flex flex-col tablet:static tablet:h-auto tablet:flex-row tablet:ml-auto desktop:max-w-[calc(55%_+_2.5rem)] desktop:px-10 gap-12 text-base font-barlow-cond uppercase  tablet:translate-x-0 ${
          isOpen ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className='tablet:hidden block py-6 self-end mr-6 '
        >
          <Image src={menuClose} alt='logo' width={24} />
        </button>
        <ul className='flex flex-col gap-8 tablet:gap-12 tablet:flex-row tablet:ml-auto '>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={`border-r-[3px] tablet:border-b-[3px] tablet:border-r-0 border-transparent transition-all duration-500 tablet:py-9 block w-full ${
                  isActive(link.href)
                    ? "border-white hover:border-white"
                    : "hover:border-white/50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className='font-bold mr-3'>{link.id}</span>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button onClick={() => setIsOpen(true)}>
        <Image src={menuOpen} alt='logo' width={24} className='tablet:hidden' />
      </button>
    </>
  );
}

export default Navbar;
