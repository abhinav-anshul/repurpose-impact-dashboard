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
              <div className='card bg-yellow-900 h-auto rounded-full'>
                <p>line</p>
              </div>
              <div className='card bg-red-500'>
                <div className='text-6xl'>Start Date</div>
                <p>10/10/2019</p>
              </div>
            </div>
            <div className='flex'>
              <div className='card bg-yellow-100 h-auto rounded-full'>
                <p>line</p>
              </div>
              <div className='card bg-red-500'>
                <div className='text-6xl'>End Date</div>
                <p>10/10/2019</p>
              </div>
            </div>

            {/* //// */}
          </div>
          <div className='bg-red-300'>
            <p>pro</p>
            <p>total</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default One
