import React from 'react';
import './Info.css';
import Icon1 from '../../assets/images/icon1.svg'; // Іконка 1
import Icon2 from '../../assets/images/icon2.svg'; // Іконка 2

const Info = () => {
  return (
    <section className="technology-section">
      <h2>Історія Завдяки Новітнім Технологіям – Легко!</h2>
      <div className="cards-container">
      <div className="card">
        <div className="icon-container">
            <img src={Icon1} alt="Іконка інтеграції" />
        </div>
        <div className="card-content">
            <h3>Інтеграція минулого в сучасне</h3>
        <p>
            Текстовий опис, який пояснює, як інтеграція минулого допомагає створити
             нове майбутнє за допомогою сучасних технологій.
        </p>
  </div>
</div>


        <div className="card">
          <div className="icon-container">
            <img src={Icon2} alt="Іконка інформації" />
          </div>
          <div className="card-content">

          <h3>Миттєва та достовірна інформація</h3>
          <p>
            Опис того, як технології дозволяють швидко отримувати достовірну
            інформацію в будь-який момент часу.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Info;
