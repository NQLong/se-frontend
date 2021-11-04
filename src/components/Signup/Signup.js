import React, { useState } from 'react';
import './Signup.css'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import {SignupUser} from '../../actions/UserAction'
import {Link} from 'react-router-dom'

function Login(props) {
    const dispatch = useDispatch()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => {
        if(password === confirmPassword) {
            dispatch(SignupUser(data))            
        } else{
            alert("Xác nhận mật khẩu sai!!!")
        }
    }
  
    return (
      <div className="signup-page">
        <h2>ĐĂNG KÍ</h2>
        <form onSubmit={handleSubmit(onSubmit)} classname="form-signup">
          <input {...register("name")} placeholder="Tên" required></input>
          <input
            {...register("email")}
            placeholder="Email"
            type="email"
            required
          ></input>
          <input
            {...register("password")}
            placeholder="Mật khẩu"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
          <input
            {...register("repeat password")}
            placeholder="Xác nhận lại mật khẩu"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          ></input>

          <input type="submit" value="Đăng Kí"></input>
        </form>
        <Link style={{fontSize:20}} to="/login">Đăng nhập</Link>
        <Link style={{fontSize:20}} to="/">Trở về trang chủ</Link>
      </div>
    );
}

export default Login;