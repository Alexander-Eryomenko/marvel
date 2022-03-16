import reducerComicsPage from './reducersComicsPage'
import reducerHeroesPage from './reducersHeroesPage'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  comics: reducerComicsPage,
  heroes: reducerHeroesPage
})

export default rootReducer