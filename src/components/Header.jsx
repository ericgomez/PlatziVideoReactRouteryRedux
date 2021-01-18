import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import gravatar from '../utils/gravatar'
import '../assets/styles/components/Header.scss'

import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'

const Header = props => {
  const { user } = props
  const hasUser = Object.keys(user).length > 0 //Validacion para saber su user tiene elementos
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>

          {hasUser ? (//Si hasUSer es verdadero mandamos al imagen del Gravatar 
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (//en caso de que sea falso mandamos una imagen por defecto
            <img src={userIcon} alt='User' />
          )}

          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <Link to='/register'>Cuenta</Link>
          </li>
          <li>
            <Link to='/login'>Iniciar sesión</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Header)
