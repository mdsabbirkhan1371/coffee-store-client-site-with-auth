import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";

const SignIn = () => {

    const {signInUser}=useContext(AuthContext);

    const handleForm =(e)=>{
        e.preventDefault()
        const form = e.target;
        const email =form.email.value;
        const password =form.password.value;

        console.log(email,password)

        signInUser(email,password)
        .then(res=>{
            console.log(res.user)
            const user ={email,
                lastSignIn:res.user?.metadata?.lastSignInTime
            }

            fetch('https://coffee-server-site-app.vercel.app/users',{
                method:'PATCH',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
            })
        })
        .catch(err=>{
            console.error(err)
        })
       
        

        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleForm} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" name="email" required />
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
                        <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    </div>
                </div>
        </div>
    );
};

export default SignIn;