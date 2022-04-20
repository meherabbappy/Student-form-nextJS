import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  interface myType {
    name: string;
    id: number;
    mobile: number;
    address: string;
    batch: string;
    student: boolean;
    email?: string;
  }

  const[bappy,setBappy] = useState<myType>({
   
    name: "",
    id: 0,
    mobile: 0,
    address: "",
    batch: "",
    student: false,

  })
  
  return (
   <div className={styles.container}>
     <main className={styles.formBody}>

      <h1>Students Information By NextS</h1>
     
     <input onChange={(e) =>setBappy({...bappy, name: (e.target.value) })} type="text" placeholder='Name'/>
     <input onChange={(e) =>setBappy({...bappy, id: parseInt(e.target.value) })} type="text" placeholder='ID'/>
     <input onChange={(e) =>setBappy({...bappy, mobile: parseInt(e.target.value) })} type="text" placeholder='Mobile'/>
     <input onChange={(e) =>setBappy({...bappy, address: (e.target.value) })} type="text" placeholder='Adress'/>
     <input onChange={(e) =>setBappy({...bappy, batch: (e.target.value) })} type="text" placeholder='Batch'/>
     <input onChange={(e) =>setBappy({...bappy, student: Boolean(e.target.value) })} type="text" placeholder='Student'/>

     <button onClick={(e) => {
      console.log(bappy)
    }}>Submit Form</button>
      </main>
   </div>
  )
}
export default Home
