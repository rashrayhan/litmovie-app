export const UPDATE_MOVIES = 'UPDATE_MOVIES'
export function loadData(newdata: String) {

    return {
        type: UPDATE_MOVIES,
        payload: newdata

    }

}