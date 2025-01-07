import { useRouter } from "next/router";
import { useEffect } from "react";

const LinkGerado = () => {
  const router = useRouter();
  const { link } = router.query;

  useEffect(() => {
    if (link) {
      console.log("WhatsApp link:", link);
    }
  }, [link]);

  return (
    <div className="main-div">
      <section id="home">
        <h1>LINK GERADO COM SUCESSO!</h1>
      </section>

      <div className="container">
        <input type="text" className="generated-link" value={link} />
      </div>
    </div>
  );
};

export default LinkGerado;
