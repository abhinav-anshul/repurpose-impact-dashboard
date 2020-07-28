import React from 'react'
import Background from '../assets/loginbackground.jpg'
import BrandLogo from '../assets/repurpose-brand-logo.png'

var backgroundStyle = {
  width: '100%',
  height: '100vh',
  backgroundImage: 'url(' + Background + ')',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

var fontFamily = {
  fontFamily: " 'Josefin Sans', sans-serif ",
}

function LoginNew() {
  return (
    <>
      <div style={fontFamily} className='container-lg mx-auto'>
        <div style={backgroundStyle}>
          <div className='card  absolute top-1/2 left-1/2 m-0 transform -translate-y-1/2 transform -translate-x-1/2 '>
            <div className='card bg-white rounded-lg p-10'>
              <div
                style={{
                  width: '40%',
                  display: 'block',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                }}
              >
                <img alt='repurpose-logo' src={BrandLogo}></img>
              </div>
              <h1 className=' text-grey text-center my-5 text-2xl'>
                Welcome to the rePurpose Plastic Neutral Dashboard! Please sign
                in to continue.
              </h1>

              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  <input
                    placeholder='Username'
                    style={{
                      backgroundColor: 'white',
                      padding: ' 0.75rem 7rem',
                      borderRadius: '0.5rem',
                      textAlign: 'center',
                      border: '2px solid black',
                    }}
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  <input
                    placeholder='Password'
                    style={{
                      padding: ' 0.75rem 7rem',

                      borderRadius: '0.5rem',
                      textAlign: 'center',
                      border: '2px solid black',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>
              <div className='text-center'>
                <button
                  style={{ fontWeight: '900', outline: 'none' }}
                  className='bg-lightBlue rounded-lg px-40 py-3 font-extrabold text-white  '
                >
                  SIGN IN
                </button>
              </div>
            </div>
            <p className='text-center text-white p-4'>Forgot Password?</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginNew
