import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { Check } from '../Action';
export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [islogged, setislogged] = useState(false);
    const dispatch=useDispatch();
    const users=useSelector((state)=>state);
    console.log(users)
    const handleClick=(e)=>{
      e.preventDefault();
      dispatch(Check(email,password,islogged));
    }

  return (


    <div class="container">
        <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={(e)=>setEmail(e.target.value)} required/>

    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={(e)=>setpassword(e.target.value)} required/>
    </div>

    <button type="submit" class="btn btn-primary" onClick={handleClick}>Submit</button>
  </form></div>
  )
}