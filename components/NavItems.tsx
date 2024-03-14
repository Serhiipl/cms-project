"use client";
import Link from "next/link";

interface INavItems {
  title: string;
  path: string;
}

const navItems: INavItems[] = [
  {
    title: "Glówna",
    path: "/",
  },
  {
    title: "O nas",
    path: "#",
  },
  {
    title: "Usługi",
    path: "#",
  },
  {
    title: "Galeria",
    path: "/gallery",
  },
  {
    title: "Kontakt",
    path: "#",
  },
];

export default function NavItems() {
  return (
    <nav className="max-w-full flex flex-row justify-around">
      {navItems.map((el, i) => {
        return (
          <Link className="" key={i} href={el.path}>
            {el.title}
          </Link>
        );
      })}
    </nav>
  );
}
