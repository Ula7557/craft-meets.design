import { useEffect, useState } from "react"
import { request } from "../api/request"

const PostData = (url)=>{
    const [data, setData] = useState([])
    const [loadingData, setloadingData] = useState(true)
    const [errorProduct, setErrorproduct] = useState(null)

    // const data = [
    //     {
    //            firstName: "",
    //            lastName: "",
    //            phoneNumber: "",
    //            countryId: "",
    //            zipCode: "",
    //            comment: "",
    //            email: "",
    //            city: "",
    //            address: ""
    //     },
    //     {
    //         product:[
    //             {
    //                 productName: "",
    //                 productId: "",
    //                 productPrice: "",
    //                 productCount: ""
    //             }
    //         ]
    //     }
    // ]

    useEffect(()=>{
        request.post(url, data)
    },[url])

    return (
        <></>   
    )
}
export default PostData