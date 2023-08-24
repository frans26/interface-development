import { ImageName } from "./image.model";

export interface Blog {
  id: number;
  img: ImageName;
  title: string;
  description: string;
}
