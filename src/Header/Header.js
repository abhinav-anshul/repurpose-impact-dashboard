import React from 'react'
import BrandLogo from '../assets/repurpose-brand-logo.png'
import Switch from '../assets/Switch.svg'
function Header() {
  const BrandLogoStyle = <img style={{ width: '25%' }} src={BrandLogo} />
  const SwitchStyle = <img src={Switch} />

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          justifyContent: 'center',
          marginLeft: '4rem',
          marginRight: '4rem',
          paddingTop: '2rem',
          paddingBottom: '2rem',
        }}
      >
        <div style={{ display: 'flex' }}>{BrandLogoStyle}</div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 2fr 0.5fr',
            justifyItems: 'end',
          }}
        >
          <div
            className='text-darkBlue'
            style={{
              fontWeight: '700',
              fontSize: '1rem',
              paddingTop: '1rem',
            }}
          >
            PROJECT OVERVIEW
          </div>
          <div
            className='text-darkBlue'
            style={{ fontWeight: '700', fontSize: '1rem', paddingTop: '1rem' }}
          >
            MY IMPACT VERIFIED
          </div>
          <div style={{ paddingTop: '1rem' }}>{SwitchStyle}</div>
        </div>
      </div>
    </>
  )
}

export default Header
