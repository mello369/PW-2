import React from 'react'
import './shareForm.css'
import Axios from 'axios';
import {useState,useEffect} from 'react';
export default function ShareForm() {
//
    const url="http://localhost:3001/uploadPost";
    const [data,setData]=useState({
      user_id:8,
      company:"",
      image_content:"",
      text_content:""
    })
    function handle(e){
        const newData={...data};
        newData[e.target.id]=[e.target.value];
        setData(newData);
        console.log(newData.question);
    }
    function submit(e)
    {
        e.preventDefault();
        console.log('EEEEEEEEEEEEEEEEEEEEEEEEE')
        const d=new Date()//to get value of date
        
        const dt=d.getFullYear()+'-'+Number(Number(d.getMonth())+1)+'-'+d.getDate()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
      if(data.text_content[0]!=undefined)
      if(data.text_content[0].length>30)
      {
        try{
            Axios.post(url,{
            user_id:data.user_id,
            text_content:data.text_content,
            image_content:data.image_content,
            company:data.company,
            //date_time:d.getFullYear()+'-'+d.getMonth()+1+'-'+d.getDate()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
            date_time:dt
        }).then(res=>{
                console.log(res.data);
            alert("Posted Sucessfully!")
            })
            }
          catch(e)
            {
                console.log(e)
            }
      }
      else{
        alert("Insufficient description")
      }
      else{
        alert("Enter description")
      }

    }
    
    return (
        <div className='form-container'>
             <form  className='shareForm' >
             <div className='shareForm-control'>
                
                <textarea onChange={(e)=>handle(e)} placeholder='Write about your experience' id="text_content" value={data.text_content} required />
            </div>
            <div className='shareForm-control'>
                {/* <label>Role</label> */}
                <input onChange={(e)=>handle(e)} type="url" placeholder='Thumbnail/Image url' id='image_content' value={data.image_content}
                
                />
            </div>
            <div className='shareForm-control'>
                {/*<label>Company Name</label>*/}
                <input onChange={(e)=>handle(e)} type="text" placeholder='Company Name' id='company' value={data.company} required />
            </div>

            {/*
            <div className='shareForm-control shareForm-control-check'>
                <label>Full Time</label>

                <input type="checkbox"
               
                />
            </div>
            */}
            <input type="submit" onClick={(e)=>submit(e)} value='Add Post' className='btn btn-block' id='form-submit'/>

        </form>
        </div>
    )
}
