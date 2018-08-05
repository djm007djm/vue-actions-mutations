
import axios from 'axios'
import qs from 'querystring'

const Post = ({url, data}) => {
    let request = axios({
        method:"post",
        url:'/juooo' + url,
        headers:{
            'Content-type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify(data || {})
    })
    
    return request
}

export default Post