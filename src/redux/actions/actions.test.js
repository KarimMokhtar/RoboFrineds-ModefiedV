import {setSearchField} from './searchActions';
import {requestRobots} from './requestActions'
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";
import fetchMock from "fetch-mock";

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
} from "../constants";

const mockStore = configureMockStore([thunkMiddleware]);

describe("set search field action", () => {
  it("should create an action to search robots", () => {
    const text = "wooo";
    const expectedAction = {
      payload: text,
      type: CHANGE_SEARCH_FIELD,
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});

describe("request robots action", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("test request", () => {
    fetchMock.getOnce("https://jsonplaceholder.typicode.com/users", {
      body: { robots: [] },
      headers: { "content-type": "application/json" },
    });

    const expectedAction = [
      {
        type: REQUEST_ROBOTS_PENDING,
      },
      {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: {robots:[]},
      },
    ];
    const store = mockStore({ robots: [] });
    return store.dispatch(actions.requestRobots()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
