import React, { useState } from "react";
import Button from '@mui/material/Button';
import '../App.css';

export default function MyComponent() {
    const [name, setName] = useState(""); //for firstname for user
    const [lastName, setLastName] = useState(""); //for output
    return(
        <div>
          <form>
            <h>Type in the first name of a spiderman actor! </h><br/>
              <input //input form for getting firstname from user
                type="text"
                value={name}
                onChange = {(e) => setName(e.target.value)} //allows user to type in textbox
              /><br/>
            <Button variant="outlined"
              onClick={
                () => {
                  fetch("/find/" + name) //the address to fetch, uses routing
                    .then(response => response.json())
                    .then(data => {
                      setLastName(data.output) //updates value of Lastname
                    }).catch(error => console.log(error))
                }
              }
            >Submit</Button><br/><br/>
            <label>His last name is: {lastName}</label> 
          </form>
        </div>
    );
}
