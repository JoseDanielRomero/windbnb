import '../stylesheets/MainContent.css'
import Stay from './Stay';

function MainContent() {
  return (
    <main className='main-container'>
      <div className='title-box'>
        <h2>Stays in Finland</h2>
        <p>12+ stays</p>
      </div>
      <Stay />
    </main>
  )
}

export default MainContent;