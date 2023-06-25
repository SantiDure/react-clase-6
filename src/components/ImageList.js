import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ images }) {
  const rendererdImages = images.map((image) => {
    return <ImageShow image={image} />;
  });

  return <div className="image-list">{rendererdImages}</div>;
}

export default ImageList;
