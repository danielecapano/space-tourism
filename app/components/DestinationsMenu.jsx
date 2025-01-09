"use client";

import Link from "next/link";
import { destinations } from "../constants";
import { usePathname } from "next/navigation";

function DestinationsMenu() {
  const path = usePathname("");

  return (
    <ul className='flex gap-8 mb-6'>
      {destinations.map((planet, index) => (
        <li key={planet.id}>
          <Link
            href={`/destination/${planet.name}`}
            className={`border-b-[3px] border-transparent text-small text-primary-300 font-barlow-cond uppercase pb-3 cursor-pointer transition-all duration-500 ${
              path === `/destination/${planet.name}`
                ? "text-white border-b-white hover:border-b-white"
                : "hover:border-b-white/50 hover:text-white"
            }`}
          >
            {planet.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default DestinationsMenu;
