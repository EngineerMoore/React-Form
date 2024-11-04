import { useState } from "react"

const SignUpForm = ({users, setUsers}) => {
  const [usernameInput, setUsernameInput] = useState(``);
  const [passwordInput, setPasswordInput] = useState(``);
  const [error, setError] = useState(null)
  const [token, setToken]=useState("")

  const updateUsersList = async () => {
    console.log({username: usernameInput, token: token});
   const addUser = [...users,{username: usernameInput, token: token}];
   await setUsers(addUser);
   console.log(users)
  }

  const submitForm = async(event) => {
    event.preventDefault();
        try {
          const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/signup`,
            { method: "POST",
              headers:{
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                username: usernameInput,
                password: passwordInput
              })
            }
          )
          const result = await response.json();
          console.log(result.token);
          const retrievedToken = result.token;
          console.log(retrievedToken);
          setToken(retrievedToken);
          console.log(token)
          ;
        } catch(error) {setError(error.message)};
        updateUsersList();
      }
 
  return (
    <>
        <h2>Sign Up</h2>
        {error&& <p>{error}</p>}
        <form onSubmit={submitForm}>
          <input type="text" placeholder="username" onChange={(event) => {setUsernameInput(event.target.value); /* console.log(usernameInput) */}}>
          </input>
          <input type="text" placeholder="password" onChange={(event) => {setPasswordInput(event.target.value); /* console.log(passwordInput) */}}>
          </input>
          <button>Sign Up</button>
        </form>
    </>
  )
}

export default SignUpForm