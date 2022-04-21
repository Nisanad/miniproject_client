import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'


export default function Home({ token }) {
 
  return (
    <Layout>
    <Head>
        <title>First Page</title>
    </Head>
  
    <div  >
    <div  >
        <Navbar />
      <button >
        <a href='./login'>
           <img
          src="pizza.jpg"
          className="full-screen"
          alt="Sample image" 
     
        />   </a>
      </button>
      
     
        
    </div>
    </div>
</Layout>
  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
