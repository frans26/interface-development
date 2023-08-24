import Image from "../image/Image";
import { Blog } from "../../models/blog.model";

interface CardProps extends Blog {}

const Card = (props: CardProps) => {
  const { img, title, description } = props;

  return (
    <div>
      <Image
        name={img}
        className="border-b-4 border-solid border-b-strong-red"
      />

      <h4 className="text-lg open-sans-semibold mt-6">{title}</h4>

      <p className="open-sans-light text-dark-grey leading-7 mt-4">
        {description}
      </p>

      <div
        className="border-b border-solid border-b-strong-red inline-block pb-1 open-sans-semibold cursor-pointer select-none mt-6"
        onClick={() => console.log(title)}
      >
        READ MORE
      </div>
    </div>
  );
};

export default Card;
