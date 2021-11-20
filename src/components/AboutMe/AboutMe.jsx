import React from 'react';
import './AboutMe.css'
import photo from '../../images/student-photo.jpg';
import Portfolio from "../Portfolio/Portfolio";

function AboutMe(props) {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__wrap">
          <div className="about-me__description">
            <div className="about-me__description">
              <h3 className="about-me__name">Родион</h3>
              <p className="about-me__profession">Фронтенд-разработчик, 18 лет</p>
              <p className="about-me__text">Я живу в городе Караганда, Казахстан. Увлекаюсь сборкой компьютеров, и ездой на велосипеде.
                С начала 2021 года я начал свой путь как Frontend разработчик. В течении учебы, я участвовал в разработке сайта проекта брата, для прокачки своих навыков. И так-же принимал участие в конкурсе по веб-разработке, по всей стране, и занял 3 место. Я очень люблю, то чем занимаюсь сейчас!</p>
            </div>
            <div className="about-me__links">
              <a className="about-me__link" href="https://t.me/rodion914" target="_blank"rel="noreferrer">Telegram</a>
              <a className="about-me__link" href="https://github.com/oldmilky" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          <img className="about-me__photo" src={photo} alt="Фото студента" />
        </div>
        <Portfolio/>
      </div>
    </section>
  );
}

export default AboutMe;