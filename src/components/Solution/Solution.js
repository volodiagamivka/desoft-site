import React from 'react';
import './Solution.css';
import Phone from '../../assets/images/phone.png';

const Solution = () => {
  return (
    <section className="project-info-section">
      <div className="project-info-container">
        <h2>Про наш проект: інтерактивне відкриття історії України</h2>
        <p>
          вфшцмолпкзгшяиьедркчтбнужшапщвблоцксмп
          вфшцмолпкзгшяиьедркчтбнужшапщвблоцксмпд
          вфшцмолпкзгшяиьедркчтбнужшапщвблоцксмп
          вфшцмолпкзгшяиьедркчтбнужшапщвблоцксмп
          вфшцмолпкзгшяиьедркчтбнужшапщвблоцксмпд
          вфшцмолпкзгшяиьедркчтбнужшапщвблоцксмп
          вфшцмолпкзгшяиьедркчтбнужшапщвблоцксмпдд
          вфшцмолпкзгшяиьедркчтбнужшапщвблоцксмпд
          вфшцмолпкзгшяиьедркчтбнужшапщвблоцксмп
          вфшцмолпкзгшяиьедркчтбнужшапщвблоцксмпд
        </p>
      </div>
      <div className="project-image-container">
        <img src={Phone} alt="Phone" className="project-image" />
      </div>
    </section>
  );
};

export default Solution;
