import React from 'react'

function One() {
  return (
    <>
      <div className='card bg-red-900 m-4 py-5 px-8 rounded-lg shadow-2xl'>
        <div className='text-3xl font-bold tracking-wider'>
          XX goes PlasticNeutral
        </div>
        <div className='text-lg'>Your PlasticNeutral Projects at a glance.</div>

        <div className='flex flex-1'>
          <div className='bg-red-200'>
            <div className='flex'>
              <div className=''>
                <p
                  style={{
                    padding: '5px',
                    width: '20px',
                    height: '60px',
                    background: '#456',
                    borderRadius: '10rem',
                  }}
                  className=''
                ></p>
              </div>
              <div className='card bg-red-500'>
                <div className='text-xl'>Start Date</div>
                <p>10/10/2019</p>
              </div>
            </div>
            <div className='flex'>
              <div className=''>
                <p
                  style={{
                    padding: '5px',
                    width: '20px',
                    height: '60px',
                    background: '#456',
                    borderRadius: '10rem',
                  }}
                  className=''
                ></p>
              </div>
              <div className='card bg-red-500'>
                <div className='text-xl'>End Date</div>
                <p>10/10/2019</p>
              </div>
            </div>

            {/* //// */}
          </div>
          <div className='bg-red-300'>
            <div className='bg-red-200'>
              <div className='flex'>
                <div className=''>
                  <p
                    style={{
                      padding: '5px',
                      width: '20px',
                      height: '60px',
                      background: '#456',
                      borderRadius: '10rem',
                    }}
                    className=''
                  ></p>
                </div>
                <div className='card bg-red-500'>
                  <div className='text-xl'>Project Partners</div>
                  <ul>
                    <li>Waste Ventures India</li>
                    <li>Saahas</li>
                  </ul>
                </div>
              </div>
              <div className='flex'>
                <div className=''>
                  <p
                    style={{
                      padding: '5px',
                      width: '20px',
                      height: '60px',
                      background: '#456',
                      borderRadius: '10rem',
                    }}
                  ></p>
                </div>
                <div className='card bg-red-500'>
                  <div className='text-xl'>Total Plastic Offset</div>
                  <p>25,100 Kgs</p>
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
