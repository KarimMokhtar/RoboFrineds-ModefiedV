import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from '../constants';
import { RequestActions } from '../actions/requestActions';
type RequestState = {
  robots: Array<any>;
  isPending: boolean;
  error?: any;
};
const initialState: RequestState = {
  robots: [],
  isPending: false,
  error: '',
};

export const requestRobots = (
  state: RequestState = initialState,
  action: RequestActions
) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };

    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };

    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false };

    default:
      return state;
  }
};
export default requestRobots;
