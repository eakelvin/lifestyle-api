import React, { Component } from 'react'

class UserClass extends Component {
   constructor() {
    super(); 

    this.state = {
        users: []
    }
   }

   componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        this.setState({users: data})
        console.log(data)
    })
    .catch((error) => console.log(error))
   }

  render() {
    const {users} = this.state

    return (
      <div className='container'>
        {
            users.map((user, index) => (
                <div key={index} className='box'>
                    <div>Name : {user.name}</div>
                    <div>Username : {user.username}</div>
                    <div>Email : {user.email}</div>
                </div>
            ))
        }
        
      </div>
    )
  }
}

export default UserClass
