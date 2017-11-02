/**
 * @fileoverview ExpandedModal
 * @overview A modal component that will appear above the content
 * when a user selects a gif.
 */
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
        <div className="expanded-modal__image-container">
          <div className="load-spinner"></div>
          <img className="expanded-modal__image" src={props.gif_data.images.original.url} />
          <p className="expanded-modal__title">{props.gif_data.title}</p>
        </div>
      </div>
    </div>
  );
}
