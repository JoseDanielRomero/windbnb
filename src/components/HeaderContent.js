import '../stylesheets/HeaderContent.css'
import logo from '../images/logo.svg'


function HeaderContent({ stays, setStays, search, setSearch, setActualCity, initialStays }) {

  const handleChangeInput = (event) => {
    setSearch(event.target.value)
    setStays(initialStays)
    setActualCity('')
  }

  const handleDisabled = () => {
    if (search.length == 0) {
      return true
    } else {
      return false
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstLetter = search.charAt(0)
    const firstLetterCap = firstLetter.toUpperCase()
    const remainingLetters = search.slice(1)  
    const capitalizedSearch = firstLetterCap + remainingLetters
    const copyStays = [...stays]
    const searchResults = []

    for (let i=0; i<copyStays.length; i++) {
      if (copyStays[i].city.includes(capitalizedSearch)) {
        let removed = copyStays.splice(i, 1);
        searchResults.push(...removed)
        i = i-1;
      }
    }

    if (searchResults.length > 0) {
      const searchCity = searchResults[0].city + ', '
      setActualCity(searchCity)
      setSearch('')
      setStays(searchResults)

    } else {
      setActualCity('')
      setSearch('')
      setStays(searchResults)
    }
  }

  return (
    <header>
      <img className='logo' src={logo}/>
      <form className='form-search' onSubmit={handleSubmit}>
        <input
          type='text'
          className='input-search'
          spellCheck='false'
          autoComplete='none'
          placeholder='Search by city'
          value={search}
          onChange={handleChangeInput}
        />
        <button type='submit' disabled={handleDisabled()} className='button-search'>
          <div className='search-icon'>
          </div>
        </button>
      </form>
    </header>
  )
}

export default HeaderContent;