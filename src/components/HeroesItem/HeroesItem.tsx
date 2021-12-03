import React from "react";
import { Link } from 'react-router-dom'
import { Hero } from "../../types/hero";
import './heroesItem.scss'
import { MarvelApi } from "../MarvelApi";

interface IProps {
  hero: Hero
}
export const HeroesItem = (props: IProps) => {
  const { hero } = props


  return (
    <div className="heroes">

          <div className="heroes__avatar">
            <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="avatar" />
          </div>

          <div className="heroes__info">
            <span>{hero.name}</span>
          </div>

          <div className="heroes__btn">
            <Link to={`/comics/${hero.id}`}>See more bin</Link>
          </div>

          </div>
  )
}