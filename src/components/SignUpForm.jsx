import { useState } from "react"

const SignUpForm = () => {
  const [usernameInput, setUsernameInput] = useState(``);
  const [passwordInput, setPasswordInput] = useState(``);
  const [error, setError] = useState(null)


  const submitForm = async(event) => {
    event.preventDefault();
        try {
          const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/signup`,
            { method: "POST",
              headers:{
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                username:"${usernameInput}",
                password:"${passwordInput}"
              })
            }
          );
          const newResponse = await fetch("https://fsa-jwt-practice.herokuapp.com/signup");
          const result = await newResponse.json();
          console.log(result);
        } catch(error) {setError(error.message)}
      };
 
  return (
    <>
      <h1>React Form</h1>
      <section>
        <h2>Sign Up</h2>
        {error&& <p>{error}</p>}
        <form onSubmit={submitForm}>
          <input type="text" placeholder="username" onChange={(event) => {setUsernameInput(event.target.value); /* console.log(usernameInput) */}}>
          </input>
          <input type="text" placeholder="password" onChange={(event) => {setPasswordInput(event.target.value); /* console.log(passwordInput) */}}>
          </input>
          <button>Sign Up</button>
        </form>
      </section>
    </>
  )
}

export default SignUpForm