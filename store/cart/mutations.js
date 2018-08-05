
import {
    CHANGE_CART
} from './const'

const mutations = {
   [CHANGE_CART] (state, cart) {
        state.cart = cart
   }
}

export default mutations