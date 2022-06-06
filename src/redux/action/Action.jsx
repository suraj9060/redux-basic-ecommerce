export const ADD = (item) => {
    return{
        type: "ADD_CART",
        payload:item
    }
}

export const REMOVE = (id) => {
    return {
        type: "REMOVE_FROM_CART",
        payload:id
    }
}

export const REMOVEONE = (item) => {
    return {
        type: "RMV_ITEM_ONE",
        payload : item
    }
}