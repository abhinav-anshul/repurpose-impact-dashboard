import React from 'react'
import SaahasBanner from '../../src/assets/SaahasBanner.svg'
import SaahasLogo from '../../src/assets/SaahasLogo.svg'

const SaahasBannerStyle = (
  <img
    style={{ width: '70%', border: '8px solid white ' }}
    src={SaahasBanner}
  />
)
const SaahasLogoStyle = <img style={{ width: '30%' }} src={SaahasLogo} />

function Five() {
  return (
    <>
      <div>
        <div className='card bg-lightBlue m-4 py-5 px-8 rounded-lg shadow-2xl'>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '2.5rem',
            }}
          >
            {SaahasLogoStyle}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '1.5rem',
            }}
          >
            {SaahasBannerStyle}
          </div>
          <div
            style={{
              fontSize: '3rem',
              fontWeight: '700',
              letterSpacing: '2px',
              color: 'white',
              textAlign: 'center',
              marginTop: '1.5rem',
            }}
          >
            Saahas Zero Waste
          </div>
          <div
            style={{
              fontSize: '1.4rem',
              color: 'white',
              textAlign: 'center',
              marginTop: '0.8rem',
            }}
          >
            India's first and most renowned Social Enterprise <br /> for Plastic
            Waste Management
          </div>
          <div
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: 'white',
              letterSpacing: '2px',
              textAlign: 'center',
            }}
          >
            Bangalore, India
          </div>
          <hr
            style={{
              marginTop: '2rem',
              color: 'white',
            }}
          />
          <div
            style={{ color: 'white', fontSize: '1.2rem', textAlign: 'center' }}
          >
            Your project transforms waste pickers into Waste Entrepreneurs{' '}
            <br />
            setting up plastic waste collection systems in rural areas <br />{' '}
            where none previously existed.
          </div>
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <button
              style={{
                padding: '1rem',
                color: '#E68140',
                fontWeight: '900',
                letterSpacing: '1px',
                fontSize: '1.2rem',
                borderRadius: '0.7rem',
                outline: 'none',
              }}
              className='btn bg-white'
            >
              VIEW WEBSITE
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Five
