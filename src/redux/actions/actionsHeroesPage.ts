export enum actionsHeroes {
  REQUEST_HEROES = 'REQUEST_HEROES',
  REQUEST_HEROES_SUCCESS = 'REQUEST_HEROES_SUCCESS',
  REQUEST_HEROES_FAIL = 'REQUEST_HEROES_FAIL'
}


export const requestHeroesInfo = (search: string) => {
  return {
    type: actionsHeroes.REQUEST_HEROES,
    payload: search
  }
}

export const requestHeroesSuccess = (data: any) => {
  return {
    type: actionsHeroes.REQUEST_HEROES_SUCCESS,
    payload: data
  }
}

export const requestHeroesFail = () => {
  return {
    type: actionsHeroes.REQUEST_HEROES_FAIL
  }
}
