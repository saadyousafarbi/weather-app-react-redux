import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            // Structure(action.payload.data): {cod: "200", message: 0.0036, cnt: 40, list: Array(40), city: {…}}
            return [ action.payload.data, ...state ];
    }
    return state;
}
