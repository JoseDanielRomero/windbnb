import '../stylesheets/HeaderContent.css'
import logo from '../images/logo.svg'

function HeaderContent() {
  return (
    <header>
      <img className='logo' src={logo}/>
      <form className='form-search'>
        <input type='text' className='input-search' spellCheck='false' autoComplete='none' placeholder='Search by city'/>
        <button type='submit' className='button-search'>
          <div className='search-icon'>
          </div>
        </button>
      </form>
    </header>
  )
}

export default HeaderContent;