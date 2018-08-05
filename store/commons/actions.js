import Post from '../../modules/post'
import {
    CHANGE_USER_INFO
} from './const'
const actions = {
    login (context, { username, password, success, fail }) {
        Post({
            url: '/Passport/login',
            data: {
                username,
                password,
                isRelevance: '0',
                k: '',
                isCard: '1',
                regFrom: '2'
            }
        }).then(res => {
            if (res.data.code == 1) {
                //登陆成功
                //更改state，调用mutations的方法
                context.commit(CHANGE_USER_INFO, { username })
                success()
            }else {
                fail()
            }
        })
    }
}

export default actions