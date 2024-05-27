import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";

const SignUp = () => {

    const {createUser}=useContext(AuthContext)
    
    const handleForm =(e)=>{
        e.preventDefault()
        const form =e.target;
        const email =form.email.value;
        const password =form.password.value;

        console.log(email,password)

        // create user with email and password 

        createUser(email,password)
        .then(res=>{
            console.log(res.user)
            const createdAt = res.user?.metadata?.creationTime;

            const user ={email,createdTime: createdAt}
            // send user email in database 

            fetch('https://coffee-server-site-app.vercel.app/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(user)

            })
        })
        .catch(err=>{
            console.error(err)
        })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Sign Up now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleForm} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up Now</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;