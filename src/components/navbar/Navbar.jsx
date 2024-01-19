import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Sidebar */}
      <div className='wrapper'>
        <span>Jackson Mseven</span>
        <div className='social'>
          <a href='#'>
            <img src='public/facebook.png' />
          </a>
          <a href='#'>
            <img src='public/instagram.png' />
          </a>
          <a href='#'>
            <img src='public/youtube.png' />
          </a>
          <a href='#'>
            <img src='public/dribbble.png' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
