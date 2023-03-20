import axios from "axios";

export const CHARACTER = "CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const REMOVE_LIST = "REMOVE_LIST";
export const DETAILCHARACTER = "DETAILCHARACTER"


export const charactersApi= (id) => {
    return async function(dispatch) {
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const KEY_API = "641e04bf5881.ee1ceae244f16f9100d2" 
        const response = await axios(`${URL_BASE}/character/${id}?key=${KEY_API}`)
        return dispatch({type:CHARACTER, payload: response.data})
    }
}

export const removeCharacter = (id) => {
    return {type: DELETE_CHARACTER, payload: id}
}

export const detailCharacter = (id) => {
    return async function(dispatch) {
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const KEY_API = "641e04bf5881.ee1ceae244f16f9100d2" 
        const response = await axios(`${URL_BASE}/character/${id}?key=${KEY_API}`)
        return dispatch({type:DETAILCHARACTER, payload: response.data})
    }
}

export const removeDetail = (remove) => {
    return {type: REMOVE_LIST, payload: remove}
}

