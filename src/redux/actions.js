const ADD_CHARACTER = "ADD_CHARACTER";
const DELETE_CHARACTER = "DELETE_CHARACTER";
const GET_CHARACTER_NAME = "GET_CHARACTER_NAME"


export const addCharacter = (character) => {
    return {type: ADD_CHARACTER, payload: character}
}

export const deleteCharacter = (id) => {
    return {type:DELETE_CHARACTER, payload: id}
}

