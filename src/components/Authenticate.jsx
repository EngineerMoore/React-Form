const Authenticate = () => {
  // (event) => {event.preventDefault; setUsernameInput(event.target.value); users.find(()=> if (usernameInput === users.name){setkey(users.token)}}
    // SignUpForm: 
    // authenticate = ({users})
  return (
    <>
        <h2>Login</h2>
        <form onSubmit={()=>console.log(`hi`)}>
          <input type="text" placeholder="username" required/>
          <button>Authenticate</button>
        </form>
    </>

  )
}
export default Authenticate