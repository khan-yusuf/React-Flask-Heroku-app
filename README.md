# React-Flask-Heroku-app

## https://react-flask-heroku-app.herokuapp.com/ 

Created simple UI application for getting user input (first name) 
and returning last name through dictionary search.

1. Use hooks for setting state of firstName and lastName variables.
2. Fetch and GET API with Routing to connect to backend.
  ```
  onClick={
                () => {
                  fetch("/find/" + name) //the address to fetch, uses routing
                    .then(response => response.json())
                    .then(data => {
                      setLastName(data.output) //updates value of Lastname
                    }).catch(error => console.log(error))
                }
           }
  ```            
3. Returning data as JSON using jsonify function.
4. Logging error data and reading it in browser console.
5. Flask_cors and cross_origin used for local host testing.
6. Deployed on Heroku cloud through GitHub repository link.

<img width="495" alt="Screen Shot 2021-11-07 at 3 34 26 PM" src="https://user-images.githubusercontent.com/61263058/140662705-f4e3cdff-2817-45ba-9e39-32c382cf2241.png">

### Note: You may have to clear browser cookies for multiple successful app runs!
