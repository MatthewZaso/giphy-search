import React from "react";

export const GifGridItem = (props) => {
  return (
    <div className="col-6 col-sm-3 gif-grid-item" onClick={props.on_select} data-giphy-id={props.giphy_id}>
      <div className="gif-grid-item__inner">
        <div className="gif-grid-item__loader"></div>
        <img className="gif-grid-item__image" src={props.preview_url} />
      </div>
    </div>
  );
}
