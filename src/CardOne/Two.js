/* eslint-disable */
import React from 'react'
import QuestionMark1 from '../assets/bar-question-mark1.svg'
import QuestionMark2 from '../assets/bar-question-mark2.svg'
import QuestionMark3 from '../assets/bar-question-mark3.svg'
var fontFamily = {
  fontFamily: " 'Josefin Sans', sans-serif ",
}

const element = (
  <img
    style={{
      width: '50%',
      display: 'flex',

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
    src={QuestionMark1}
  />
)

function Two() {
  return (
    <>
      <div style={fontFamily} className=' m-4 py-5 px-8  '>
        <div>
          <div style={{ fontSize: '2.5rem', fontWeight: '900' }}>
            Project Status
          </div>
          <div
            className='text-grey'
            style={{ fontSize: '1.5rem', fontWeight: '500' }}
          >
            Your PlasticNeutral projects are currently underway.
          </div>
        </div>
        {/* ///// */}
        <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <div>
            <div style={{ display: 'flex' }}>
              <div className='text-slider100'>Offset Projects Kickstarted</div>
              <div
                style={{
                  marginLeft: '8px',
                }}
              >
                {element}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div
              style={{ width: '80%', borderRadius: '0.4rem' }}
              className='bg-sliderBackground'
            >
              <div
                className='bg-lightYellow'
                style={{
                  height: '3rem',
                  width: '72% ',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '900',
                  fontSize: '1.8rem',
                  borderTopLeftRadius: '0.4rem',
                  borderBottomLeftRadius: '0.4rem',
                }}
              >
                72%
              </div>
            </div>
            <div
              className='text-lightYellow'
              style={{
                display: 'flex',
                padding: '0rem',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: '2rem',
                marginRight: '2rem',
                fontWeight: '900',
                fontSize: '2rem',
              }}
            >
              348 Kgs
            </div>
          </div>
        </div>

        {/*  */}

        <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <div>
            <div style={{ display: 'flex' }}>
              <div className='text-slider200'>
                Plastic Intercepted & Recycled
              </div>
              <div
                style={{
                  marginLeft: '8px',
                }}
              >
                {element}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div
              style={{ width: '80%', borderRadius: '0.4rem' }}
              className='bg-sliderBackground'
            >
              <div
                className='bg-slider200'
                style={{
                  height: '3rem',
                  width: '60% ',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '900',
                  fontSize: '1.8rem',
                  borderTopLeftRadius: '0.4rem',
                  borderBottomLeftRadius: '0.4rem',
                }}
              >
                60%
              </div>
            </div>
            <div
              className='text-slider200'
              style={{
                display: 'flex',
                padding: '0rem',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: '2rem',
                marginRight: '2rem',
                fontWeight: '900',
                fontSize: '2rem',
              }}
            >
              418 Kgs
            </div>
          </div>
        </div>

        {/*  */}
        <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <div>
            <div style={{ display: 'flex' }}>
              <div className='text-slider300'>Credits Verified & Retired</div>
              <div
                style={{
                  marginLeft: '8px',
                }}
              >
                {element}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div
              style={{ width: '80%', borderRadius: '0.4rem' }}
              className='bg-sliderBackground'
            >
              <div
                className='bg-darkYellow'
                style={{
                  height: '3rem',
                  width: '48% ',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '900',
                  fontSize: '1.8rem',
                  borderTopLeftRadius: '0.4rem',
                  borderBottomLeftRadius: '0.4rem',
                }}
              >
                48%
              </div>
            </div>
            <div
              className='text-darkYellow'
              style={{
                display: 'flex',
                padding: '0rem',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: '2rem',
                marginRight: '2rem',
                fontWeight: '900',
                fontSize: '2rem',
              }}
            >
              522 Kgs
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Two
