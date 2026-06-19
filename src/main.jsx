import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const assets = "/assets";

const achievements = [
  "Вице-чемпионка мира и чемпионка России по фитнес-бикини",
  "Профессиональный фитнес-тренер с опытом более 15 лет",
  "Мама 2-х детей. Всего за 100 дней после первых родов похудела на 20 кг и вернулась в прежнюю форму",
  "Автор первых в России масштабных марафонов стройности",
  "Чемпионка России и мира по жиму лёжа",
];

const aboutPhotos = Array.from(
  { length: 9 },
  (_, index) => `${assets}/about-${index + 1}.png`,
);

const mediaPhotos = Array.from(
  { length: 4 },
  (_, index) => `${assets}/media-${index + 1}.png`,
);

function PinkButton({ children, wide = false, onClick }) {
  return (
    <button className={`pink-button${wide ? " pink-button--wide" : ""}`} onClick={onClick}>
      {children}
    </button>
  );
}

function Hero({ onChoose }) {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__copy">
          <h1>
            Приведите тело в
            <br />
            форму с чемпионкой
            <br />
            Катей Усмановой
          </h1>
          <p className="hero__subtitle">
            без диет, голода и запретов
            <br />
            с пользой для здоровья
          </p>
          <p className="hero__description">
            Похудеть, подтянуть попу и живот, набрать форму
            <br className="desktop-break" />
            в зале, восстановиться после родов — тренировки
            <br className="desktop-break" />
            и питание под вашу цель
          </p>
          <PinkButton onClick={onChoose}>Выбрать программу</PinkButton>
          <p className="hero__notice">Для корректной работы сайта отключите VPN</p>
        </div>
        <div className="hero__visual">
          <img src={`${assets}/hero.png`} alt="Катя Усманова с гантелями" />
        </div>
      </div>
    </section>
  );
}

function About() {
  const railRef = useRef(null);

  const slideNext = () => {
    railRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="about">
      <div className="section-copy">
        <h2>
          Доверьте свое тело чемпионке
          <br />
          фитнес-бикини и тренеру <span>Кате Усмановой</span>
        </h2>
        <p className="section-copy__lead">
          С 2015 года создаёт топовые тренировки для идеальных ягодиц, плоского живота и
          стройности без жёстких диет.
          <br />
          Уже более 580 000+ участниц тренируются с Катей, ведь она:
        </p>
      </div>

      <div className="about-card">
        <div className="achievements">
          {achievements.map((item) => (
            <div className="achievement" key={item}>
              <img src={`${assets}/check.png`} alt="" aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="photo-rail" ref={railRef} aria-label="Фотографии Кати Усмановой">
          {aboutPhotos.map((photo, index) => (
            <img key={photo} src={photo} alt={`Катя Усманова — фото ${index + 1}`} />
          ))}
        </div>
        <button className="rail-hint" type="button" onClick={slideNext}>
          Листайте вправо
          <img src={`${assets}/arrow.png`} alt="" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

function Media({ onReturn }) {
  return (
    <section className="media" id="form">
      <div className="section-copy">
        <h2>
          Кате доверяют миллионы. <span>Её методы работают</span> — и об этом говорят все
        </h2>
      </div>
      <div className="media-card">
        <p>
          580 000+ учениц. Подкасты. Статьи
          <br />в СМИ. Коллаборации с звёздами.
        </p>
        <div className="media-grid">
          {mediaPhotos.map((photo, index) => (
            <div
              className="media-grid__item"
              key={photo}
              style={{ backgroundImage: `url(${photo})` }}
              aria-label={`Публикация о Кате Усмановой ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <PinkButton wide onClick={onReturn}>
        Вернуть форму
      </PinkButton>
    </section>
  );
}

function App() {
  const chooseProgram = () => {
    window.history.replaceState(null, "", "#form");
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  };

  const returnToForm = () => {
    window.location.href = "https://usmanovafit.gymteam.ru/maysale2026_7";
  };

  return (
    <main>
      <Hero onChoose={chooseProgram} />
      <About />
      <Media onReturn={returnToForm} />
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
