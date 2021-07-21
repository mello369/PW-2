import './SignUp.css';
import logo from './logo-sm.png';
import Axios from 'axios';
import React,{useState,useEffect,useContext} from 'react';
import { useHistory } from 'react-router-dom';
const branchl=['CSE','ISE','ECE','ME','BT','AE','CVL','CE','EEE','AE','ETE','IE','MDE'];
const branchList=branchl.map((branch)=>
<option value={branch}>{branch}</option>
)
let year=[];
var i;
var y=2000;
for(i=0;i<25;i++)
{
    
    year.push(y+i);
}
const yearList=year.map((year)=>
<option value={year}>{year}</option>
)



function SignUp(){

    const history = useHistory();
    const [email,setEmail] =useState('');
    const [password,setPassword]=useState('')
    const [branch,setBranch]=useState('')
    const [grad_year,setGrad]=useState('')
    const [name,setName] = useState('')
    useEffect(async ()=>{//Will be called as soon as the page renders.

        let user_id = localStorage.getItem('userId')
        if(user_id!=null)
        {
          history.push("/");
        }
        
        
      },[])

    const onSubmit = async (e) =>
    {
        e.preventDefault();

        try{
            Axios.post('http://localhost:3001/signup',{
            email:email,
            name:name,
            password:password,
            branch:branch,
            grad_year:grad_year
        }).then(async res=> {
                console.log(res.data);
                if(res.data.msg==="success")
                {
                localStorage.setItem('userId',res.data.user_id);
                history.push("/");
                }
                else
                {
                    alert(res.data.msg)
                }
            })
        }

        catch(e)
        {
            console.log(e)
        }


        
    }


return(
    
    <div className="Main-Container-sp">
        <div className="row-form">
            <div className="form-container">
                <div className='cntr'>
            <img src={logo} id="logo"></img>
            </div>
            
            <h4>Sign Up</h4>
            <hr></hr>
            <form>
            <div className='cntr'>
                <input type='text' value = {name} onChange={(e) =>
                    setName(e.currentTarget.value)} placeholder='  Full Name' required></input>
            </div>
            <div className='cntr'>
                <input type='text' value = {email} onChange={(e) =>
                    setEmail(e.currentTarget.value)} placeholder='  Email' required></input>
            </div>
            <div className="cntr">
                <input type='password' value = {password} onChange={(e) =>
                    setPassword(e.currentTarget.value)} placeholder='  Password' required></input>
            </div>
            <div className="cntr">
                <label htmlFor='branch'></label>
                <select name='branch' id='branch' value = {branch} onChange={(e) =>
                    setBranch(e.currentTarget.value)} required>
                    <option value='NONE'>Select Branch</option>
                    {branchList}
                    
                </select>
            </div>
            <div className="cntr">
                <select name='grad_year' id='year' value = {grad_year} onChange={(e) =>
                    setGrad(e.currentTarget.value)} required>
                    <option value='NONE'>Graduation Year</option>
                    {yearList}
                </select>
            </div>
            <div className="cntr">
                <button id="login" onClick = {onSubmit}>SignUp</button>
            </div>
            </form>
            <div className="cntr">
                <a href="/login"><button  id="signup" >Have an account? Login</button></a>
            </div>
        </div>         
    </div>
    <div className="row-img">

    </div>
</div>
   
)
}
export default SignUp;