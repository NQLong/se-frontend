const initialState = {
    product:[],
    currentPage: 1
}

export const getAllProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_PRODUCT':
            return {...state, product: action.payload}

        case 'GET_ALL_PRODUCT_FAIL':
            return {...state, error: action.payload}
        default:
            return state
           
    }
}

export const getProductByIdReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PRODUCT_BY_ID':{
            return {...state, product: action.payload}
        }

        default: return state
    }
}


