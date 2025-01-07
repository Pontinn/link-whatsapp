import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const LinkGerado = () => {
  const inputRef = useRef(null);
  const router = useRouter();
  const [copy, setCopy] = useState("Copiar Link");
  const { link } = router.query;

  useEffect(() => {
    if (link) {
      console.log("WhatsApp link:", link);
    }
  }, [link]);

  function copyToClipboard(e) {
    inputRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopy("Link Copiado!");
    setTimeout(() => {
      setCopy("Copiar Link");
    }, 2000);
  }

  return (
    <div className="main-div">
      <section id="home">
        <h1>LINK GERADO COM SUCESSO!</h1>
      </section>

      <div className="container container-column">
        <h2>Copie e compartilhe seu link personalizado</h2>
        <input
          type="text"
          className="generated-link"
          value={link}
          ref={inputRef}
        />
        <button className="copy-button" onClick={copyToClipboard}>
          {copy}
        </button>
      </div>
    </div>
  );
};

export default LinkGerado;
