import React from "react";
import "./topside.css";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { useState } from "react";

const TotoSide = () => {
  const [visible, setVisible] = useState(false);

  const handleTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const checkScroll = () => {
    let heightToHidden = 250;
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
  }, []);

  return (
    <div className="topside">
      {visible && (
        <div className="btn" onClick={handleTop}>
          <ArrowUpIcon className="icon" />
        </div>
      )}
    </div>
  );
};

export default TotoSide;
