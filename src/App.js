import React, {useState} from 'react';
import LoginForms from './components/LoginForms';

function App() {

      const adminUser = {
        name:"nabil",
        email: "nabil.mouahbi001@mymdc.net",
        password: "admin123"
      }


      const [user,setUser] = useState( {name: "" , email: ""});
      const [error,setError] = useState("");

      const Login = details => {
        console.log(details);
            if ( details.name== adminUser.name && details.email== adminUser.email && details.password == adminUser.password) {
              console.log("logged In");
              setError("")
              setUser({
                name: details.name,
                email: details.email
              });
            } else {
              console.log("error");
              setError ("Something went Wrong Try again")
            }

      }

      const Lougout = () => {
        setUser({name: "" , email: ""});
      }


  return (
    <div className="App">
      {(user.email != "") ? (
        <div className=" Welcome">
          <h2> Welcome, <span>{user.name}</span> <button onClick= {Lougout}>Logout</button> </h2>
          
        </div>
      )  : (
        <LoginForms Login={Login} error={error} />
        
      )} 
    </div>
  );
}

export default App;
