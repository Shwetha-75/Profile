import React from 'react'
import Image from './Image.js'
import Footer from './Footer/Footer.js'
import Button from './Button.js'
import Name from './Name.js'
import About from './About.js'
import Skills from './Skills.js'
export default function Main()
{
    return(
        <main className='main-tag'>
           <Image />
           <Name />
           <Button/>
           <About/>
           <Skills/>
           <Footer/>
        </main>
    )
}