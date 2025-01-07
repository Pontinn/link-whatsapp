// Importação do CSS do elemento de input de telefone
import "intl-tel-input/build/css/intlTelInput.css";
// Importação do Head do Next.js
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gerador de links para Whatsapp</title>
        <meta
          name="description"
          content="Crie links personalizados para WhatsApp em segundos e facilite sua comunicação. Seja para vendas, suporte ou networking, ofereça uma conexão direta e eficiente com seus clientes. Experimente agora e veja como é simples!"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
