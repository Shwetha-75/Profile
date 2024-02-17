import React from 'react'

import Git from './Git.png'
export default function Footer()
{
    const hackerClick=()=>
    {
        window.open('https://www.hackerrank.com/profile/shweetha_sweety1')
    }
    const leetClick=()=>
    {
        window.open('https://leetcode.com/SHWETHA_K/')
    }
    const gitClick=()=>
    {
        window.open('https://github.com/Shwetha-75')
    }
    return(
        <footer className='footer-tag'>
          <button onClick={gitClick} id='git-btn'></button>
          <button onClick={leetClick} id='leet-btn'></button>
          <button onClick={hackerClick} id='hacker-btn'></button>
        </footer>
    )
} 