import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, price, Photo, supplier, details, quantity, taste } = coffee;
    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries());

        console.log(updatedCoffee);
        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Updated successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }
    return (
        <div className='mb-8 md:mb-12'>
            <div className=' my-8 md:my-12'>

                <Link to='/' className='flex items-center gap-3 text-2xl md:text-3xl text-accent'><FaArrowLeftLong size={26} />Back to home</Link>
            </div>
            <div className='px-20 md:px-24 py-12 md:py-16 bg-base-200 box-border rounded-lg'>
                <div className='p-12 text-center text-accent'>
                    <h1 className='text-3xl md:text-5xl'>Update Existing Coffee Details</h1>
                    <p className='text-lg text-base-300 my-6 md:my-8'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handleUpdateCoffee}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 text-base-300'>
                        <fieldset className="fieldset w-full bg-base-200  rounded-box">
                            <label className="label">Name</label>
                            <input type="text" className="input w-full" defaultValue={name} name='name' placeholder="Enter coffee name" />
                        </fieldset>
                        <fieldset className="fieldset w-full bg-base-200  rounded-box">
                            <label className="label">Quantity</label>
                            <input type="text" className="input w-full" defaultValue={quantity} name='quantity' placeholder="Enter coffee quantity" />
                        </fieldset>
                        <fieldset className="fieldset w-full bg-base-200  rounded-box">
                            <label className="label">Supplier</label>
                            <input type="text" className="input w-full" defaultValue={supplier} name='supplier' placeholder="Enter coffee supplier" />
                        </fieldset>
                        <fieldset className="fieldset w-full bg-base-200  rounded-box  ">
                            <label className="label">Taste</label>
                            <input type="text" className="input w-full" defaultValue={taste} name='taste' placeholder="Enter coffee taste" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 w-full  rounded-box  ">
                            <label className="label">Price</label>
                            <input type="text" className="input w-full" defaultValue={price} name='price' placeholder="Price per cup" />
                        </fieldset>
                        <fieldset className="fieldset w-full bg-base-200  rounded-box  ">
                            <label className="label">Details</label>
                            <input type="text" className="input w-full" defaultValue={details} name='details' placeholder="Enter coffee details" />
                        </fieldset>
                    </div>
                    <fieldset className="fieldset w-full my-5 bg-base-200  rounded-box  ">
                        <label className="label">Photo</label>
                        <input type="text" className="input w-full" defaultValue={Photo} name='Photo' placeholder="Enter Photo URL" />
                    </fieldset>

                    <button type="submit" className='btn w-full bg-secondary border border-primary hover:bg-transparent hover:text-primary '>Add Coffee</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;