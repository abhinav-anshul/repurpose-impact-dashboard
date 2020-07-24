import React from 'react'
import Header from './Header/Header'
import One from './CardOne/One'
import Two from './CardOne/Two'
import Three from './CardOne/Three'
import Four from './CardOne/Four'
import Five from './CardOne/Five'
import Six from './CardOne/Six'
import Login from './Login/Login'
import LoginNew from './Login/LoginNew'
function Layout() {
  return (
    <React.Fragment>
      <Header />
      <div className='bg-mainBackground'>
        <One />
        <Two />
        <Three />
        <Four />
        <Five />
        <Six />
      </div>
    </React.Fragment>
  )
}

export default Layout
