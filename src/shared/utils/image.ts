import { imageData } from "./apiData/images/imageData";

export class Image {
  location?: string;
  description?: string;
  longDescription?: string;
}

export const images: Image[] = imageData;