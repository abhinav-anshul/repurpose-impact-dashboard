import React from 'react'
var fontFamily = {
  fontFamily: " 'Josefin Sans', sans-serif ",
}

function One() {
  return (
    <>
      <div
        style={fontFamily}
        className='card bg-white mx-4  py-5 px-8 rounded-lg shadow-2xl'
      >
        <div style={{ fontSize: '58px' }} className=' font-bold tracking-wider'>
          XX goes PlasticNeutral
        </div>
        <div style={{ fontSize: '38px' }} className='text-lg'>
          Your PlasticNeutral Projects at a glance.
        </div>

        <div className='flex flex-1'>
          <div className='bg-red-200'>
            <div
              style={{
                // backgroundColor: 'red',
                padding: '0rem',
                width: '398px',
                height: '215px',
              }}
              className='flex'
            >
              <div className=''>
                <p
                  style={{
                    width: '52px',
                    height: '215px',
                    borderRadius: '10rem',
                  }}
                  className='bg-darkYellow'
                ></p>
              </div>
              <div
                style={{ paddingLeft: '2rem', paddingTop: '2rem' }}
                className='card bg-red-500'
              >
                <div
                  style={{ fontSize: '33px' }}
                  className='text-xl text-grey '
                >
                  Start Date
                </div>
                <p className='text-darkYellow' style={{ fontSize: '58px' }}>
                  10/10/2019
                </p>
              </div>
            </div>
            <div
              style={{
                // backgroundColor: 'yellow',
                padding: '0rem',
                width: '398px',
                height: '215px',
              }}
              className='flex'
            >
              <div className=''>
                <p
                  style={{
                    width: '52px',
                    height: '215px',
                    borderRadius: '10rem',
                  }}
                  className='bg-lightYellow'
                ></p>
              </div>
              <div
                style={{ paddingTop: '2rem', paddingLeft: '2rem' }}
                className='card bg-red-500'
              >
                <div style={{ fontSize: '33px' }} className='text-xl text-grey'>
                  End Date
                </div>
                <p className='text-lightYellow' style={{ fontSize: '58px' }}>
                  10/10/2019
                </p>
              </div>
            </div>

            {/* //// */}
          </div>
          <div className='bg-red-300'>
            <div className='bg-red-200'>
              <div
                style={{
                  // backgroundColor: 'pink',
                  padding: '0rem',
                  width: '745px',
                  height: '215px',
                }}
                className='flex'
              >
                <div className=''>
                  <p
                    style={{
                      width: '52px',
                      height: '215px',
                      borderRadius: '10rem',
                    }}
                    className='bg-darkBlue'
                  ></p>
                </div>
                <div
                  style={{
                    paddingLeft: '2rem',
                    paddingTop: '0.8rem',
                    lineHeight: '4rem',
                  }}
                  className='card bg-red-500'
                >
                  <div style={{ fontSize: '33px' }} className='text-grey'>
                    Project Partners
                  </div>
                  <div style={{ fontSize: '58px' }}>
                    <ul>
                      <li>Waste Ventures India</li>
                      <li>Saahas</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                style={{
                  // backgroundColor: 'green',
                  padding: '0rem',
                  width: '745px',
                  height: '215px',
                }}
                className='flex'
              >
                <div className=''>
                  <p
                    className='bg-lightBlue'
                    style={{
                      width: '52px',
                      height: '215px',
                      borderRadius: '10rem',
                    }}
                  ></p>
                </div>
                <div
                  style={{ paddingLeft: '2rem', paddingTop: '2rem' }}
                  className='card '
                >
                  <div style={{ fontSize: '33px' }} className='text-grey'>
                    Total Plastic Offset
                  </div>
                  <p style={{ fontSize: '58px' }}>25,100 Kgs</p>
                </div>
              </div>

              {/* //// */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default One
