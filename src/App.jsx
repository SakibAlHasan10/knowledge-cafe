import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'
import SideBar from './Components/SideBar/SideBar'

function App() {

  return (
    <>
    <div className='max-w-screen-xl mx-auto px-8 py-6'>
      <Header></Header>
      <div>
        <div>
            <Blogs></Blogs>
        </div>
        <div>
            <SideBar></SideBar>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
