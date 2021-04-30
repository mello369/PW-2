import './Login.css';
import logo from './logo-sm.png'
function Login(){
return(
    
    <div className="Main-Container">
        <div className="row-form">
            <div className="form-container">
                <div className='cntr'>
            <img src={logo} id="logo"></img>
            </div>
                <h4>Sign In</h4>
                <hr></hr>
                <div className='cntr'>
                <input type='text' placeholder='  Email' ></input>
                </div>
                <div className="cntr">
                <input type='password' placeholder='  Password'></input>
                </div>
                <div className="cntr">
                <span>Forgot Password?</span>
                </div>
                <div className="cntr">
                <button  id="login">Login</button>
                </div>
                <div className="cntr">
                <button  id="signup">SignUp</button>
                </div>
            </div>         
        </div>
        <div className="row-img">

        </div>
    </div>
   
)
}
export default Login;