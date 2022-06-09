import React from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
     const {register,handleSubmit}=useForm()
     const navigate = useNavigate();

const submit=(data)=>{

    axios.post(`https://ecommerce-api-react.herokuapp.com/api/v1/users/login`,data)
    .then(res=>{
        console.log(res.data.data.token)
        localStorage.setItem("token",res.data.data.token)
        navigate("/")
        alert("Sesion iniciada correctamente")
     } )

    
    .catch(error =>{
        console.log(error.response.status)
        if(error.response.status===404)
        alert("credenciales incorrectas")
    
    })
    console.log(data)
}

    return (
        <div >
        <form onSubmit={handleSubmit(submit)} className='card-login' >
<p>User : mason@gmail.com</p>
<p>Password : mason1234</p>
 <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email"{...register("email")} className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password"{...register("password")} className="form-control" id="inputPassword3"/>
    </div>
    </div>
    <button type="submit" className="btn btn-success">Sign in</button>
</form>
        </div>
    );
};

export default Login;