import { Url, Image, ResourceList } from './commonModels';

interface CharacterModel {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Url[];
  thumbnail: Image;
  comics: ResourceList;
  stories: ResourceList;
  events: ResourceList;
  series: ResourceList;
}

export default CharacterModel;
