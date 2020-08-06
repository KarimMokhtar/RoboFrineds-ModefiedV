import {
    CHANGE_SEARCH_FIELD,
 
  } from "../constants";
  export interface ISetSearchFieldAction {
      readonly type: 'CHANGE_SEARCH_FIELD';
      payload: string
  }
  export type SearchActions =| ISetSearchFieldAction;

  export const setSearchField = (text:string) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  });