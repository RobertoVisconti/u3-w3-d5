import { GET_FETCH, GET_FETCH_ERROR } from "../actions";
import type { Track } from "../../interfaces/interfaces";

interface FetchState {
  fetch: Track[]; // <--- NIENTE ANY: usiamo Track[]
  isError: string;
}

const initialState: FetchState = {
  fetch: [],
  isError: '',
};

// Action è tipizzato in modo che il payload sia quello che ci aspettiamo
const fetchReducer = (state = initialState, action: { type: string; payload: Track[] | string  }): FetchState => {
  switch (action.type) {
    case GET_FETCH:
      return {
        ...state,
        fetch: action.payload as Track[], // Cast sicuro al tipo Track
        isError: '',
      };
    case GET_FETCH_ERROR:
      return {
        ...state,
        isError: action.payload as string,
      };
    default:
      return state;
  }
};

export default fetchReducer;