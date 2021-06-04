import './SignUp.css';
import logo from './logo-sm.png';
const branch=['CSE','ISE','ECE','ME','BT','AE','CVL'];
const branchList=branch.map((branch)=>
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
                <input type='text' placeholder='  Full Name' required></input>
            </div>
            <div className='cntr'>
                <input type='text' placeholder='  Email' required></input>
            </div>
            <div className="cntr">
                <input type='password' placeholder='  Password' required></input>
            </div>
            <div className="cntr">
                <label htmlFor='branch'></label>
                <select name='branch' id='branch' required>
                    <option value='NONE'>Select Branch</option>
                    {branchList}
                    
                </select>
            </div>
            <div className="cntr">
                <select name='grad_year' id='year' required>
                    <option value='NONE'>Graduation Year</option>
                    {yearList}
                </select>
            </div>
            <div className="cntr">
                <button id="login">SignUp</button>
            </div>
            </form>
            <div className="cntr">
                <a href="/login"><button  id="signup">Have an account? Login</button></a>
            </div>
        </div>         
    </div>
    <div className="row-img">

    </div>
</div>
   
)
}
export default SignUp;