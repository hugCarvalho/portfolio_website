import React from "react";
import "./RenderMyInfoCard.scss";
import MyInfoCardLinks from "./MyInfoCardLinks/MyInfoCardLinks";
import MyPic from "./MyPic/MyPic";
import LanguagesSpoken from "./LanguagesSpoken/LanguagesSpoken";

function RenderMyInfoCard() {
  const [cardStart, setCardStart] = React.useState(false);
  document.addEventListener("DOMContentLoaded", () => {
    setCardStart(true);
  });

  return (
    <>
      <section
        className={`RenderMyInfoCard ${cardStart && "start"} `}
        id="mycard"
        data-testid="My Info Card"
      >
        <MyInfoCardLinks />
        <MyPic />
        <LanguagesSpoken />
      </section>
    </>
  );
}

export default RenderMyInfoCard;
