

const getters = {
    cart_total_price (state)  {
        let total_price = { num: 0, price: 0 }
        state.cart.forEach(good => {
            total_price.num += good.num;
            total_price.price += good.price * good.num
        })
        return total_price
    }
}

export default getters