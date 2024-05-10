import Image from "next/image";
import logo from "@/assets/images/white-logo.png";
import "./Footer.scss";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="sc-footer">
      <div className="sc-footer__container">
        <div className="sc-footer__wrapper">
          <div className="sc-footer__items">
            <div className="sc-footer__item">
              <Image src={logo} alt="logo" className="sc-footer__logo" />
              <div className="">
                16501 Collins Ave, Sunny Isles Beach, FL 33160, United States
              </div>
              <div className="">
                <Link href={`mailto:test@test.com`}>test@test.com</Link>
              </div>
              <div className="">
                <Link href={`tel:+91 9876543210`}> +91 9876543210</Link>
              </div>
            </div>
            <div className="sc-footer__item">
              <h3>Shopping & Categories</h3>
              <ul>
                <li>
                  <Link href={`/products/mens`}>{`Men's Shopping`}</Link>
                </li>
                <li>
                  <Link href={`/products/women`}>{`Women's Shopping`}</Link>
                </li>
              </ul>
            </div>
            <div className="sc-footer__item">
              <h3>Useful Links</h3>
              <ul>
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>
                  <Link href={`/contact`}>Contact</Link>
                </li>
              </ul>
            </div>
            <div className="sc-footer__item">
              <h3>Help & Information</h3>
              <ul>
                <li>
                  <Link href={`/`}>Help</Link>
                </li>
                <li>
                  <Link href={`/`}>Shipping</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="sc-footer__cp-text">
            Copyright © {new Date().getFullYear()}, All Rights Reserved.
            <div className="sc-footer__social-icons">
              <Link href={"#"}>
                <Facebook />
              </Link>
              <Link href={"#"}>
                <Twitter />
              </Link>
              <Link href={"#"}>
                <Instagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
