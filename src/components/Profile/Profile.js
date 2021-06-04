import './Profile.css';
function Profile()
{
    return(
        <div className="profile">
        <div className="container">
            <a href="/EditProfile"><button id="edit-button">Edit</button></a>
            <h3>Profile</h3>
            
            <div className="profile-data">
                <div id="profile-img"></div>
                <div id="name">Safwan MI</div>

                <div id="branch">BMSCE,CSE</div>
                <div id="year">2014-2018</div>  
                <hr className="left"></hr>              
                <div id="desc">
                    ejnf fkn nkjrenf njkrfnrkjn ernkj rjkn erkjn erkjnee njkerrkjnerk
                    rekjnr rkn re krke mklre mmkllre mklr kle mkrlkke mrklemr mklem elke
                      jjrem ekl merlk kerm mkerl ker mker ker mker klerr mlkerl
                </div>
                <hr className="left"></hr>
                <div id="work">
                    Currently working in<br></br>
                    Samsung
                </div>
            </div>
            <hr className="left"></hr>
            <h4>Posts Added By Me</h4>
            <div className="post"></div>
            <div className="post"></div>
            <div className="post"></div>

        </div>
        </div>
    )
}

export default Profile