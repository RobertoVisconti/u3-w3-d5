import { SET_CURRENT_TRACK } from "../actions";
import type { Track } from "../../interfaces/interfaces";

interface PlayerState {
  currentTrack: Track | null;
}

const initialState: PlayerState = {
  currentTrack: null,
};

const playerReducer = (state = initialState, action: { type: string; payload: Track }): PlayerState => {
  switch (action.type) {
    case SET_CURRENT_TRACK:
      return {
        ...state,
        currentTrack: action.payload,
      };
    default:
      return state;
  }
};

export default playerReducer;