import { IMAGES } from "../../constants/image-list";
import { ImageName } from "../../models/image.model";

interface ImageProps {
  name: ImageName;
  className?: string;
}

const Image = ({ name, className }: ImageProps) => {
  return <img src={IMAGES[name]} alt={name} className={className} />;
};

export default Image;
