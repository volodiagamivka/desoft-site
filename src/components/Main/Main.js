import React from 'react';
import './Main.css'; // файл для стилів
import MainPhoto from '../../assets/images/main-photo.png'; // Ваше зображення

const Main = () => {
  return (
    <main className="main-container">
      {/* Вставляємо зображення */}
      <img src={MainPhoto} alt="Background" className="background-image" />
      <div className="text-overlay">
        <h1>Інтерактивні екскурсії по</h1>
        <h1>пам’ятках та об’єктах України</h1>
      </div>
    </main>
  );
};

export default Main;
