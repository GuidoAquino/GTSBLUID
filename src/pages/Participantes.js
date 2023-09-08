
import Head from 'next/head'
import Nav from '@/components/atoms/Nav'
import Equipo from "@/components/organisms/Equipo"
import React from 'react'

const Participantes = () => {
  return (
    <>
    <Head>
        <title>Participantes</title>
        <link
          rel="shortcut icon"
          href="https://i.postimg.cc/MZjWxcmK/palmerita.png"
        />
      </Head>
      

    <div>
        <Equipo/>  
    </div>


  
  </>
)}


export default Participantes
