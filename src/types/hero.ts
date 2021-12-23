export interface IThumbnail {
  path: string
  extension: string
}
export type Hero = {
  id: number
  description: string
  name: string
  thumbnail: IThumbnail
}

export type Comic = Hero
