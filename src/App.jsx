import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
    <div className='max-w-screen-xl mx-auto px-8 py-6'>
      <Header></Header>
      <div className=''>
            <Blogs></Blogs>
      </div>
    </div>
    </>
  )
}

export default App
