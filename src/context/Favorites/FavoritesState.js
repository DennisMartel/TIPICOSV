import { useEffect, useReducer } from 'react'
import FavoritesContext from './FavoritesContext'
import FavoritesReducer from './FavoritesReducer'
import AlertComponent from '../../components/Alert'
import { getData, storeData } from '../../utils/LocalStorage'
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
    
    const addToFavorites = async (data) => {
        try {
            const favorites = await getData('favorites');
            if (!favorites.find((item) => item.id == data.id)) {
                await storeData('favorites', favorites.concat({...data, cantidad: 1}))
                verifyFavoriteItems().then(data => {
                    dispatch({ type: ADD_TO_FAVORITES, payload: {favoritesItems: data} })
                })
                AlertComponent('Platillo típico agregado a favoritos', false)
            } else {
                AlertComponent('Platillo típico ya se encuentra agregado', false)
            }
        } catch (err) {
            console.log(err);
        }
    }

    const removeItemFavorites = async (id) => {
        try {
            const favorites = await getData('favorites');
            let myFavorites = favorites.filter((item) => {
                return item.id !== id
            })
            await storeData('favorites', myFavorites)
            verifyFavoriteItems().then(data => {
                dispatch({ type: REMOVE_ITEM_FAVORITES, payload: {favoritesItems: data} })
            })
            AlertComponent('Platillo típico eliminado de favoritos', false)
        } catch (err) {
            console.log(err);
        }
    }

    const removeAllFavorites = async () => {
        try {
            await storeData('favorites', [])
            dispatch({ type: REMOVE_ALL_FAVORITES, payload: {favoritesItems: []} })
            AlertComponent('La lista ha sido limpiada', false)
        } catch (err) {
            console.log(err);
        }
    }

    const verifyFavoriteItems = async () => {
        try {
            const response = await getData('favorites');
            if (response == null) {
                await storeData('favorites', [])
                dispatch({ type: ADD_TO_FAVORITES, payload: {favoritesItems: []} })
            } else {
                dispatch({ type: ADD_TO_FAVORITES, payload: {favoritesItems: response} })
            }

            return response
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        verifyFavoriteItems()
    }, [])

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