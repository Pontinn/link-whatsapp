import React, { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";

function Home() {
  const inputRef = useRef(null);
  let iti;

  useEffect(() => {
    if (inputRef.current) {
      iti = intlTelInput(inputRef.current, {
        initialCountry: "br",
        loadUtils: () => import("intl-tel-input/build/js/utils"),
      });
    }

    return () => {
      if (iti) {
        iti.destroy();
      }
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (iti) {
      const fullNumber = iti.getNumber();
      console.log(fullNumber);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="tel" id="phone" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Home;
