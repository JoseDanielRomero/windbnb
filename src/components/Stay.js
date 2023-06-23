import '../stylesheets/Stay.css'
import star from '../images/star.png'

function Stay({ stays, setStays }) {
  return (
    <article className='stay-container'>
      <img
        className='stay-photo'
        src={stays[2].photo}
      />
      <div className='stay-subtitle-box'>
        <div className='stay-subtitle-box-left'>
          <h6 className='super-host-label'>SUPER HOST</h6>
          <p className='stay-type'>{stays[2].type}</p>
        </div>
        <div className='stay-subtitle-box-right'>
          <img src={star} className='star-icon' />
          <p className='stay-rating'>{stays[2].rating}</p>
        </div>
      </div>
      <h4 className='stay-title'>{stays[2].title}</h4>
    </article>
  )
}

export default Stay;