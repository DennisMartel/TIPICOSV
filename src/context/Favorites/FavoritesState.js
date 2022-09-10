import { useReducer } from 'react'
import FavoritesContext from './FavoritesContext'
import FavoritesReducer from './FavoritesReducer'
import AlertComponent from '../../components/Alert'
import {
    ADD_TO_FAVORITES,
    REMOVE_ITEM_FAVORITES,
    REMOVE_ALL_FAVORITES
} from'./FavoritesActions'


const FavoritesState = ({ children }) => {
    const INITIAL_STATE = {
        favoritesItems: []
    }

    const [state, dispatch] = useReducer(FavoritesReducer, INITIAL_STATE)
    
    const addToFavorites = (payload) => {
        dispatch({ type: ADD_TO_FAVORITES, payload })
        AlertComponent("Platillo típico agregado a favoritos", false)
    }

    const removeItemFavorites = (data) => {
        dispatch({ type: REMOVE_ITEM_FAVORITES, payload: data })
    }

    const removeAllFavorites = () => {
        dispatch({ type: REMOVE_ALL_FAVORITES })
    }

    return (
        <FavoritesContext.Provider value={{ 
            favoritesItems: state.favoritesItems,
            addToFavorites,
            removeItemFavorites,
            removeAllFavorites,
            ...state
        }}>
            { children }
        </FavoritesContext.Provider>
    )
}

export default FavoritesState