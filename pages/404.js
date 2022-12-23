import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
    return (
        <div className='h-[30rem] w-auto text-center ' style={{"backgroundImage":"url('https://img.freepik.com/free-photo/error-text-broken-glass-font_53876-104949.jpg?w=1060&t=st=1671810141~exp=1671810741~hmac=2f14f90ea87a38685733b5ab451685cddbd40726569a41bb3e4324996d755e62')"}}> 
         <Link className=' w-' href='/'>
       <span className='mx-2 text-2xl text-slate-600'>  Go to </span>
         <button className='btn btn-warning'>
           Home
         </button>
         </Link>
         
            
        </div>
    );
};

export default ErrorPage;