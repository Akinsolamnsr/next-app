import  Link from "next/link"
import Image from "next/image"
const Nav=()=>{
    return(
        <div>
    <Image  src="/jsp.jpg"  width={100} height={50}/>
     <div><Link href="/"> Home page</Link></div>
     <div><Link href="/Ninjas"> About page</Link></div>
     <div ><Link href="/Ninjas/apps"> Mission page</Link></div>

        </div>
    )
}

export default Nav;