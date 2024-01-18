export const set_data = (data) => {
    return{
        type: "SET_DATA",
        payload: data
    }
}


export const set_home = (home)=>{
    return {
        type: "SET_HOME",
        payload: home
    }
}

export const set_url = (url)=>{
    return{
        type : "SET_URL",
        payload: url
    }
}

export const set_info = (info)=>{
    return {
        type: "SET_INFO",
        payload: info
    }
}

export const order_product = (product)=>{
    return {
        type: "SET_ORDER",
        payload: product
    }
}

export const user_token = (token)=>{
    return {
        type: "SET_TOKEN",
        payload: token
    }
}
