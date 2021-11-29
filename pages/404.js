import { useEffect } from "react";
import {useRouter} from "next/router"

const Found = () => {
    const route =useRouter()
    useEffect(()=>{
     setTimeout(()=>{
        route.push("/")
     },3000)
    },[])
    return ( 
        <>

        PAGE NOT FOUND 
        </>
     );
}
 
export default Found;