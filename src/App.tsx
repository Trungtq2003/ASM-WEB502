import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { addProduct, deleteProduct, getAllProduct, updateProduct } from './api/product'
import AddProductPage from './pages/admin/AddProduct'
import ProductManagementPage from './pages/admin/ProductManagement'
import UpdateProductPage from './pages/admin/UpdateProduct'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'
import { IProduct } from './types/product'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import Signin from './pages/signin'
import Signup from './pages/signup'
import { IUser } from './types/user'
import { getUser, removeUser, signup } from './api/auth'
import { ICategory } from './types/category'
import ListCategoryPage from './pages/admin/ListCategory'
import { addCategory, deleteCategory, getAllCategory } from './api/category'
import AddCategoryPage from './pages/admin/AddCategory'
import ListUserPage from './pages/admin/ListUser'
import AdminLayout from './pages/layouts/AdminLayout'
import Dashboard from './pages/admin/Dashboard'

function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [category, setCategory] = useState<ICategory[]>([])
  const [user, setUser] = useState<IUser[]>([])

  useEffect(() => {
    getAllProduct().then(({ data }) => setProducts(data))
    getAllCategory().then(({ data }) => setCategory(data))
    getUser().then(({ data }) => setUser(data))
  }, [])
  const onHandleRemove = (id: number) => {
    deleteProduct(id).then(() => setProducts(products.filter((item: IProduct) => item.id !== id)))
  }
  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => getAllProduct().then(({ data }) => setProducts(data)))
  }
  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product).then(() => getAllProduct().then(({ data }) => setProducts(data)))
  }

  //Category
  const onHandleAddCate = (category: ICategory) => {
    addCategory(category).then(() => getAllCategory().then(({ data }) => setCategory(data)))
  }
  const onHandleRemoveCate = (id: number) => {
    deleteCategory(id).then(() => setCategory(category.filter((item: ICategory) => item.id !== id)))
  }
  //User
  const onHandleAddUser = (user: IUser) => {
    signup(user).then(() => getUser().then(({ data }) => setUser(data)))
  }
  const onHandleRemoveUser = (id: number) => {
    removeUser(id).then(() => setUser(user.filter((item: IUser) => item.id !== id)))
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<HomePage products={products} category={category} />} />
          <Route path='signin' element={<Signin />} />
          <Route path='signup' element={<Signup onAdd={onHandleAddUser} />} />
          <Route path='products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
          <Route path='products/:id' element={<ProductDetailPage products={products} />} />
        </Route>
        <Route path='/admin'  element={<AdminLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='products'>
            <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} category={category} />} />
            <Route path=':id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} products={products} />} />
          </Route>
          <Route path='category'>
            <Route index element={<ListCategoryPage category={category} onRemove={onHandleRemoveCate} />} />
            <Route path='add' element={<AddCategoryPage onAdd={onHandleAddCate} />} />
          </Route>
          <Route path='user'>
            <Route index element={<ListUserPage user={user} onRemove={onHandleRemoveUser} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
