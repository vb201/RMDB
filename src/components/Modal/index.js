import React, { useEffect, useRef } from "react";
import ReactDom from "react-dom";
import { Modal, Overlay, ScrollDisabler } from "./styles";
import CrossIcon from "../../assets/images/cross.png";
const Model = ({ children, open, setIsOpen }) => {
  const modelRef = useRef();

  useEffect(() => {
    if (!open) return;

    function listener(event) {
      // const listener = (event) => {
      if (modelRef.current?.contains(event.target)) return;
      setIsOpen(false);
    }

    window.addEventListener("click", listener);
    return () => window.removeEventListener("click", listener);
  }, [open, setIsOpen]);

  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <Overlay>
        <Modal ref={modelRef}>
          <img
            src={CrossIcon}
            alt="Close Icon"
            className="absolute right-1"
            onClick={() => setIsOpen(false)}
            width="30px"
          />
          {children}
        </Modal>
      </Overlay>
      <ScrollDisabler />
    </>,
    document.getElementById("portal")
  );
};

export default Model;
// 22:00
// https://www.youtube.com/watch?v=dEv167Ps8W4
