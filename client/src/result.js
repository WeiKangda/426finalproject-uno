import axios from 'axios';
export default axios.create (
    {
        baseURL: 'https://uno-298f3-default-rtdb.firebaseio.com/'
    }
)