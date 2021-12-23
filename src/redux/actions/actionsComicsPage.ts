export enum actionsComics {
  REQUEST_COMICS_INFO = 'REQUEST_COMICS_INFO',
  REQUEST_COMICS_INFO_SUCCESS = 'REQUEST_COMICS_INFO_SUCCESS',
  REQUEST_COMICS_INFO_FAIL = 'REQUEST_COMICS_INFO_FAIL'
}

export const requestComicsInfo = (id: number | string) => {
  return {
    type: actionsComics.REQUEST_COMICS_INFO,
    payload: id
  }
}

export const requestComicsInfoSuccess = (data: any) => {
  return {
    type: actionsComics.REQUEST_COMICS_INFO_SUCCESS,
    payload: data
  }
}

export const requestComicsInfoFail = () => {
  return {
    type: actionsComics.REQUEST_COMICS_INFO_FAIL
  }
}
