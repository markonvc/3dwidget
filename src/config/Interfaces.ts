interface thumbnailsDimentions {
    height: number,
    url: string,
    width: number
}

interface imageThumbnails {
  full: thumbnailsDimentions;
  large: thumbnailsDimentions;
  small: thumbnailsDimentions;
}

interface Images {
    filename: string,
    height: number,
    id: string,
    size: number,
    thumbnails: imageThumbnails,
    type: string,
    url: string,
    width: number

}

interface ClientData {
  Clients: string[];
  ClientsName: string[];
  Collections: string;
  Created: string,
  GLB: string,
  Images: 
}