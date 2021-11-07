import React, { useState } from "react";
import Button from '@mui/material/Button';

export default function MyComponent() {
    const [name, setName] = useState(""); //for firstname for user
    const [lastName, setLastName] = useState(""); //for output
    return(
        <div>
          <form>
            <label>Type in your first name:
              <input //input form for getting firstname from user
                type="text"
                value={name}
                onChange = {(e) => setName(e.target.value)} //allows user to type in textbox
              />
            </label><br />
            <Button variant="outlined"
              onClick={
                () => {
                  fetch("http://127.0.0.1:5000/find/" + name) //the address to fetch, uses routing
                    .then(response => response.json())
                    .then(data => {
                      setLastName(data.output) //updates value of Lastname
                    }).catch(error => console.log(error))
                }
              }
            >Submit</Button>
            <label>Your last name is: {lastName}</label> 
          </form>
        </div>
    );
}
