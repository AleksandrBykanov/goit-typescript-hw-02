import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css"
import { Image } from "../Types/types";

type Props = {
  images: Image[] | null;
  onImageClick: (image: any)=> void;
}

const ImageGallery = ({images, onImageClick}: Props) => {
  return (
    <ul className={css.ul}>
      {Array.isArray(images) && images.map((image)=>(
      <li className={css.li} key={image.id}>
        <ImageCard image={image} onImageClick={onImageClick} />
      </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
