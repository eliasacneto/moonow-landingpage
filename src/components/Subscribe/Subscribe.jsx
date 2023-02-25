import '../Subscribe/Subscribe.css'
import Hero from '../../assets/images/hero-ilustration.png'
export function Subscribe(){
  return(
  <main>
    <section className='left-side'>
      <h1 className='title'>Inscreva-se e viaje para a lua gratuitamente</h1>

      <form>
        <input className='input-form' type='text' id='fullname' name='fullname' placeholder='Nome Completo' required />

        <input className='input-form' type='email' id='email' name='email' placeholder='Email' />

      </form>

      <div className='button-group'>
        <button className='go-moon'>Quero ir pra lua!</button>
        <button className='more-info'>Mais informações</button>
      </div>
    </section>
    <section className='right-side'>
      <img src={Hero} alt='hero-illustration' />
    </section>
  </main>);
}