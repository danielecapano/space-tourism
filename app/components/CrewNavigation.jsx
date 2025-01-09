"use client";

import Link from "next/link";
import { crew } from "../constants";
import { usePathname } from "next/navigation";

function DestinationsMenu() {
  const path = usePathname("");
  console.log(path);

  return (
    <ul className='flex gap-4 large-desktop:gap-10 w-fit large-desktop:absolute large-desktop:bottom-12 large-desktop:left-0 '>
      {crew.map((member, index) => (
        <li key={member.id}>
          <Link
            href={`/crew/${member.slug}`}
            className={`block bg-white/30 size-[10px] large-desktop:size-[15px] rounded-full cursor-pointer transition-all duration-500 ${
              path === `/crew/${member.slug}` ? "active" : "hover:bg-white/50"
            }`}
          ></Link>
        </li>
      ))}
    </ul>
  );
}

export default DestinationsMenu;
