import React from 'react'
import ReactDOM from 'react-dom/client'
import { PhoneInput } from '../src/PhoneInput'
import './style.css'

const App = () => {
  const [value, setValue] = React.useState('')
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-6">
        <h1 className="text-2xl font-semibold text-center">📱 Try SmartPhoneInput</h1>
        <PhoneInput value={value} onChange={setValue} defaultCountry="US" />
        <p className="text-center text-gray-500 text-sm">Raw value: {value}</p>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
