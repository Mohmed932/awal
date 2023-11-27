"use client";
import React, { useEffect, useState, memo, useContext } from "react";
import "@/app/styles/Footer.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { SiGooglenews } from "react-icons/si";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DataContext } from "@/app/context";

const Footer = memo(() => {
  const { isDarkMode } = useContext(DataContext);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShow(currentScrollPos <= 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [show]);
  const navigate = useRouter();
  return (
    <div className={isDarkMode ? "Footer dark-mode" : "Footer"}>
      <div className="Footer_links">
        <div className="Footer_revers">
          <a
            href="https://m0hmed.vercel.app/"
            alt="محمد محمود فؤاد"
            rel="noreferrer"
            target="blank"
            aria-label="محمد محمود فؤاد"
          >
            Mohmed Mahmoud
          </a>
          <div className="logo" onClick={() => navigate.push("/")}>
            <span>A</span>
            <span>B</span>
          </div>
        </div>
        <div className="Footer_alinks">
          <div className="terms_link">
            <Link href="/TermsAndPrivacy">سياسة الخصوصية</Link>
          </div>
          <div className="social_links">
            <a
              href="http://www.facebook.com/awalbawl"
              target="_blank"
              rel="noreferrer"
              alt="صفحه اول باول علي فيسبوك"
              aria-label="صفحه اول باول علي فيسبوك"
            >
              <FaFacebook />
            </a>
            <a
              href="https://news.google.com/publications/CAAqBwgKMOn1nQww-vWuBA?ceid=US:en&oc=3"
              rel="noreferrer"
              target="_blank"
              alt="تابع اول باول علي google news"
              aria-label="تابع اول باول علي google news"
            >
              <SiGooglenews />
            </a>
          </div>
        </div>
      </div>
      <div
        className={show ? "Footer_Top" : "Footer_Top Footer_Top_hidden"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <AiOutlineArrowUp />
      </div>
    </div>
  );
});

export default Footer;
