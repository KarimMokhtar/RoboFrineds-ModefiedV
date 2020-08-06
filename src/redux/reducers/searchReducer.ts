import {
    CHANGE_SEARCH_FIELD,

  } from "../constants";
  import {SearchActions} from '../actions/searchActions'

  type SearchState = {
    searchField:string
  }
  const initialStateSearch:SearchState = {
    searchField: "",
  };
  
const searchRobots= (state:SearchState = initialStateSearch, action:SearchActions) => {
    switch (action.type) {
      case CHANGE_SEARCH_FIELD:
        return { ...state, searchField: action.payload };
      default:
        return state;
    }
  };
  export default searchRobots