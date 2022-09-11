import {
    ADD_TO_FAVORITES,
    REMOVE_ITEM_FAVORITES,
    REMOVE_ALL_FAVORITES
} from './FavoritesActions'

const FavoritesReducer = (state, action) => {
    const { type, payload } = action
    
    switch (type) {
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favoritesItems: payload.favoritesItems
            }

        case REMOVE_ITEM_FAVORITES:
            return {
                ...state,
                favoritesItems: payload.favoritesItems
            }

        case REMOVE_ALL_FAVORITES:
            return {
                ...state,
                favoritesItems: payload.favoritesItems
            }

        default:
            return state
    }
}

export default FavoritesReducer