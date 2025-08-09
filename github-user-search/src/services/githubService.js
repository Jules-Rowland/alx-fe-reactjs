const fetchUserData = async (names) =>{
    try{
        const response = await fetch(`https://api.github.com/users/${names}`);



        if(!response.ok){
             throw new Error(`HTTP Error! status: ${response.status}`);
             
        }else{
       
            const userName = await response.json();
            return userName;
        }

    }
    catch(error){
        console.error("Failed to fetch user name:", error);
        return null;
    }
  
    
}

export default fetchUserData;