import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
  const navigate = useNavigate()

 const handleLoginInfo = async (e) => {
  setErrorMsg('')
  const username = usernameRef.current.value
  const password = passwordRef.current.value
  try {
    const response = await axios.post(
      isLogin
        ? 'http://localhost:3000/api/v1/login'
        : 'http://localhost:3000/api/v1/register',
      { username: username, password }
    )

    // ✅ Store the JWT token
    localStorage.setItem('jwt', response.data.token)

    navigate('/dashboard')
  } catch (error) {
    if (error.response && error.response.data) {
      setErrorMsg(error.response.data.error || 'An error occurred')
    } else {
      setErrorMsg(error.message)
    }
  }
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-lg text-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          {isLogin ? 'Login to SkillSwap' : 'Create an Account'}
        </h2>
        <form className="space-y-4" onSubmit={handleLoginInfo}>
          <div>
            <label className="block text-gray-300 mb-1">username</label>
            <input
              type="username"
              name="username"
              ref={usernameRef}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type="password"
              name="password"
              ref={passwordRef}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
              placeholder="Password"
              required
            />
          </div>

          {errorMsg && (
            <p className="text-red-500 text-sm text-center">{errorMsg}</p>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition cursor-pointer text-lg font-semibold"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <p className="text-sm text-center text-gray-400 mt-6">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={() => {
              setErrorMsg('')
              setIsLogin(!isLogin)
            }}
            className="text-indigo-400 hover:underline cursor-pointer"
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  )
}

export default Auth
