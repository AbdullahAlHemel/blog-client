import { useContext, useState } from 'react';
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const SingUp = () => {
  const [registerError, setRegisterError]  = useState('');
  const location = useLocation(); 
  const navigate = useNavigate();


    
    const {createUser} = useContext(AuthContext);
    const handleSignUP = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        console.log(email,password);
        createUser(email, password)
        .then(result => {
            console.log(result);
            
                 
            const createdAt = result.user?.metadata?.creationTime;
            const user = {name, email, createdAt: createdAt }; 


            fetch('https://car-server-abdullahalhemel.vercel.app/users', {
                method : 'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(user)
            })
            
            .then(res => 
                res.json()
               )
            .then(data => {
                console.log(data);                                   
            })
        })

        if(password.length < 6){
            return  setRegisterError('password should not be at least 6 characters or longer');
            ;
          }else if(!/[A-Z]/.test(password)){
            return setRegisterError('Your Password should have at least one uppercase characters');
            ;
          }else if(!/[!"#$%&'()*+,-./:;<>=?@[\^_`|{}~]/.test(password)){
            return setRegisterError('Please Use a Special character in password');
           
          }else{
             setRegisterError()
            
            Swal.fire({
                title: 'SignUP Successful',
                text: 'Thanks',
                icon: 'success',
                confirmButtonText: 'ok'
              })
            // console.log(data);
            return navigate(location?.state? location.state : '/' );  
                 
        }
    }

    return (
        <div className='border-t pt-16  mb-36'>
                
           <div data-aos="flip-down" className="hero ">

        <div className="md:w-3/4 lg:w-1/2 mx-auto">
        <h2 className='text-center text-3xl font-semibold text-blue-700'>Register now</h2>
        <form onSubmit={handleSignUP} className="my-3">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input type="name" placeholder="Your name" name='name' className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                
            </div>
            <div className="form-control mt-6">
            <button className="btn bg-blue-100">Register</button>
            </div>
        </form>
        {registerError && <p className=" mt-2 text-center mb-4 mt-1 text-red-600">{registerError}</p> }
        <p className='text-center'>Already have a account? <Link to='/login' className='underline text-blue-700 font-semibold'>Login</Link></p>
        </div>
        </div>
            </div>
    );
};

export default SingUp;