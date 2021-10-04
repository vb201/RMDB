import React from "react";
import { Link } from "react-router-dom";

// styles
import { Image } from "./styles";

// type Props = {
// 	image: string,
// 	movieId: number,
// 	clickable: boolean,
// };

const Thumbnail = ({
  image,
  linkTo,
  clickable,
  small,
  onHoverScale,
  onHoverOpacity,
}) => {
  console.table(image);
  return (
    <div>
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
