import React, { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import { useRouter } from "next/router";

let whatsappLink;
function Home() {
  const router = useRouter();
  const inputRef = useRef(null);
  const messageRef = useRef(null);
  let iti;

  useEffect(() => {
    if (inputRef.current) {
      iti = intlTelInput(inputRef.current, {
        initialCountry: "br",
        loadUtils: () => import("intl-tel-input/build/js/utils"),
      });
    }
    //Cria o elemento script
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3374247426589530";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    //Executa quando o script carregar
    script.onload = () => {
      console.log("Adsbygoogle script loaded successfully.");
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Adsbygoogle error:", e);
      }
    };

    script.onerror = () => {
      console.error("Failed to load the Adsbygoogle script.");
    };

    return () => {
      if (iti) {
        iti.destroy();
      }
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (iti) {
      const fullNumber = iti.getNumber();
      console.log(fullNumber);
      console.log(messageRef.current.value);
      whatsappLink = `https://api.whatsapp.com/send?phone=${fullNumber}&text=${messageRef.current.value}`;
      console.log(whatsappLink);

      router.push({
        pathname: "/link-gerado",
        query: { link: whatsappLink },
      });
    }
  };

  return (
    <div className="main-div">
      <section id="home">
        <h1>GERADOR DE LINKS PARA WHATSAPP</h1>
      </section>
      <section id="form" className="container">
        <div className="form-div">
          <form onSubmit={handleSubmit}>
            <label>Numero whatsapp</label>
            <input type="tel" id="phone" ref={inputRef} />
            <textarea
              id="message"
              placeholder="Digite sua mensagem"
              ref={messageRef}
            ></textarea>
            <button className="submit-button" type="submit">
              Gerar link
            </button>
          </form>
        </div>
        <div className="form-text">teer</div>
      </section>
    </div>
  );
}
export { whatsappLink };
export default Home;
