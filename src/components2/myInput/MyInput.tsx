import React from 'react'

interface IMyInputProps{
  name:string
  placeholder:string
  label:string
  type: 'password' | 'email' | 'text' | 'number'
}

export default function MyInput({name, type, placeholder, label}: IMyInputProps ): JSX.Element {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input 
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      required
      />
    </div>
  )
}
