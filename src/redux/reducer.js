import { CHARACTER, DELETE_CHARACTER,DETAILCHARACTER, REMOVE_LIST } from "./actions"


const initialState = {
    characters: [],
    character: {},


}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHARACTER:
            return {...state, characters: [...state.characters, action.payload]}
        case DELETE_CHARACTER:
            return {...state, characters: [...state.characters.filter(item => item.id !== action.payload)]}
        case DETAILCHARACTER:
            return {...state, character: action.payload}
        case REMOVE_LIST:
            return {...state, character: action.payload}
        default: return {...state}
    }
} 


export default rootReducer