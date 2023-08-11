import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Provider } from 'react-redux'
import './App.css'
import MainRoutes from 'components/MainRoutes/MainRoutes'
import { Footer } from 'components/Footer'
import { store } from 'utils/redux/store'


function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <BrowserRouter>
          <NavBar />
          <MainRoutes />
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App