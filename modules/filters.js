

import Vue from 'vue'

Vue.filter('goodPrice', (price, dw = '斤') => ( '￥' + price + '/' +dw))

