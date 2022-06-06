const INITIAL_STSTE = {
    Carts : []
}

export const cartreducer = (state = INITIAL_STSTE, action) => {
    switch (action.type) {
        case "ADD_CART":
            const itemIndex = state.Carts.findIndex((item) => item.id === action.payload.id);

            if (itemIndex >= 0) {
                state.Carts[itemIndex].qnty += 1
            } else {
                const temp = { ...action.payload, qnty: 1 }
                
                return {
                    ...state,
                    Carts: [...state.Carts, temp],
                }
            };
            
          
        case "REMOVE_FROM_CART":
            const data = state.Carts.filter((el) => el.id !== action.payload);
            return {
                ...state,
                Carts: data
            }
        
        
        
        case "RMV_ITEM_ONE":
            const itemIndex_dlt = state.Carts.findIndex((item) => item.id === action.payload.id);
            if (state.Carts[itemIndex_dlt].qnty >= 1) {
                const dltItem = state.Carts[itemIndex_dlt].qnty -= 1
            

                return {
                    ...state,
                    Carts: [...state.Carts]
                }
            } else if (state.Carts[itemIndex_dlt].qnty === 1) {

                const data = state.Carts.filter(
                  (el) => el.id !== action.payload.id
                );
                return {
                  ...state,
                  Carts: data,
                };
            }
        default: return state
    }
}