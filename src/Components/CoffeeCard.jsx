import { data } from "autoprefixer";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({coffee,setCoffees,coffees}) => {

    const {_id,name,quantity,supplier,category,price,flavour,photo}=coffee;

    const handleDelete=(_id)=>{
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            })
            .then(result=>{
                if(result.isConfirmed){
                    fetch(`https://coffee-server-site-app.vercel.app/coffees/${_id}`,{
                        method:'DELETE'
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        if(data.deletedCount>0){
                            Swal.fire({
                                title:'Deleted!',
                                text:'Your coffee has been deleted',
                                icon:'success'
                            })
                        }

                        const remainingCoffee = coffees.filter(cof=>cof._id!==_id)
                        setCoffees(remainingCoffee)
                    })

                    
                }
            })
        }
            

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="w-24" src={photo} alt="Album"/></figure>
            <div className="card-body space-y-1">
                <h2 className="card-title">Name: {name}</h2>
                <p>Price: {price} Tk</p>
                <p>Flavour: {flavour}</p>
                <p>Available: {quantity}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">View</button>
                <Link to={`/updateCoffee/${_id}`}>
                <button className="btn btn-primary">Edit</button>
                </Link>
                <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;