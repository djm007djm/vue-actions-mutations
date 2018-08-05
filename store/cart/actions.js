import Post from '../../modules/post'
import axios from 'axios'
import { CHANGE_CART } from './const'
const actions = {
    addGoodInCart ( context, { goodinfo,  success, fail } ) {//添加商品到购物车
        //在真正的项目中，这里应该去做异步请求到后端，后端去更改数据后
        //在这里我们使用setTimeout来模拟异步的ajax请求             
        backbone.addGoodInCart(goodinfo, ( cart ) => {
            //成功之后，更改store中的状态，调用mutations的方法
            context.commit(CHANGE_CART, cart)
            success()
        }) 
    },
    reduceGoodFromCart ( context, { id, success } ) {
        backbone.reduceGoodFromCart ( id, ( cart ) => {
            context.commit(CHANGE_CART, cart)
            success()
        })
    },
    getInitialCart (context) {// 获取用户初始的购物车数据
        backbone.getInitialCart((cart) => {
            context.commit(CHANGE_CART, cart)
        })
    }
}

//这里是模拟的后端
const backbone = {
    getCart () {//从数据库里取出当前的购物车信息
        return JSON.parse(localStorage.cart || '[]')
    },
    addGoodInCart (goodinfo, success) {//添加商品到购物车
        //操作数据库，用localStorage模拟
        setTimeout(() => {
            let cart = this.getCart()
            let isHas = cart.some(good => {
                if (good.id === goodinfo.id) {
                    good.num += goodinfo.num
                    return true;
                }
                return false;
            });
            if ( !isHas ) {
                cart.push(goodinfo)
            }
            localStorage.cart = JSON.stringify(cart)
            success(cart)
        }, 500)      
    },
    getInitialCart (success) {
        setTimeout(() => {
            let cart = this.getCart()
            success(cart)
        },500)
    },
    reduceGoodFromCart ( id, success ) {
        setTimeout(() => {
            let cart = this.getCart()
            for (let i = 0; i < cart.length; i++) {
                const good = cart[i];
                if ( good.id === id ) {
                    good.num--;
                    if ( good.num <= 0 ) {
                        cart.splice(i, 1)
                        break;
                    }
                }
            }
            localStorage.cart = JSON.stringify(cart)
            success(cart)
        },500)
    }

}


export default actions


