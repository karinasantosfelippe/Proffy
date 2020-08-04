import React from 'react';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/68240776?s=460&u=ea2234e7feadd54cbea17f607e330b359406cd07&v=4" alt="Karina"/>
        <div>
          <strong>Karina Felippe</strong>
          <span>Matemática</span>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /><br />
            Esse incidunt rerum illo sequi quis, suscipit aliquam recusandae corporis! Expedita cum maiores adipisci doloremque impedit sint id voluptatum aspernatur non aperiam!
          </p>
        </div>
      </header>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 120,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem