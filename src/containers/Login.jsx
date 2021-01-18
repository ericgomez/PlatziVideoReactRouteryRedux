import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginRequest } from '../actions'
import Header from '../components/Header'

import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'
import '../assets/styles/components/Login.scss'

const Login = props => {
  const [form, setValues] = useState({
    email: ''
  })

  //Obtenemos los datos capturados
  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  //Mostramos el contenido en este caso en la consola
  const handleSubmit = event => {
    event.preventDefault()
    props.loginRequest(form)
    props.history.push('/')
  }

  return (
    <>
      <Header isLogin />
      <section className='login'>
        <section className='login__container'>
          <h2>Inicia sesión</h2>
          <form className='login__container--form' onSubmit={handleSubmit}>
            <input
              name='email'
              className='input'
              type='text'
              placeholder='Correo'
              onChange={handleInput}
            />
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Contraseña'
              onChange={handleInput}
            />
            <button className='button'>Iniciar sesión</button>
            <div className='login__container--remember-me'>
              <label htmlFor='cbox1'>
                <input
                  type='checkbox'
                  id='cbox1'
                  defaultValue='first_checkbox'
                />
                Recuérdame
              </label>
              <a href='/'>Olvidé mi contraseña</a>
            </div>
          </form>
          <section className='login__container--social-media'>
            <div>
              <img src={googleIcon} alt='iconGoogle' />
              Inicia sesión con Google
            </div>
            <div>
              <img src={twitterIcon} alt='iconTwitter' />
              Inicia sesión con Twitter
            </div>
          </section>
          <p className='login__container--register'>
            No tienes ninguna cuenta {' '}
            <Link to='/register'>Regístrate</Link>
          </p>
        </section>
      </section>
    </>
  )
}

//Traemos la informacion del login
const mapDispatchToProps = {
  loginRequest
}

export default connect(null, mapDispatchToProps)(Login)
