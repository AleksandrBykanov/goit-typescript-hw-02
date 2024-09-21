import css from "../ImageCard/ImageCard.module.css"
import { Image } from "../Types/types";

type Props = {
  image: Image;
  onImageClick: (image: string) => void;
}

function ImageCard({image, onImageClick}: Props) {
  return (
    <div className={css.cardWrapper} onClick={() => onImageClick(image.urls.regular)}>
      <img className={css.img} src={image.urls.small} alt={image.alt_description} />
    </div>
  )
}

export default ImageCard