import React from "react";
import "./RenderContact.scss";
import { IsActiveContext } from "../../Header/NavButtons/RenderNavButtons";

function Contact() {
  const pageIsActive = React.useContext(IsActiveContext);

  React.useEffect(() => {
    document.title = "Contact";
  }, [pageIsActive]);

  return (
    <main className="Contact">
      <address className="contact-me">
        <a href="mailto:hugo.berlinlife@gmail.com">
          <i className="fas fa-envelope-square"></i>
        </a>
        <a href="mailto:hugo.berlinlife@gmail.com">hugo.berlinlife@gmail.com</a>
      </address>

      <address className="contact-me">
        <i className="fas fa-phone-square-alt"></i>
        <a href="tel:+4917678293187">+49 (0)176 782 93 187</a>
      </address>
    </main>
  );
}

export default Contact;
