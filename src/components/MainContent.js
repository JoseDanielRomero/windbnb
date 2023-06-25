import '../stylesheets/MainContent.css'
import Stay from './Stay';

function MainContent({ stays, setStays, actualCity }) {
  return (
    <main className='main-container'>
      <div className='title-box'>
        <h2 className='title-box-location-stays'>Stays in {actualCity}Finland</h2>
        <p className='title-box-number-stays'>{stays.length} stays</p>
      </div>
      <Stay 
        stays={stays}
        setStays={setStays}
      />
      
    </main>
  )
}

export default MainContent;