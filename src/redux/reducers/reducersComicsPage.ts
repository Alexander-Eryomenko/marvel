import { actionsComics } from '../actions/actionsComicsPage'
import { Comic, IThumbnail } from "../../types/hero";

interface IAction {
  type: string
  payload: Array<Comic>
}

interface IDefaultStateComicsPage {
  comics: Array<Comic>,
  isLoading: boolean,
  error: string
}

const defaultStateComicsPage: IDefaultStateComicsPage = {
  comics: [],
  isLoading: false,
  error: ''
}

const reducerComicsPage = (state = defaultStateComicsPage, action: IAction) => {
  const { type, payload } = action
  switch(type) {
    case actionsComics.REQUEST_COMICS_INFO: 
      return {
        ...state, 
        isLoading: true
      }
      case actionsComics.REQUEST_COMICS_INFO_SUCCESS:
        return {
          ...state, 
          comics: payload,
          isLoading: false,
          error: ''
        }
      case actionsComics.REQUEST_COMICS_INFO_FAIL:
        return {
          ...state,
          comics: [],
          isLoading: false,
          error: 'Error loading data'
        }
        default:
          return state
  }
}

export default reducerComicsPage