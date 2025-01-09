"use client";

import Link from "next/link";
import { technology } from "../constants";
import { usePathname } from "next/navigation";

function TechnologyMenu() {
  const path = usePathname("");

  return (
    <ul className='flex gap-4 w-fit mx-auto desktop:flex-col'>
      {technology.map((tech) => (
        <li key={tech.id}>
          <Link
            href={`/technology/${tech.slug}`}
            className={`tech ${
              path === `/technology/${tech.slug}` ? "active" : ""
            }`}
          >
            {tech.id}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default TechnologyMenu;
