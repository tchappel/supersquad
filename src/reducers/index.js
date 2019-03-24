import {HERO_ADD, HERO_REMOVE} from "../actions"
import heroes from '../data/characters'
import {combineReducers} from "redux"

const getHeroById = (id) => {
    return heroes.find(it => it.id === id)
}

const heroesReducer = (state = heroes, action) => {
    if (action.type === HERO_REMOVE) {
        return [
            ...state,
            getHeroById(action.payload)
        ]
    }
    if (action.type === HERO_ADD) {
        return state.filter(it => it.id !== action.payload)
    }
    return state
}

const selectedHeroesReducer = (state = [], action) => {
    if (action.type === HERO_ADD) {
        return [
            ...state,
            getHeroById(action.payload)
        ]
    }
    if (action.type === HERO_REMOVE) {
        return state.filter(it => it.id !== action.payload)
    }
    return state
}

export default combineReducers({
    heroes: heroesReducer,
    selectedHeroes: selectedHeroesReducer,
})