import { useState } from "react";

function Mode() {
  const [dark, setDark] = useState(false);
  const handleInput = () => {
    setDark(!dark);
  };
  return (
    <>
      <div className={`${dark ? "dark" : ""}`}></div>
      <button onClick={handleInput}>Toggle{dark ? "Light" : "Dark"}</button>
    </>
  );
}
export default Mode;
