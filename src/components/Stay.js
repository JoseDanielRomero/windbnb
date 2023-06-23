import '../stylesheets/Stay.css'
import star from '../images/star.png'
import githubIcon from '../images/github.png'

function Stay({ stays }) {  

  const rowsNumber = () => {
    if (stays.length < 4) {
      return 'stays-list-container one-row';
    } else if (stays.length > 3 && stays.length < 7) {
      return 'stays-list-container two-rows'
    } else if (stays.length > 6 && stays.length < 10) {
      return 'stays-list-container three-rows'
    } else if (stays.length > 9 && stays.length < 13) {
      return 'stays-list-container four-rows'
    } else if (stays.length > 12 && stays.length < 16) {
      return 'stays-list-container five-rows'
    } 
  }

  return (
    <div className={rowsNumber()}>
      {stays.map(stay => {

        const validateSuperHost = stay.superHost == true ? 'super-host-label' : 'super-host-label off';

        return (

          <article className='stay-container'>
            <img
              className='stay-photo'
              src={stay.photo}
            />
            <div className='stay-subtitle-box'>
              <div className='stay-subtitle-box-left'>
                <h6 className={validateSuperHost}>SUPER HOST</h6>
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
      <footer className='footer'>created by José Daniel Romero <a title='Github page' href='https://github.com/JoseDanielRomero' target='_blank'><img src={githubIcon} className='github-icon' alt='Github page'/></a> - devChallenges.io</footer>
    </div>
  )
}

export default Stay;