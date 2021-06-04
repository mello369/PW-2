import './EditProfile.css';



function EditProfile()
{
    return(
        <div className="eprofile">
            <div className="econt">
                <h3>Edit Profile(Not completed)</h3>
                <form>
                <div className="row">
                    <label>Profile Picture: </label>
                    <input type="file" name="profile-pic" placeholder="Upload"></input>
                </div>
                <div className="row">
                    <input type="text" placeholder="Full Name" name="name">
                    </input>
                </div>
                <div className="row">
                    <input type="text" placeholder="Branch" name="branch"></input>
                </div>
                <div className="row">
                    <input type="text" placeholder="Describe yourself" name="desc">
                    </input>
                </div>
                <div className="row">
                    <input type="text" placeholder="Current Company" name="company">
                    </input>
                </div>
                </form>
            </div>
            <hr></hr>
            <h4>Posts</h4>
            <div className="post-box">
                <button id="delete">Delete Post</button>
                <div className="post"></div>
            </div>
            <hr></hr>
            <div className="post-box">
                <button id="delete">Delete Post</button>
                <div className="post"></div>
            </div>
            <hr></hr>
            <div className="post-box">
                <button id="delete">Delete Post</button>
                <div className="post"></div>
            </div>
            
        </div>
    )
}


export default EditProfile