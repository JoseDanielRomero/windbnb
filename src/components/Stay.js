import '../stylesheets/Stay.css'
import star from '../images/star.png'

function Stay() {
  return (
    <article className='stay-container'>
      <img
        className='stay-photo'
        src='https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80'
      />
      <div className='stay-subtitle-box'>
        <div className='stay-subtitle-box-left'>
          <h6 className='super-host-label'>SUPER HOST</h6>
          <p className='stay-type'>Entire aparment. 2 beds.</p>
        </div>
        <div className='stay-subtitle-box-right'>
          <img src={star} className='star-icon' />
          <p className='stay-rating'>4.40</p>
        </div>
      </div>
      <h4 className='stay-title'>Lovely Studio near Railway Station</h4>
    </article>
  )
}

export default Stay;