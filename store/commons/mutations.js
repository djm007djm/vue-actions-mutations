
import {
    CHANGE_USER_INFO
} from './const'

const mutations = {
    [CHANGE_USER_INFO] (state, userInfo) {
        state.userInfo = userInfo
    }
}

export default mutations