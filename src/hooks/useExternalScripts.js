import { useEffect } from 'react';
export default function useExternalScripts({ url }){
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");

    script.setAttribute("src", "https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js");
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  }, ["https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"]);

};