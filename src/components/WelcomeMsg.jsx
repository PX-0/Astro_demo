import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting,newGreeting] = useState(randomMessage());

  return (
    <div className='text-center'> 
      <h1 className='text-white py-3'>{greeting}! Thank you for visiting!</h1>
      <button className='btn btn-secondary' onClick={() => newGreeting(randomMessage())}>
        Change Greeting
      </button>
    </div>
  );
}