import "./UserProfile-style.css"

function UserProfile () {
    return (
        <div className="profile">
            <img src="src/profile.png" alt="Profile Image" />
            <div>
                <h4>Jordan Walke</h4>
                <h5>React Creator</h5>
                <p>Lorem ipsum</p>
            </div>
        </div>
    )
}

export default UserProfile;