"use client";
import Link from "next/link";
import { logo } from "../assets";
import Image from "next/image";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className='max-w-[1440px] mx-auto font-bellefair fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full flex justify-between items-center px-6 py-6 bg-transparent text-white tablet:py-0 tablet:px-0 desktop:top-10'>
      <Link href='/'>
        <Image
          src={logo}
          alt='logo'
          width={48}
          priority={true}
          className='w-10 tablet:w-12 tablet:mx-10 large-desktop:mx-16'
        />
      </Link>
      <div className='hidden desktop:block relative z-20 bg-white/50 h-[1px] grow -mr-6 large-desktop:-mr-10'></div>

      <Navbar />
    </header>
  );
}

export default Header;
