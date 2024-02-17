import React from 'react'

import Git from './Git.png'
export default function Footer()
{
    const hackerClick=()=>
    {
        window.open('Provide Yours')
    }
    const leetClick=()=>
    {
        window.open('Provide Yours')
    }
    const gitClick=()=>
    {
        window.open('Provide Yours')
    }
    return(
        <footer className='footer-tag'>
          <button onClick={gitClick} id='git-btn'></button>
          <button onClick={leetClick} id='leet-btn'></button>
          <button onClick={hackerClick} id='hacker-btn'></button>
        </footer>
    )
} 
