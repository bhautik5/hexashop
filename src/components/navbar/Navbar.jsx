"use client";
import Image from "next/image";
import { Menu, X, CircleUserRound, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { menuItems } from "@/constants/data";
import { usePathname } from "next/navigation";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import "./Navbar.scss";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sc-header header-sticky">
      <div className="sc-header__container">
        <nav className="sc-header__nav">
          <div className="sc-header__nav-row">
            <div className="sc-header__logo">
              <Link href={"/"}>
                <Image
                  className="sc-header__logoImg"
                  src={logo}
                  alt="logo"
                  width={195}
                  height={59}
                  sizes="100vw"
                />
              </Link>
            </div>
            <div className="sc-header__menu sc-header__desktop-menu">
              <ul>
                {menuItems.map((item) => (
                  <li
                    className={`${pathname === item.url ? "active" : ""}`}
                    key={item.id}
                  >
                    <Link href={item.url}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sc-header__menu-icons">
              <div className="sc-header__menu-last-item">
                <Link href={"#"}>
                  <CircleUserRound />
                </Link>
                <Link href={"#"}>
                  <ShoppingCart />
                </Link>
              </div>

              <Menu
                size={32}
                className="sc-header__menu-icons-hamburger"
                onClick={(e) => setIsMobileMenuOpen((prev) => !prev)}
              />
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="sc-header__menu sc-header__mobile-menu">
              <ul>
                {menuItems.map((item) => (
                  <li
                    className={`${pathname === item.url ? "active" : ""}`}
                    key={item.id}
                  >
                    <Link href={item.url}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
