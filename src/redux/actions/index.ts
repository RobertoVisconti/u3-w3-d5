import type { Dispatch } from 'redux';
import type { DeezerResponse } from "../../interfaces/interfaces";

export const GET_FETCH = 'GET_FETCH';
export const GET_FETCH_ERROR = 'GET_FETCH_ERROR';

export const getFetchAction = () => {
    
    return async (dispatch: Dispatch) => {
        try {
            const res = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=mengoni');
            
            if (res.ok) {
                const data: DeezerResponse = await res.json();
                dispatch({
                    type: GET_FETCH,
                    payload: data.data,
                });
            } else {
                throw new Error('Errore nel recupero fetch');
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Errore generico';
            dispatch({
                type: GET_FETCH_ERROR,
                payload: errorMessage
            });
        }
    };
};