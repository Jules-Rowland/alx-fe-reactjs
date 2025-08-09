import { useState } from 'react'
import fetchUserData from '../services/githubService'

function Search () {
    const [names, setNames] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [UserData, setUserData] = useState(null);
    



const handleInput =(e) =>{
    setNames(e.target.value);
}

const handleSubmit = async (e) =>{
e.preventDefault();
setLoading(true)
setError(null)

const data = await fetchUserData(names);
if(data){
setUserData(data)
}else {
    setError('Looks like we cant find the user')
    }
    setLoading(false);
;

}

return(
<>
<form onSubmit={handleSubmit}>
<label > Enter Your Username
<input type="text"   id="username" name="username"   value={names} onChange={handleInput} autoComplete="username"/>
</label>
<button type='submit'>Submit</button>
</form>


{UserData ? (
      <div>
        <h3>User Data:</h3>
        <p>Name: {UserData.name}</p>
        <p>Link: {UserData.url}</p>
         <p>Avatar: {UserData.avatar_url}</p>
      </div>
    ) : (
      // This is the "else" part of the ternary operator
      <p>No user data to display. Please enter a user ID and submit.</p>
    )}
</>




);

};
 






export default Search;