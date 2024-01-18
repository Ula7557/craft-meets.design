import axios from 'axios'
export const request = axios.create(
    {
        baseURL: process.env.REACT_APP_HOME_URL,
        headers:{
            "Authorization" : `Bearer ${process.env.REACT_APP_BEAR_TOKEN}`
        }
    }
)