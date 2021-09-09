import React from "react";

function Main() {
  return (
    <div className="CinemaDiv">
      <div className="textCinema">Смотрите в Кинотеатрах</div>
      <div className="CinemaInfo">
        <div>
          <img
            className="imgCinema"
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/bf5a0dfc-a4de-4ed7-82ca-8a83093755aa/960x960"
          />
          <div>Человек паук: Нет пути домой</div>
        </div>
        <div>
          <img
            className="imgCinema"
            src="https://u.9111s.ru/uploads/202101/16/8797602d6aceccb0373e6d61163b071c.jpg"
          />
          <div>Последний Богатырь 3</div>
        </div>
        <div>
          <img
            className="imgCinema"
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/543f233f-c33a-400c-bef6-205e0d3ea038/600x900"
          />
          <div>С днем смерти</div>
        </div>
        <div>
          <img
            className="imgCinema"
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/db35f188-b49e-4742-82a4-9be8a0d8995d/300x450"
          />
          <div>Чудо Женщина: 1984</div>
        </div>
      </div>
      <div className="FirstFilmName">Скоро во всех кинотеатрах</div>
      <div className="NewsFilms">
        <div>Отряд самоубийц: Мисия на вылет</div>
        <div>Шан-Чи и легенда десяти колец</div>
      </div>
      <div className="site">
        <div className="FirstFilm">
          <img
            className="img2"
            src="https://icdn.lenta.ru/images/2016/06/08/15/20160608155831296/pic_18b2e1f9c794c93b9dfc8f202e9a6d59.jpg"
          />
          <div className="firstFilmInfo">
            Джеймс Ганн, уволенный студией Disney с поста режиссера третьих
            «Стражей Галактики», быстро нашел себе новый проект. Теперь он
            должен совершить невероятное — вывести забуксовавшую после первого
            же фильма франшизу «Отряд самоубийц» в дамки. Работая над сценарием
            нового фильма, Джеймс Ганн вдохновлялся комиксами 80-х и собрал
            новый отряд, оставив от прежнего Харли Квинн (Марго Робби).
          </div>
        </div>
        <div className="FirstFilm">
          <img
            className="img2"
            src="https://i1.wp.com/itc.ua/wp-content/uploads/2021/09/shang-chi-and-the-legend-of-the-ten-rings.jpg"
          />
          <div className="firstFilmInfo">
            Мастеру боевых искусств Шан-Чи предстоит противостоять призракам из
            собственного прошлого, по мере того как его втягивают в паутину
            интриг таинственной организации «Десять колец». Дата выхода
            назначена на 2 сентября 2021г. Режисером фильма являкется Дестин
            Дэниэл Креттон, а главную роль играет Симу Лю. Известный по сериалу "Kim's Convenience".
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
