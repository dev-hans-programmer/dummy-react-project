import { useState } from 'react';
import './App.css';

function App() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      const { name, value } = e.target;

      if (name === 'email') {
         setEmail(value);
      } else {
         setPassword(value);
      }
   }

   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      console.log({ email, password });
      alert('Login successful');
   }

   return (
      <div className='login_page'>
         <form onSubmit={handleSubmit}>
            <input
               type='text'
               name='email'
               value={email}
               onChange={handleChange}
            />
            <input
               type='password'
               name='password'
               value={password}
               onChange={handleChange}
            />
            <button>Login</button>
         </form>
      </div>
   );
}

export default App;
