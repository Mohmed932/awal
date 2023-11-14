"use client";
import React, { useState, memo, useContext } from "react";
import "@/app/styles/NewsRelease.css";
import { DataContext } from "@/app/context";

const NewsRelease = memo(() => {
  const [email, setEmail] = useState("");
  const [check, setcheck] = useState(false);
  const { stateNewsRelease, dispatchNewsRelease } = useContext(DataContext);
  const validateEmail = (email) => {
    const regex =
      /^(?=.{1,254})(?=[^@]*[a-zA-Z0-9._+-])[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regex.test(email)) {
      return {
        valid: false,
        message: "الرجاء إدخال عنوان بريد  صالح",
      };
    }
    if (email.trim() === "") {
      return { valid: false, message: "الرجاء إدخال البريد الإلكتروني" };
    } else {
      return { valid: true };
    }
  };
  const sendEmail = async (email) => {
    try {
      dispatchNewsRelease({ type: "LOADING", payload: null });
      const req = await fetch("https://serverawalbawl.vercel.app/SubScriber", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const res = await req.json();
      dispatchNewsRelease({ type: "LOADED", payload: res.exists });
      console.log(res, dispatchNewsRelease);
    } catch (error) {
      dispatchNewsRelease({ type: "ERROR", payload: error.message });
    }
  };
  const handleValidate = (e) => {
    e.preventDefault();
    const result = validateEmail(email);
    if (!result.valid) {
    } else {
      sendEmail(email);
      setcheck(true);
      setEmail("");
    }
  };
  if (check) {
    if (stateNewsRelease.status === "LOADING") {
      console.log("جار التحقق من البريد المدخل");
    } else if (stateNewsRelease.data === false) {
      setcheck(false);
    } else if (stateNewsRelease.data) {
      setcheck(false);
    }
  }
  //   if (status) {
  //     return null;
  //   }
  return (
    <div className="NewsRelease">
      {stateNewsRelease.data === false ? (
        <div className="NewsRelease_sbscribe">
          <h1>شكرا للاشتراك في نشرتنا الإخبارية </h1>
        </div>
      ) : (
        ""
      )}
      {stateNewsRelease.data === false ? (
        ""
      ) : (
        <form className="NewsRelease_sbscribe" onSubmit={handleValidate}>
          <div className="NewsRelease_sbscribe_container">
            <input
              type="email"
              name="email"
              placeholder="اشترك في خدمة النشرة الإخبارية، انها مجانية"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              style={
                stateNewsRelease.data && email === ""
                  ? { background: " rgb(145, 1, 1)" }
                  : { background: "" }
              }
            >
              {stateNewsRelease.status === "LOADING"
                ? "جار التحقق"
                : stateNewsRelease.data && email === ""
                ? "مشترك بالفعل"
                : "اشترك"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
});

export default NewsRelease;
