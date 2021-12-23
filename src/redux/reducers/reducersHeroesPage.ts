import { Hero } from '../../types/hero'
import { actionsHeroes } from '../actions/actionsHeroesPage'

interface IDefaultState {
  heroes: Array<Hero>,
  isLoading: boolean,
  error: string
}

interface IAction {
  type: string
  payload: Array<Hero>
}

const defaultStateHeroesPage: IDefaultState = {
  heroes: [],
  isLoading: false,
  error: ''
}

const reducerHeroesPage = (state = defaultStateHeroesPage, action: IAction) => {
  const { type, payload } = action
  switch(type) {
    case actionsHeroes.REQUEST_HEROES: 
      return {
        ...state, 
        isLoading: true
      }
      case actionsHeroes.REQUEST_HEROES_SUCCESS:
        return {
          ...state, 
          heroes: payload,
          isLoading: false,
          error: ''
        }
      case actionsHeroes.REQUEST_HEROES_FAIL:
        return {
          ...state,
          heroes: [],
          isLoading: false,
          error: 'Error loading data'
        }
        default:
          return state
  }
}

export default reducerHeroesPage