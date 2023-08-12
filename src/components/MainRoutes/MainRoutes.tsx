import { Routes, Route } from 'react-router-dom'
import {
  Contact,
  GoFoodPage,
  GrabFood,
  Home,
  Landing,
  LandingLoading,
  LocationPage,
  NotFound,
  OrderPage,
  ShopeeFood,
} from 'pages'
import { Eatery } from 'pages/Eatery'

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route path='/' element={<Landing />} />
          <Route path='/Loading' element={<LandingLoading />} />
          {/* <Route path='home' element={<Home />} />
          <Route path='menuSection' element={<Home/>}/>
          <Route path='locations' element={<LocationPage />} />
          <Route path='contact' element={<Contact />} />
          <Route path='order' element={<OrderPage />} />
          <Route path='gofood' element={<GoFoodPage />} />
          <Route path='grabfood' element={<GrabFood />} />
          <Route path='shopeefood' element={<ShopeeFood />} />
          <Route path='eatery' element={<Eatery />} /> */}
        </Route>
        {/** Permission denied route */}
        <Route path='/denied' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default MainRoutes
