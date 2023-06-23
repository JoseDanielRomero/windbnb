import '../stylesheets/Stay.css'
import star from '../images/star.png'

function Stay({ stays, setStays }) {
  return (
    <div className='stays-list-container'>
      {stays.map(stay => {

        return (

          <article className='stay-container'>
            <img
              className='stay-photo'
              src={stay.photo}
            />
            <div className='stay-subtitle-box'>
              <div className='stay-subtitle-box-left'>
                <h6 className='super-host-label'>SUPER HOST</h6>
                <p className='stay-type'>{stay.type}</p>
              </div>
              <div className='stay-subtitle-box-right'>
                <img src={star} className='star-icon' />
                <p className='stay-rating'>{stay.rating}</p>
              </div>
            </div>
            <h4 className='stay-title'>{stay.title}</h4>
          </article>
          
        )


      })}

    </div>
  )
}

export default Stay;