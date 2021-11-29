export const getStaticPaths=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await res.json();
    const paths=data.map(x=>{
        return{
            params:{ids:x.id.toString()}
        }
    })

    return {
        paths,
        fallback:false
    }
}

export const getStaticProps=async(context)=>{
    const id= context.params.ids
    const res=await fetch("https://jsonplaceholder.typicode.com/users/" +id)
    const data=await res.json()

    return{
        props:{ninja:data}
    }
}

const Pag = ({ninja}) => {
    return ( 
        <div>
        <div>{ninja.name}</div>
         <div>{ninja.username}</div>
         <div>{ninja.email}</div>
         <div>{ninja.phone}</div>
         
        </div>
     );
}
 
export default Pag;