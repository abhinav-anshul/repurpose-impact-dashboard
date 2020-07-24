import React from 'react'
import WasteVentures from '../assets/WasteVentures.svg'
import SaahasLogo from '../assets/SaahasLogo.svg'

const WasteVenturesStyle = (
  <img
    style={{
      width: '30%',
      marginTop: '1rem',
      marginBottom: '1rem',
    }}
    src={WasteVentures}
  />
)

const SaahasLogoStyle = (
  <img
    style={{
      width: '40%',
      marginTop: '2rem',
      marginBottom: '2rem',
    }}
    src={SaahasLogo}
  />
)

function Six() {
  return (
    <>
      <div
        style={{ display: 'flex', justifyContent: 'center' }}
        className='card bg-lightYellow m-4 py-5 px-8 rounded-lg shadow-2xl'
      >
        {WasteVenturesStyle}
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center' }}
        className='card bg-white m-4 py-5 px-8 rounded-lg shadow-2xl'
      >
        {SaahasLogoStyle}
      </div>
    </>
  )
}

export default Six
