import { useState } from "react"
import SignUpForm from "./components/SignUpForm.jsx"
import Authenticate from "./components/Authenticate.jsx"

const App = () => {
  const [users, setUsers] = useState([]) 

  return (
    <>
      <h1>React Form</h1>      
      <SignUpForm users={users} setUsers={setUsers}/>
      <Authenticate/>
    </>
  )
}

export default App