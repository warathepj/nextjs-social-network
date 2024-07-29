"use client"
import React, { useState } from 'react'
import Link from 'next/link'

import Navbar from '../components/Navbar'

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
  }
    return (
      <div>
        <Navbar />
        RegisterPage
        <div className='container mx-auto mt-4'>
          <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500">{error}</p>}
            <input onChange={(e) => setName(e.target.value)} className="block bg-gray-300 p-2 my-2 rounded-md" type="text" name="name" placeholder="name" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="block bg-gray-300 p-2 my-2 rounded-md" type="email" name="email" placeholder="email" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="block bg-gray-300 p-2 my-2 rounded-md" type="password" name="password" placeholder="password" />
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block bg-gray-300 p-2 my-2 rounded-md" type="password" name="confirm password" placeholder="confirm password" />
            <button type="submit" className='bg-gray-300 p-2 my-2 rounded-md'>Register</button>
          </form>
          <p className="a">
            go to <Link href="/login" className="text-blue-500 hover:underline">login</Link></p>
        </div>
      </div>
    )
}
export default RegisterPage;