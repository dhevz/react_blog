import {useEffect} from "react";

export default function Contact() {
  useEffect(function () {
    document.title = "Contact";
  }, []);
  return (
    <section className="section">
      <h1 className="section-title"> CONTACT</h1>
      <p className="section-description">
        {" "}
        Berikut adalah kontak saya yang dapat dihubungi
      </p>
      <ul>
        <li>📧e-mail : devanialexandri1@gmail.com</li>
        <li>🟢whatsapp : +62895341028439</li>
        <li>💼linked-in: www.linkedin.com/in/devani-alexandri-287b7a260</li>
      </ul>
    </section>
  );
}
