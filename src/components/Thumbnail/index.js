import React from "react";
import { Link } from "react-router-dom";

// styles
import { Image } from "./styles";

const Thumbnail = ({
  image,
  linkTo,
  clickable,
  small,
  onHoverScale,
  onHoverOpacity,
}) => {
  return (
    <div className="">
      {clickable ? (
        <Link to={linkTo}>
          <Image src={image} alt="thumbnail" small={small} />
        </Link>
      ) : (
        <Image
          src={image}
          alt="thumbnail"
          small={small}
          onHoverScale={onHoverScale}
          onHoverOpacity={onHoverOpacity}
        />
      )}
    </div>
  );
};

export default Thumbnail;
