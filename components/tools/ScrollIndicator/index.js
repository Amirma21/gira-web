import { useEffect, useState } from "react";
import {  useWindowScroll } from "react-use";

const ScrollIndicator = () => {
  const { x, y } = useWindowScroll();
  const [scrolled, setScrolled] = useState(0);

  console.log(scrolled);

  useEffect(() => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
      console.log(height , y);
    setScrolled((y / height) * 100);
  }, [y]);

  return (
    <>
      <div className="w-full z-50 h-1 fixed top-0 left-0 bg-gray-50 ltr">
        <div
          className="h-full bg-red-500 ltr "
          style={{ width: `${scrolled}%` }}
        ></div>
      </div>
    </>
  );
};

export default ScrollIndicator;
