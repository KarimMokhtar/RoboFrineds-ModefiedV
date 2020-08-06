import {
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
  } from "../constants";
  
  export interface IRequestRobotsSuccess{
    readonly type: 'REQUEST_ROBOTS_SUCCESS'
    payload: Array<object>
  }
  export interface IRequestRobotsPending{
    readonly type: 'REQUEST_ROBOTS_PENDING'
    payload?: any
  }
  export interface IRequestRobotsFailed{
    readonly type: 'REQUEST_ROBOTS_FAILED'
    payload: any
  }
  export type RequestActions =| IRequestRobotsFailed | IRequestRobotsPending | IRequestRobotsSuccess;
  
  export const requestRobots = () => (dispatch:any) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
      .catch((err) => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err }));
  };
  