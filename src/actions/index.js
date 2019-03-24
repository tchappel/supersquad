export const HERO_ADD = 'HEROES_ADD'
export const HERO_REMOVE = 'HEROES_REMOVE'

export const addHero = (id) => {
    return (
        {
            type: HERO_ADD,
            payload: id
        }
    )
}

export const removeHero = (id) => {
    return ({
        type: HERO_REMOVE,
        payload: id
    })
}