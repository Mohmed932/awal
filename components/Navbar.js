"use client";
import { useEffect, useRef, useState, useContext } from "react";
import "@/app/styles/Navbar.css";
import { AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Search from "./Search";
import { DataContext } from "@/app/context";

const Navbar = () => {
  const { dispatchSearch, isDarkMode, setIsDarkMode } = useContext(DataContext);
  const [searchResult, setSearchResult] = useState("");
  const [show, setshow] = useState(false);
  const [more, setmore] = useState(false);
  const [searchItem, setsearchItem] = useState(false);
  const [phone, setphone] = useState(false);
  const inputValue = useRef();
  const handelStorage = () => {
    setIsDarkMode(localStorage.getItem("isDarkMode") === "false");
  };
  const handelClose = () => {
    setmore(false);
    setsearchItem(false);
    setphone(false);
    setSearchResult("");
    setshow(false);
  };
  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);
  const Path = [
    { name: "رياضه", url: "/sports" },
    { name: "تكنولوجيا", url: "/technology" },
    { name: "اقتصاد", url: "/economy_Stock_Exchange" },
    { name: "سياسه", url: "/politics" },
    { name: "اخبار العالم", url: "/world" },
    { name: "فن", url: "/art" },
    { name: "وظائف", url: "/careers" },
    { name: "تعليم", url: "/school" },
    { name: "ثقافه", url: "/culture" },
    { name: "صحه", url: "/health" },
    { name: "احداث", url: "/events" },
    { name: "التحقيقات", url: "/investigations" },
    { name: "خدمات السفارات", url: "/embassies_services" },
  ];
  const HandelSearch = async () => {
    try {
      dispatchSearch({ type: "LOADING", payload: null });
      const req = await fetch(
        `https://serverawalbawl.vercel.app/news/search?search=${searchResult}`
      );
      const res = await req.json();
      dispatchSearch({ type: "LOADED", payload: res });
    } catch (error) {
      dispatchSearch({ type: "ERROR", payload: error.message });
    }
  };
  const navigate = useRouter();
  const item = (
    <div className="Navbar_main">
      <div className="logo" onClick={() => navigate.push("/")}>
        <h1>اول بأول</h1>
      </div>
      <div className="Navbar_item">
        <div className="Sidebar">
          <div
            className={
              phone
                ? "Sidebar_details Sidebar_details_style"
                : "Sidebar_details"
            }
          >
            {Path.map(({ url, name }, idx) => (
              <Link href={url} key={idx} onClick={handelClose}>
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div className="Navnar_searching">
          <div
            className={
              searchItem ? "Navnar_search Navnar_search_style" : "Navnar_search"
            }
          >
            <AiOutlineClose
              style={{ cursor: "pointer", padding: "10px" }}
              onClick={() =>
                setsearchItem(false) & setSearchResult("") & setshow(false)
              }
            />
            <BsSearch
              onClick={() =>
                dispatch(News_Search(searchResult)) & setshow(true)
              }
              style={{ cursor: "pointer" }}
            />
            <input
              placeholder="ابحث عن خبرك"
              value={searchResult}
              onChange={(e) => {
                setSearchResult(e.target.value);
                setshow(false);
              }}
              ref={inputValue}
              type="search"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  setshow(true);
                  e.preventDefault();
                  HandelSearch(); // اختياري: لمنع إعادة تحميل الصفحة
                }
              }}
            />
          </div>
          <div className="Navnar_searching_result">
            {searchResult !== "" && show ? (
              <Search
                setSearchResult={setSearchResult}
                searchResult={searchResult}
                setsearchItem={setsearchItem}
                show={show}
                setshow={setshow}
              />
            ) : (
              ""
            )}
          </div>
          <BsSearch
            className="icon_search"
            onClick={() =>
              setsearchItem(!searchItem) &
              setmore(false) &
              setphone(false) &
              setSearchResult("") &
              inputValue.current.focus()
            }
          />
        </div>
        <div
          className={
            phone ? "navbar_mobile navbar_mobile_active" : "navbar_mobile"
          }
          onClick={() =>
            setphone(!phone) &
            setsearchItem(false) &
            setmore(false) &
            setSearchResult("")
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span
          className="Navbar_more"
          onClick={() =>
            setmore(!more) & setsearchItem(false) & setSearchResult("")
          }
        >
          المزيد
          <div
            className={
              more ? "more_details more_details_style" : "more_details"
            }
          >
            {Path.slice(5, 13).map(({ url, name }, idx) => (
              <Link href={url} key={idx} onClick={handelClose}>
                {name}
              </Link>
            ))}
          </div>
        </span>
        {Path.slice(0, 5).map(({ url, name }, idx) => (
          <Link
            href={url}
            key={idx}
            onClick={handelClose}
            className="navbar_main_NavLink"
          >
            {name}
          </Link>
        ))}
        <Link href="/" className="navbar_home">
          الرئيسيه
        </Link>
      </div>
    </div>
  );

  return (
    <header className="Navbar">
      <div className="forAds">
        <a href="https://wa.me/+201064702174" alt="محمد محمود فؤاد محمد">
          للاعلان
        </a>
        {isDarkMode ? (
          <BsFillMoonFill onClick={handelStorage} />
        ) : (
          <BsFillSunFill onClick={handelStorage} />
        )}
      </div>
      {item}
    </header>
  );
};

export default Navbar;
