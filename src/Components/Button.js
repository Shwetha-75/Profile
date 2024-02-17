import React from 'react'


export default function Button()
{
    const linkedin=()=>
    {
        //previous i have used 
        //window.location.href="url"-->doesnot worked
        //on click for linked in className=btn1
        window.open('Provide Yours')
    } 
    
    const gmail=()=>
    {
        window.open('Provide Yours')
    }
    return(
        <div className='btn-tag'>
            <form >
                <button onClick={linkedin} className='btn1-linked'>LINKED IN</button>
            </form>
            <form>
                <button  onClick={gmail} className='btn2-gmail'>GMAIL</button>
            </form>
        </div>
    )
}
