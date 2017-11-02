import React from "react";

export const ExpandedModal = (props) => {
  return (
    <div className="expanded-modal">
      <div className="expanded-modal__backdrop" onClick={props.on_close}></div>
      <div className="expanded-modal__close" onClick={props.on_close}>
        <svg viewBox="0 0 40 40">
          <path className="expanded-modal__close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
        </svg>
      </div>
      <div className="expanded-modal__image-wrapper">
        <img className="expanded-modal__image" src={props.gif_url} />
      </div>
    </div>
  );
}
