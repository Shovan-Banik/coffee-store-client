import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee=useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee=event=>{
        event.preventDefault();
        const form=event.target;

        const name=form.name.value;
        const quantity=form.quantity.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;
        const updatedCoffee={name,quantity,supplier,taste,category,details,photo}

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success',
                    text: 'Coffee updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  form.reset();
            }
        })
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold text-center mb-8">Updated Coffee: {name}</h2>
        <form onSubmit={handleUpdateCoffee}>
            {/* from name and quantity row */}
            <div className="md:flex gap-4 mb-6">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Coffee Name" defaultValue={name} name="name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Available Quantity" 
                        defaultValue={quantity}name="quantity" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* supplier and taste */}
            <div className="md:flex gap-4 mb-6">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Supplier Name"
                        name="supplier"
                        defaultValue={supplier} className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Taste"
                        defaultValue={taste} name="taste" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* category and details */}
            <div className="md:flex gap-4 mb-6">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Category" name="category"
                        defaultValue={category} className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Details" name="details" 
                         defaultValue={details}className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* photo url */}
            <div className="mb-6">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Photo URL"
                        defaultValue={photo} name="photo" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input type="submit" value="Update Coffee" className="btn btn-block"/>
        </form>
    </div>
    );
};

export default UpdateCoffee;