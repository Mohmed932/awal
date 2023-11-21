"use client";
import {
  FaShare,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";
import "@/app/styles/news.css";
import { DataContext } from "@/app/context";
import { useContext } from "react";

const Scoial = ({ res, params }) => {
  const { isDarkMode } = useContext(DataContext);
  const url = ` https://www.awalbawl.online/news/${params.id}`;
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  const twitter = `https://twitter.com/intent/tweet?url=${url}&text=${res?.title}`;
  const linkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;
  const pinterest = `https://www.pinterest.com/pin/create/button/?url=${url}&description=${res?.title}`;
  const whatsapp = `https://api.whatsapp.com/send?text=${url}`;
  const shareData = {
    url,
    title: res?.title,
    descraption: res?.more_details.one,
  };
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => {
          console.log("تمت المشاركة بنجاح!");
        })
        .catch((error) => {
          console.error("حدث خطأ في المشاركة:", error);
        });
    } else {
      console.warn("مشاركة الويب غير مدعومة على هذا المستعرض!");
    }
  };
  return (
    <div className="SingleNews_share">
      <FaShare
        className="SingleNews_icon SingleNews_FaShare"
        onClick={handleShare}
      />
      <a href={facebook} target="_blank" rel="noreferrer" aria-label="facebook">
        <FaFacebookF className="SingleNews_icon SingleNews_FaFacebookF" />
      </a>
      <a href={twitter} target="_blank" rel="noreferrer" aria-label="twitter">
        <FaTwitter className="SingleNews_icon SingleNews_FaTwitter" />
      </a>
      <a href={linkedin} target="_blank" rel="noreferrer" aria-label="linkedin">
        <FaLinkedinIn className="SingleNews_icon SingleNews_FaLinkedinIn" />
      </a>
      <a
        href={pinterest}
        target="_blank"
        rel="noreferrer"
        aria-label="pinterest"
      >
        <FaPinterestP className="SingleNews_icon SingleNews_FaPinterestP" />
      </a>
      <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="whatsapp">
        <FaWhatsapp className="SingleNews_icon SingleNews_FaWhatsapp" />
      </a>
    </div>
  );
};

export default Scoial;
