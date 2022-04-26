import React from 'react'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import Home from './pages/home/Home'
import User from './pages/user/User'
import UserList from './pages/userList/UserList'
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/productList/ProductList'
import Product from './pages/product/Product'
import NewProduct from './pages/newProduct/NewProduct'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <>
            <Router>
                <Topbar />
                <div className='container'>
                    <Sidebar />
                    <Routes>
                        <Route path='/' exact element={<Home />} />
                        <Route path='/users' element={<UserList />} />
                        <Route path='/user/:userId' element={<User />} />
                        <Route path='/newUser' element={<NewUser />} />
                        <Route path='/products' element={<ProductList />} />
                        <Route
                            path='/product/:productId'
                            element={<Product />}
                        />
                        <Route
                            path='/newproduct'
                            element={<NewProduct />}
                        ></Route>
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default App
