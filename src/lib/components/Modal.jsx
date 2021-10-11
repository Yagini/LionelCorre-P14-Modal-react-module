import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { AiFillCloseCircle } from "react-icons/ai";

import ModalSpinner from "./ModalSpinner";

/**
 * component modal have a multiple props for personalize the modal
 * @param {props} props props for the component Modal
 * @returns
 */

function Modal({
  blockClose = true,
  showModal,
  setShowModal,
  showClose = true,
  showFade = false,
  showSpinner,
  setShowSpinner,
  ...props
}) {
  /**
   * Escape Close function
   * useEffect for listen the keypress
   */
  const Keypress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(!showModal);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    if (blockClose) {
      window.addEventListener("keyup", Keypress);
      return () => window.removeEventListener("keyup", Keypress);
    }
  }, [Keypress]);

  /**
   * fadeOut function, make a delay when the modal closed for get fade out animation
   * add a className modal__fade-out
   */
  const [fadeOut, setFadeOut] = useState("");
  const close = () => {
    if (showFade) {
      setFadeOut("modal__fade-out");
      setTimeout(setShowModal, 2000);
      setTimeout(setShowSpinner, 100);
    } else {
      setShowSpinner();
      setShowModal();
    }
  };

  return showModal
    ? ReactDOM.createPortal(
        <div className={[showFade ? "modal__fade-in" : "", fadeOut].join(" ")}>
          <div className="modal__layout" onClick={blockClose ? close : ""}>
            <div className="modal__container">
              {showClose ? (
                <AiFillCloseCircle
                  className="modal__close-btn"
                  aria-label="Close modal"
                  onClick={blockClose ? close : ""}
                />
              ) : null}
              <div className={"modal__contain"} onClick={blockClose = false}>{props.children}</div>
            </div>
          </div>
        </div>,
        document.body
      )
    : showSpinner
    ? ReactDOM.createPortal(
        <div className="modal__layout">
          <ModalSpinner />
        </div>,
        document.body
      )
    : null;
}

export default Modal;
