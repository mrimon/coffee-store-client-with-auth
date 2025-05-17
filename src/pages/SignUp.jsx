import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)


    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...userInfo } = Object.fromEntries(formData.entries());


        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);

                // send user data to DB
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('after saving data', data);
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Successfully created Sign up!",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (

        <div className="card bg-base-100 text-primary w-full max-w-sm mx-auto my-20 md:my-24 p-4 shrink-0 shadow-2xl">
            <h1 className="text-5xl text-center font-bold">Sign Up now!</h1>
            <div className="card-body">
                <form onSubmit={handleSignUp} className="fieldset">
                    <label className="label text-primary">Name</label>
                    <input type="text" className="input" name='name' placeholder="Name" />
                    <label className="label text-primary">Address</label>
                    <input type="text" className="input" name='email' placeholder="Address" />
                    <label className="label text-primary">Phone</label>
                    <input type="phone" className="input" name='phone' placeholder="Phone number" />
                    <label className="label text-primary">Photo URL</label>
                    <input type="text" className="input" name='photo' placeholder="Photo URL" />
                    <label className="label text-primary">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />
                    <label className="label text-primary">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type='submit' className="btn btn-neutral mt-4">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;