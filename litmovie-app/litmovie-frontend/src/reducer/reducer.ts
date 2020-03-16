import { IAppState } from '../state/IAppState'
import { UPDATE_MOVIES } from '../actions/action'


const initialState: IAppState = { data: [] }


function loadMovies(state, action): IAppState {

    return Object.assign({}
        , state, { data: [...state.data, { data: action.payload }] }

    )

}
export function reducer(state: IAppState = initialState, action) {

    switch (action.type) {
        case UPDATE_MOVIES: return loadMovies(state, action)
        default: return state;
    }


}