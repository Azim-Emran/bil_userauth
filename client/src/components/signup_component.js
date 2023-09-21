import React, { Component } from 'react'

export default class SignUp extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            fname:'',
            lname:'',
            email:'',
            password:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const{ username, fname, lname, email, password } = this.state;
        console.log(username, fname, lname, email, password);
        fetch("http://localhost:5000/register",{
            method:"POST",
            crossDomain:true,
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body:JSON.stringify({
                username,
                fname,
                lname,
                email,
                password
            }),
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data, "userRegister");
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Sign Up</h1>

                <div className='mb-3'>
                    <label>Username</label>
                    <input
                        type="text"
                        className='form-control'
                        placeholder='Username'
                        onChange={e=>this.setState({ username: e.target.value })}
                    />
                </div>
                <div className='mb-3'>
                    <label>First Name</label>
                    <input
                        type="text"
                        className='form-control'
                        placeholder='First name'
                        onChange={e=>this.setState({ fname: e.target.value })}
                    />
                </div>

                <div className='mb-3'>
                    <label>Last Name</label>
                    <input
                        type="text"
                        className='form-control'
                        placeholder='Last name'
                        onChange={e=>this.setState({ lname: e.target.value })}
                    />
                </div>

                <div className='mb-3'>
                    <label>Email Address</label>
                    <input
                        type="text"
                        className='form-control'
                        placeholder='Enter email'
                        onChange={e=>this.setState({ email: e.target.value })}
                    />
                </div>

                <div className='mb-3'>
                    <label>Password</label>
                    <input
                        type="password"
                        className='form-control'
                        placeholder='Enter password'
                        onChange={e=>this.setState({ password: e.target.value })}
                    />
                </div>

                <div className='d-grid'>
                    <button type='submit' className='btn btn-primary'>
                        Sign Up
                    </button>
                </div>
            </form>
        )
    }
}