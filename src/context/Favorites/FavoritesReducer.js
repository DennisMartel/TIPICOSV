import {
    ADD_TO_FAVORITES,
    REMOVE_ITEM_FAVORITES,
    REMOVE_ALL_FAVORITES
} from './FavoritesActions'

const FavoritesReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_TO_FAVORITES:
            if (!state.favoritesItems.find(item => item.id == payload.id)) {
                state.favoritesItems.push({
                    ...payload,
                    cantidad: 1,
                })
            }
            return {
                ...state,
                favoritesItems: [...state.favoritesItems]
            }

        case REMOVE_ITEM_FAVORITES:
            return {
                ...state
            }

        case REMOVE_ALL_FAVORITES:
            return {
                ...state
            }

        default:
            return state
    }
}

export default FavoritesReducer