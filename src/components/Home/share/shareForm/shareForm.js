import React from 'react'
import './shareForm.css'
import {useState,useEffect} from 'react';
export default function ShareForm() {

    
    return (
        <div>
             <form  className='shareForm' >
            <div className='shareForm-control'>
                <label>Company Name</label>
                <input type="text" placeholder='Company Name'
               
                />
            </div>
            <div className='shareForm-control'>
                <label>Role</label>
                <input type="text" placeholder='Role'
                
                />
            </div>
            <div className='shareForm-control shareForm-control-check'>
                <label>Full Time</label>

                <input type="checkbox"
               
                />
            </div>
            <input type="submit" value='Add Post' className='btn btn-block' />

        </form>
        </div>
    )
}
