import React from 'react'
import BrandLogo from '../assets/repurpose-brand-logo.png'
function Header() {
  const BrandLogoStyle = <img style={{ width: '30%' }} src={BrandLogo} />

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
            style={{ fontWeight: '700', fontSize: '1rem' }}
          >
            PROJECT OVERVIEW
          </div>
          <div
            className='text-darkBlue'
            style={{ fontWeight: '700', fontSize: '1rem' }}
          >
            MY IMPACT VERIFIED
          </div>
          <div>(icon)</div>
        </div>
      </div>
    </>
  )
}

export default Header
