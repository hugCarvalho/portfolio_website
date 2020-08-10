import React from "react";
import "./RenderAbout.scss";
import AboutEN, { AboutDE } from "./About";
import CV_EN from "../../../shared/CV_english.pdf";
import CV_DE from "../../../shared/CV_deutsch.pdf";

import { LanguageContext } from "../../../App";

function RenderAbout() {
  const { isLanguageEnglish } = React.useContext(LanguageContext);

  return (
    <div className="container__about">
      {/* Only displayed on smaller mobile viewport */}
      <section className=" show-smallest-screen">
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={isLanguageEnglish ? CV_EN : CV_DE}>
              CV
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/hugCarvalho">
              GiHhub
            </a>
          </li>
        </ul>
      </section>
      {/*  */}

      {isLanguageEnglish ? <AboutEN /> : <AboutDE />}
    </div>
  );
}

export default RenderAbout;
