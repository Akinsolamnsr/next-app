import Nav from "../proj/Nav"
import Link from "next/dist/client/link";

const layout = ({children}) => {
    return (
    <>
    Welcome Home 
    <Nav />
    {children}
    <footer>
    <Link href="/foot">
        This is copywrited by me
    </Link>
    </footer>
    </>
     );
}
 
export default layout;