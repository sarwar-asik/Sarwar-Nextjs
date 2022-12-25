import { useSession ,signIn, signOut,} from 'next-auth/react';
import React from 'react';
import { toast } from 'react-toastify';

const login = () => {
    const {data: session} = useSession()

const logOut = ()=>{
    const isConfirm = window.confirm()
    if(isConfirm){
        return signOut()
    }
}

const signup= ()=>{
   return signIn().then(user=>{
    console.log(user);
    toast(" success login ")})
}

console.log(session);
if(session){
    return (
        <div className='flex flex-col  gap-5'>
            
            <h2 className='text-center text-2xl font-bold '> Welcome ,
            {session.user.email} for Login. </h2> 
            <button onClick={logOut} className='bg-red-500 btn-outline btn my-2 '>You can Sin Out</button>
            
        </div>
    );
}
else{
    return (
        <div className='text-center'>
            <h2 className='text-center text-2xl font-bold '> Login Please . </h2> 
            <button onClick={signup} className='my-5  bg-blue-500 text-white py-5 px-3 text-2xl  hover:bg-zinc-500'> Sin Up with Google</button>
        </div>
    );

}

  
};

export default login;