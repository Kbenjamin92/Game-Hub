import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '9fabc02ee6ec470db030c22bb96b1333'
    }
});