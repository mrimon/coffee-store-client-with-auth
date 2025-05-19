import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const SignIn = () => {
    const { signIn } = useContext(AuthContext)
    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // const formData = new FormData(form);
        // const newUser = Object.fromEntries(formData.entries());
        // console.log(newUser);

        // singin  user 
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user.email,
                    lastSignInTime: result.user.metadata.lastSignInTime,
                };
                fetch('http://localhost:3000/users',{
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You have successfully logged in!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(err => {
                console.log(err);
            })

    }
    return (
        <div className="card bg-base-100 text-primary w-full max-w-sm mx-auto my-20 md:my-24 p-4 shrink-0 shadow-2xl">
            <h1 className="text-5xl text-center font-bold">Sign In now!</h1>
            <div className="card-body">
                <form onSubmit={handleSignIn} className="fieldset">
                    <label className="label text-primary">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />
                    <label className="label text-primary">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type='submit' className="btn btn-neutral mt-4">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;