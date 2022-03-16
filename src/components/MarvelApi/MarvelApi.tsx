import axios from "axios";
import { Comic } from "../../types/hero";

// interface IParams {
//   ts: number,
//   apikey: string | undefined,
//   hash: string | undefined,
//   limit: number,
//   nameStartsWith: string
// }

export class MarvelApi {
  static url = "http://gateway.marvel.com/v1/public/characters";
  static privateApiKey = process.env.REACT_APP_PRIVATE_API_KEY;
  static publicApiKey = process.env.REACT_APP_PUBLIC_KEY;
  static hash = process.env.REACT_APP_HASH;
  // type Params = {
  //   ts: number,
  //   apikey: string | undefined,
  //   hash: string | undefined,
  //   limit: number,
  // }
  static params = {
    ts: 1,
    apikey: MarvelApi.publicApiKey,
    hash: MarvelApi.hash,
    limit: 5,
  };


  static async getCharacters(nameCharacter?: string) {
    const params: any = {
      ...MarvelApi.params,
    };
    if (nameCharacter) {
      params.nameStartsWith = nameCharacter;
    }

    const data = await axios
      .get(MarvelApi.url, { params })
      .then((response) => response.data.data.results);
    return data;
  }

  static async getComicsByCharacterId(characterId: number): Promise<Array<Comic>> {
    const params: any = {
      ...MarvelApi.params,
      limit: 20,
    };
    const data = await axios
      .get(`${MarvelApi.url}/${characterId}/comics`, { params })
      .then((response) => response.data.data.results);
    return data;
  }
}
