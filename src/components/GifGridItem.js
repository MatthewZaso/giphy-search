import React from "react";

export const GifGridItem = (props) => {
    return (
      <div className="col-3 gif-grid-item" data-giphy-id={props.giphy_id}>
      	<img className="gif-grid-item__image" src={props.preview_url} />
      </div>
    );
}
