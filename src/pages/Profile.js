import {useEffect} from "react";

export default function Profile() {
  useEffect(function () {
    document.title = "Profile";
  }, []);
  return (
    <section className="section">
      <h1 className="section-title"> PROFILE </h1>
      <p className="section-description">
        {" "}
        Nama saya Devani, saya seorang programmer junior
      </p>
    </section>
  );
}
