import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../auth/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const axiosSecure = axios.create({
    baseURL:'http://localhost:5000',
    withCredentials:true
})

const UseAxiosSecure = () => {
    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res
        }, error => {console.log(error.response)
          if(error.response.status === 401 || error.response.status === 403){
            console.log('Logout the User');
            logOut()
            .then(()=>{
                navigate('/login')
            })
            .catch(error => console.log(error))
          } 
        }
       )
    },[])
    return axiosSecure
};

export default UseAxiosSecure;