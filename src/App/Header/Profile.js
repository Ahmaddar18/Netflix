import React from 'react';
class Profile extends React.Component {
  render(){
    return(
      <div className="UserProfile">
        <div className="User">
          <div className="name">Sci-Code</div>
          <div className="image">
            <img src="http://sci-code.com/Student_PlatformV1/public-avec-Back-end/images/logo.png" alt="profile"/>
          </div>
        </div>
      </div>
    )
  }
}
export default Profile;