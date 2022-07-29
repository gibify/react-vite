import React, { useLayoutEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function BgColor() {
  const [bgColor, setBgColor] = useLocalStorage('color', 'dark');

  useLayoutEffect(() => {
    if (bgColor === 'dark') {
      let dark = document?.body?.style?.backgroundColor;
      dark = '#888';
      return dark
    } else if (bgColor === 'light') {
      let light = document?.body?.style?.backgroundColor;
      light = '#e8e8e8';
      return light;
    }
    return bgColor;
  }, [bgColor])

  return (
    <div className="card">
      <button
        onClick={() => { bgColor === 'dark' ? setBgColor('light') : setBgColor('dark') }}
      >change bg color</button>
    </div >
  )
}

export default BgColor;