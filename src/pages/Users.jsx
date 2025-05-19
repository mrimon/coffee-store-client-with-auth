import { deleteUser } from 'firebase/auth';
import React, { useState } from 'react';
import { FaEdit, FaEye } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { auth } from '../firebase/firebase.config';

const Users = () => {
    const initialUsers = useLoaderData();
    const [users, setUsers] = useState(initialUsers);
    console.log(initialUsers);


    const handleDeleteUser = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // delete user from the db 
                fetch(`http://localhost:3000/users/${id}`, {
                    method: 'DELETE'})
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){

                        const remainingUsers = users.filter(user => user._id !== id);
                        setUsers(remainingUsers)
                        deleteUser(auth.currentUser).then(() => {

                        })
                        .catch(err => {
                            console.log(err);
                        })
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })

            }
        });
    }
    return (
        <div className='max-w-7xl mx-auto my-20 md:my-24'>
            <h1 className='text-5xl '>Users: {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                No
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone No.</th>
                            <th>Last Sign In</th>
                            <th>More</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={user.photo}
                                                        alt={`image of ${user.name}`} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                                <div className="text-sm opacity-50">{user.address}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.lastSignInTime
                                    }</td>
                                    <th>
                                        <div className="join join-vertical lg:join-horizontal space-x-1">
                                            <button className="btn join-item btn-sm"><FaEye title='View More'></FaEye></button>
                                            <button className="btn join-item btn-sm"><FaEdit title='Edit User'></FaEdit></button>
                                            <button onClick={() => handleDeleteUser(user._id)} className="btn join-item btn-sm"><MdDelete title='Delete User' /></button>
                                        </div>
                                    </th>
                                </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Users;