import { ADD_TO_CART, REMOVE_TO_CART } from "../actions/cartActions";
import { cartItems } from "../initalValues/cartItems";

const initialState = {
    cartItems: cartItems
}
export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c => c.product.id === payload.id)
            if (product) {
                product.quantity++;
                return {
                    ...state
                }
            } else {
                return {
                    ...state, cartItems: [...state.cartItems, payload]
                }
            }
          
            break;
        case REMOVE_TO_CART:
            return {
                ...state,
                cartItems: state.cartItems.fill(c => c.product.id === payload.id)

            }
            break;
        default:
            return state;
            break;
    }

}