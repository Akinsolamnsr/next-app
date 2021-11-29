import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export const getStaticProps =async()=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
  return {
    props:{dummy:data}
  }
}

export default function Home({dummy}) {
  return (
    <>
    
      <Head>
        <title>Welcome |Home</title>
        <meta name='keywords' content="story" />
      </Head>
      {dummy.map(x=>(<div key={x.id}><Link href={"/Ninjas/" +x.id}><a><h3>{x.name}</h3></a></Link></div>))}
    <div className={styles.nav}>
    <h1>This is the Home page</h1>
    <p>A short story is a piece of prose fiction that </p>
     <p> typically can be read in one sitting and focuses on a self-contained</p>
    <p>incident or series of linked incidents, with the intent of evoking a single effect or mood.</p>
  <p> The short story is one of the oldest types of literature and has existed in the form of legends,</p>
  <p> mythic tales, folk tales, fairy tales, fables and anecdotes in various</p>  
     <p>ancient communities across the world. The modern short story developed in the early 19th century.</p>
    </div>
    </>
  
  )
}
