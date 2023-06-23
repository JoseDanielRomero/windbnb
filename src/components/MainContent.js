import '../stylesheets/MainContent.css'
import Stay from './Stay';

function MainContent({ stays, setStays, actualCity }) {
  return (
    <main className='main-container'>
      <div className='title-box'>
        <h2>Stays in {actualCity}Finland</h2>
        <p>{stays.length} stays</p>
      </div>
      <Stay 
        stays={stays}
        setStays={setStays}
      />
      
    </main>
  )
}

export default MainContent;