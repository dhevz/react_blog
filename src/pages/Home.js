import {useEffect} from "react";

export default function Home() {
  useEffect(function () {
    document.title = "Home";
  }, []);
  return (
    <section className="section">
      <h1 className="section-title"> Selamat Datang di website Saya</h1>
      <p className="section-description">
        {" "}
        Website ini merupakan informasi tentang SpaceX dan sedikit tentang saya
      </p>
    </section>
  );
}
