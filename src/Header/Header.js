import React from 'react'
function Header() {
  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          justifyContent: 'center',
          marginLeft: '4rem',
          marginRight: '4rem',
          paddingTop: '2rem',
          paddingBottom: '2rem',
        }}
      >
        <div style={{ display: 'flex' }}>rePurpose Icon</div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 2fr 0.5fr',
            justifyItems: 'end',
          }}
        >
          <div>PROJECT OVERVIEW</div>
          <div>MY IMPACT VERIFIED</div>
          <div>(icon)</div>
        </div>
      </div>
    </>
  )
}

export default Header
