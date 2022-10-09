import React from 'react'
import { useSelector } from 'react-redux'
import { todosSelector } from '../store/reducers/todoSlice'

export default function Navbar() {
  const todos = useSelector(todosSelector)
  return (
    <div className='navbar'>
        <h1>My redux app todo list</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Total Todo: {todos.length}</li>
        </ul>
    </div>
  )
}
