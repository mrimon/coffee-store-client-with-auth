import React from 'react';
import { FaEye } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';
import Swal from 'sweetalert2';


const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, price, Photo } = coffee;

    const handleDelete = (id) => {
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
                // delete item
                fetch(`http://localhost:3000/coffees/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("after delete", data);
                        if(data.deletedCount){
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
        <div className="grid grid-cols-3 text-[#5C5B5B] bg-base-200 text-xl shadow-sm">
            <figure>
                <img
                    src={Photo}
                    alt="Movie" />
            </figure>
            <div className='flex col-span-2 p-4 justify-between'>
                <div className="p-5 flex flex-col justify-center ">
                    <h2 className=""><span className='text-base-300 font-semibold'>Name:</span> {name}</h2>
                    <p><span className='text-base-300 font-semibold'>Quantity: </span>{quantity}</p>
                    <p><span className='text-base-300 font-semibold'>Price: </span> {price}</p>
                </div>
                <div className='flex flex-col justify-center gap-4'>
                    <button className="btn bg-[#D2B48C] hover:bg-transparent  "><FaEye size={30} className=" text-white hover:text-[#D2B48C]" />
                    </button>
                    <button className="btn bg-[#3C393B] hover:bg-transparent   "><MdEdit size={30} className=" text-white hover:text-[#3C393B]" />
                    </button>
                    <button onClick={() => handleDelete(_id)} className="btn bg-[#EA4744] hover:bg-transparent   "><MdDelete size={30} className=" text-white hover:text-[#EA4744]" /></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;