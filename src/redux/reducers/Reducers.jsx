const INITIAL_STSTE = {
    Carts : []
}

export const cartreducer = (state = INITIAL_STSTE, action) => {
    switch (action.type) {
        case "ADD_CART": 
            return {
                ...state,
                Carts : [...state.Carts , action.payload]
            }
        default: return state
    }
}