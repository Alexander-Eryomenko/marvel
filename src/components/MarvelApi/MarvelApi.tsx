import axios from 'axios'
import { Comic } from '../../types/hero'






export class MarvelApi {
  static url = 'http://gateway.marvel.com/v1/public/'
  static privateApiKey = process.env.REACT_APP_PRIVATE_API_KEY
  static publicApiKey = process.env.REACT_APP_PUBLIC_KEY
  static hash = process.env.REACT_APP_HASH

  static async getCharacters () {
    const response = await axios.get(`${MarvelApi.url}characters?ts=1&apikey=${MarvelApi.publicApiKey}&hash=${MarvelApi.hash}`)
    const data = await response.data.data?.results
    return data
  }

  static async getCharactersById(characterId: number) {
    const response = await axios.get(`${MarvelApi.url}characters/${characterId}?ts=1&apikey=${MarvelApi.publicApiKey}&hash=${MarvelApi.hash}`)
    const data = await response.data.data.results
    return data
  }
  
  static async getComicsByCharacterId(characterId: number): Promise<Array<Comic>> {
      const response = await axios.get(`${MarvelApi.url}characters/${characterId}/comics?ts=1&apikey=${MarvelApi.publicApiKey}&hash=${MarvelApi.hash}`)
      const data = await response.data.data?.results
      console.log(data)
      return data
  }

}