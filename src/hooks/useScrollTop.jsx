import { useState, useEffect } from "react";

function getScrollTop() {
  return window.pageYOffset;
}

export default function useScrollTop() {
  const [scrollTop, setScrollTop] = useState(getScrollTop());

  useEffect(() => {
    function handleScroll() {
      setScrollTop(getScrollTop());
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollTop;
}
