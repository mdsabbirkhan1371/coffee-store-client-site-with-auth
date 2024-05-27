import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const coffee = useLoaderData()
    console.log(coffee)

    const {_id,name,quantity,supplier,category,price,flavour,photo}=coffee;


    const handleForm =(e)=>{
        e.preventDefault()
        const form =e.target;

        const name =form.name.value;
        const quantity =form.quantity.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const price = form.price.value;
        const flavour = form.flavour.value;
        const photo = form.photo.value;

        const updateCoffee ={name,quantity,supplier,category,price,flavour,photo}

        console.log(updateCoffee)

        // update coffee now 

        fetch(`https://coffee-server-site-app.vercel.app/coffees/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
             if(data.modifiedCount>0){
                Swal.fire({
                title: 'success!',
                text: 'Your Coffee has been Updated Successful',
                icon: 'success',
                confirmButtonText: 'ok'
                })
            }
        })
    }
    return (
        <div className="m-24">
            <h3 className="text-2xl text-center my-12">Update Coffee Here : {name}</h3>

                <form onSubmit={handleForm} className="card-body">
                        {/* name and quantity field  */}
                        <div className="md:flex gap-3">
                            <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Coffee Name</span>
                                    </label>
                                    <input type="text" defaultValue={name} placeholder="Coffee Name" name="name" className="input input-bordered" required />   
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text" defaultValue={quantity} placeholder="Quantity" name="quantity" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* supplier and quantity category  */}
                        <div className="md:flex gap-3">
                            <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Supplier Name</span>
                                    </label>
                                    <input type="text" defaultValue={supplier} placeholder="Supplier Name" name="supplier" className="input input-bordered" required />   
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" defaultValue={category} placeholder="Category" name="category" className="input input-bordered" required />
                            </div>
                        </div>
                        {/*  price and flavour field  */}
                        <div className="md:flex gap-3">
                            <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" defaultValue={price} placeholder="Price" name="price" className="input input-bordered" required />   
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Flavour Type</span>
                                </label>
                                <input type="text" defaultValue={flavour} placeholder="Flavour Type" name="flavour" className="input input-bordered" required />
                            </div>
                        </div>
                        
                        <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" defaultValue={photo} placeholder="Photo URL" name="photo" className="input input-bordered" required />   
                            </div>

                        <div className="form-control mt-6">
                        <input type="submit" className="btn btn-secondary" value="Update Coffee" />
                        </div>
                    </form>
        </div>             

    );
};

export default UpdateCoffee;