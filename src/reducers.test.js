import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

import * as reducers from './reducers';

describe('search robots', () => {
  const initialState = {
    searchField: '',
  };
  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialState);
  });

  it('test the action change search', () => {
    expect(
      reducers.searchRobots(initialState, {
        payload: 'abc',
        type: CHANGE_SEARCH_FIELD,
      })
    ).toEqual({
      searchField: 'abc',
    });
  });
});

describe('request robots', () => {
  const initialState = {
    robots: [],
    isPending: false,
    error: '',
  };

  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialState);
  });

  it('should handle pending action', () => {
    expect(
      reducers.requestRobots(initialState, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({
      robots: [],
      isPending: true,
      error: '',
    });
  });

  it('should handle success action', () => {
    expect(
      reducers.requestRobots(initialState, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: '123',
            name: 'test',
            email: 'test@gmail.com',
          },
        ],
      })
    ).toEqual({
      robots: [
        {
          id: '123',
          name: 'test',
          email: 'test@gmail.com',
        },
      ],
      isPending: false,
      error: '',
    });
  });

  it('should handle fail action', () => {
    expect(
      reducers.requestRobots(initialState, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'NOOOOO!!! error found',
      })
    ).toEqual({
      robots: [],
      isPending: false,
      error: 'NOOOOO!!! error found',
    });
  });
});
