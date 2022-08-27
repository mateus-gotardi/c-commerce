import { useRouter } from "next/router"
import { useEffect } from "react"
const Refresh = ()=>{
    const router = useRouter()
    const { page } = router.query;
    useEffect(() =>{
        router.push(`/${page}`)
    },[])
}
export default Refresh