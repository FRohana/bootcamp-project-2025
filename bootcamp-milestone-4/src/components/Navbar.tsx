"use client";

import style from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={style.navbar}>
      <h1 className={style.logo}>
        <Link href="/">Home</Link>
      </h1>
      <ul className={style.navList}>
        <li>
          <Link 
            href="/" 
            className={pathname === "/" ? style.active : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            href="/portfolio" 
            className={pathname === "/portfolio" ? style.active : ""}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link 
            href="/resume" 
            className={pathname === "/resume" ? style.active : ""}
          >
            Resume
          </Link>
        </li>
        <li>
          <Link 
            href="/contact" 
            className={pathname === "/contact" ? style.active : ""}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link 
            href="/blog" 
            className={pathname.startsWith("/blog") ? style.active : ""}
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}