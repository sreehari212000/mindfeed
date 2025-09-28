import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import RootLayout from './Layouts/RootLayout'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import SavedPage from './pages/SavedPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className=''>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<RootLayout />}>
                <Route index element={<HomePage />}/>
                <Route path='/saved' element={<PrivateRoute> <SavedPage /> </PrivateRoute>}/>
                <Route path='/signin' element={<SignIn />}/>
                <Route path='/signup' element={<SignUp />}/>
                <Route path='*' element={<ErrorPage />}/>
              </Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
