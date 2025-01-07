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
      //codifica a mensagem para ser enviada via URL
      const encodedMessage = encodeURI(messageRef.current.value);
      whatsappLink = `https://api.whatsapp.com/send?phone=${fullNumber}&text=${encodedMessage}`;
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
          <h3>
            Preencha os campos abaixo e <br />
            gere seu link personalizado!
          </h3>
          <form onSubmit={handleSubmit}>
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
        <div className="form-text">
          <ul>
            <li className="listed-text">
              <strong>Vantagens ao gerar seu link personalizado:</strong>
            </li>
            <li className="listed-text">
              <strong>Facilidade e agilidade na comunicação:</strong> <br /> Com
              um link direto para o WhatsApp, os usuários podem iniciar uma
              conversa imediatamente, sem precisar salvar o número ou passar por
              múltiplos passos. Isso melhora a experiência do cliente e torna a
              comunicação mais rápida e fluida.
            </li>
            <li className="listed-text">
              <strong>Melhoria no marketing e no atendimento:</strong> <br />{" "}
              Empresas podem incluir o link em campanhas de marketing, e-mails,
              redes sociais, ou até mesmo em cartões de visita. Isso facilita o
              contato direto com potenciais clientes, agilizando o atendimento e
              aumentando as chances de conversões.
            </li>
            <li className="listed-text">
              <strong>Personalização e praticidade:</strong> <br /> O link
              gerado pode ser personalizado, como por exemplo, com uma mensagem
              inicial predefinida (ex: “Oi, estou interessado no seu produto”).
              Isso otimiza a interação e garante que o usuário tenha uma
              experiência mais objetiva desde o primeiro contato.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
export { whatsappLink };
export default Home;
