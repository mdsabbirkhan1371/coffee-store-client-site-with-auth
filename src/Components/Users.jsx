import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUsers = useLoaderData()
    const [users,setUsers]=useState(loadedUsers)

    const deleteUser =(id)=>{
        console.log(id)

        fetch(`https://coffee-server-site-app.vercel.app/users/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            
            if(data.deletedCount){
                console.log('Deleted User Successful')
            }

            const remainingUser = users.filter(user=>user._id!==id)
            setUsers(remainingUser)
        })
    }
    return (
        <div>
            <h3>Total Users: {users.length}</h3>

            <div className="overflow-x-auto">
                    <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Email</th>
                        <th>Created Time</th>
                        <th>Last SignIn Time</th>
                        <th>Action</th>
                    </tr>   
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        users.map(user=> <tr key={user._id}>
                            
                            <th>{user.email}</th>
                            <td>{user.createdTime}</td>
                            <td>{user.lastSignIn}</td>
                            <td>
                                <button onClick={()=>deleteUser(user._id)} className="btn btn-error btn-xs	 mr-2">Delete</button>
                                <button
                                className="btn btn-xs	 btn-primary">Edit</button>
                            </td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;