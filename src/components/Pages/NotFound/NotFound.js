import React from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";
import { IsActiveContext } from "../../Header/NavButtons/RenderNavButtons";

function NotFound() {
  const pageIsActive = React.useContext(IsActiveContext);
  React.useEffect(() => {
    document.title = "Hugo's Portofolio - Error";
  }, [pageIsActive]);
  return (
    <main className="NotFound">
      <h2>
        <p>An error has ocurred! </p>
        <p>
          Please click the button below to return to the home page or use the
          above navigation buttons to return to the website
        </p>

        <Link to="/projects">
          <button>Back to Home Page</button>
        </Link>
      </h2>
    </main>
  );
}

export default NotFound;
