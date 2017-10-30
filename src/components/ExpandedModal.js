import React from "react";

export const ExpandedModal = (props) => {
  return (
    <div className="expanded-modal">
      <div className="expanded-modal__backdrop"></div>
      <img className="expanded-modal__image" src={props.gif_url} />
    </div>
  );
}
