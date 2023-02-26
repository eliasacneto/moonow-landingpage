import '../Subscribe/Subscribe.css'
import Hero from '../../assets/images/hero-ilustration.png'
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export function Subscribe() {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const MySwal = withReactContent(Swal)

  const formValidation = () => {
    if (fullName === '') {
      alert('Preencha o campo Nome!')
      return false
    }
    if (email === '') {
      alert('Preencha o campo Email!')
      return false
    }

    setMsg('')
    // alert(msg)

  }

  return (
    <>

      <main>
        <section className='left-side'>
          <h1 className='title'>Inscreva-se e viaje para a lua gratuitamente</h1>

          <form id='form'>

            <input className='input-form' type='text' id='fullname' name='fullname' placeholder='Nome Completo' value={fullName} onChange={(e) => {
              setFullName(e.target.value)
            }
            } />


            <input className='input-form' type='email' id='email' name='email' placeholder='Email' value={email} onChange={(e) => {
              setEmail(e.target.value)
            }
            } />


            <div className='button-group'>
              <button className='go-moon' onClick={formValidation}>Quero ir pra lua!</button>
              <button className='more-info' id='more-info'>Mais informações</button>
            </div>

          </form>


        </section>
        <section className='right-side'>
          <img className='image-hero' src={Hero} alt='hero-illustration' />
        </section>
      </main>


    </>
  );
}

// {msg}