
import Swal from 'sweetalert2'

const AddCoffee = () => {

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

        const coffee ={name,quantity,supplier,category,price,flavour,photo}

        console.log(coffee)

        // send data for server 

        fetch("https://coffee-server-site-app.vercel.app/coffees",{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(coffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)

            if(data.insertedId){
                Swal.fire({
                title: 'success!',
                text: 'Your Coffee has been Added Successful',
                icon: 'success',
                confirmButtonText: 'ok'
                })
            }
        })
    }
    return (
        <div className="m-24">
            <h3 className="text-2xl text-center my-12">Add Coffee Here</h3>

                <form onSubmit={handleForm} className="card-body">
                        {/* name and quantity field  */}
                        <div className="md:flex gap-3">
                            <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Coffee Name</span>
                                    </label>
                                    <input type="text" placeholder="Coffee Name" name="name" className="input input-bordered" required />   
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text" placeholder="Quantity" name="quantity" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* supplier and quantity category  */}
                        <div className="md:flex gap-3">
                            <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Supplier Name</span>
                                    </label>
                                    <input type="text" placeholder="Supplier Name" name="supplier" className="input input-bordered" required />   
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" placeholder="Category" name="category" className="input input-bordered" required />
                            </div>
                        </div>
                        {/*  price and flavour field  */}
                        <div className="md:flex gap-3">
                            <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" placeholder="Price" name="price" className="input input-bordered" required />   
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Flavour Type</span>
                                </label>
                                <input type="text" placeholder="Flavour Type" name="flavour" className="input input-bordered" required />
                            </div>
                        </div>
                        
                        <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />   
                            </div>

                        <div className="form-control mt-6">
                        <input type="submit" className="btn btn-secondary" value="Add Coffee" />
                        </div>
                    </form>
        </div>
    );
};

export default AddCoffee;