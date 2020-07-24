/* eslint-disable */
import React from 'react'
import Metrics1 from '../assets/plastic.svg'
import Metrics2 from '../assets/co2.svg'
import Metrics3 from '../assets/waste.svg'

const element1 = <img style={{ width: '40%' }} src={Metrics1} />
const element2 = <img style={{ width: '40%' }} src={Metrics2} />
const element3 = <img style={{ width: '40%' }} src={Metrics3} />

var fontFamily = {
  fontFamily: " 'Josefin Sans', sans-serif ",
}

function Three() {
  return (
    <>
      <div
        style={fontFamily}
        className='card bg-white m-4 py-5 px-8 rounded-lg shadow-2xl'
      >
        <div>
          <div style={{ fontSize: '2.5rem', fontWeight: '900' }}>
            Key Impact Metrics
          </div>
          <div
            className='text-grey'
            style={{ fontSize: '1.5rem', fontWeight: '500' }}
          >
            Your Impact at a glance.
          </div>
        </div>
        {/*  */}
        <div
          style={{
            display: 'flex',
            textAlign: 'center',
            marginTop: '2rem',
            marginBottom: '2rem',
          }}
        >
          <div style={{ padding: '1rem 4rem 1rem 4rem' }}>
            <div style={{ fontSize: '1.8rem', lineHeight: '110%' }}>
              Plastic Items Intercepted
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '1rem',
              }}
            >
              {element1}
            </div>
          </div>
          <div style={{ padding: '1rem 4rem 1rem 4rem' }}>
            <div
              style={{
                fontSize: '1.8rem',
                lineHeight: '110%',
              }}
            >
              CO2 Emissions Avoided
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '1rem',
              }}
            >
              {element2}
            </div>
          </div>
          <div style={{ padding: '1rem 4rem 1rem 4rem' }}>
            <div style={{ fontSize: '1.8rem', lineHeight: '110%' }}>
              Waste Workers Empowered
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '1rem',
              }}
            >
              {element3}
            </div>
          </div>
        </div>
        {/*  */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            textAlign: 'center',
            gridGap: '7rem',
            marginLeft: '4rem',
            marginRight: '4rem',
          }}
        >
          <div
            className='bg-lightYellow'
            style={{
              height: '12rem',
              borderRadius: '1rem',
            }}
          >
            <div
              style={{ fontSize: '5rem', color: 'white', fontWeight: 'bold' }}
            >
              1.1 <span style={{ fontSize: '3rem' }}>M</span>
            </div>
            <div
              style={{ color: 'white', fontWeight: 'bold', fontSize: '2rem' }}
            >
              Items
            </div>
          </div>
          <div
            className='bg-darkBlue'
            style={{
              height: '12rem',
              borderRadius: '1rem',
            }}
          >
            <div
              style={{ fontSize: '5rem', color: 'white', fontWeight: 'bold' }}
            >
              95.1 <span style={{ fontSize: '3rem' }}>K</span>
            </div>
            <div
              style={{ color: 'white', fontWeight: 'bold', fontSize: '2rem' }}
            >
              Kgs
            </div>
          </div>
          <div
            className='bg-darkYellow'
            style={{
              height: '12rem',
              borderRadius: '1rem',
            }}
          >
            <div
              style={{ fontSize: '5rem', color: 'white', fontWeight: 'bold' }}
            >
              114
            </div>
            <div
              style={{ color: 'white', fontWeight: 'bold', fontSize: '2rem' }}
            >
              Workers
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Three
