import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Products from './pages/Products'
import { SimpleRegistrationForm } from './pages/Create'
import { Update } from './pages/Update'
import Profile from "./pages/Accaunt"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Products />} />
          <Route path='create' element={<SimpleRegistrationForm />} />
          <Route path='Clothes/:id' element={<Update />} />
          <Route path='accaunt' element={<Profile />} />
          
        </Route>
      </Routes>
    </div>
  )
}

export default App
