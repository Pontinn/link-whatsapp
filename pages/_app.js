// Importação do CSS do elemento de input de telefone
import "intl-tel-input/build/css/intlTelInput.css";
// Importação do Head do Next.js
import Head from "next/head";
import { useEffect } from "react";

import "../styles/global.css"; // Caminho atualizado para o arquivo CSS

function App({ Component, pageProps }) {
  useEffect(() => {
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
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="app">
      <Head>
        <title>Gerador de links para Whatsapp</title>
        <meta
          name="description"
          content="Crie links personalizados para WhatsApp em segundos e facilite sua comunicação. Seja para vendas, suporte ou networking, ofereça uma conexão direta e eficiente com seus clientes. Experimente agora e veja como é simples!"
        />
      </Head>
      <section className="header">
        <a href="/" className="logo">
          pontin.dev<span className="blinking">|</span>
        </a>
      </section>
      <Component {...pageProps} />
      <section className="footer">
        <div className="footer-info">
          <a href="/termos-de-uso">Termos de Uso</a>
          <a href="/politica-de-privacidade">Política de Privacidade</a>
        </div>
        <div
          className="copyright text-align-center"
          style={{ paddingBottom: "5px" }}
        >
          <p>
            © 2025 Gerador de Links para WhatsApp. Todos os direitos reservados.
            Desenvolvido por pontin.dev.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
