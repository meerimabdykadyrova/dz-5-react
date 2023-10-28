import style from './portfolio.module.css';
import avatar from '../../acsses/images/avatar.png';

const Portfolio = () => {
  return (
    <div className={style.container}>
      <img src={avatar} alt="Profile Picture" className={style.picture} />
      <h1>Abdykadyrova Meerim Almazovna</h1>
      <p>Email: abdykadyravameerim.com</p>
      <p>Phone: (501) 53-89-30</p>

      {/*<div className={style.section}>*/}
      {/*  <h2>Краткое содержание</h2>*/}
      {/*  <p>*/}
      {/*    Высоко мотивированный и внимательный к деталям человек с опытом работы*/}
      {/*    в Веб-разработка.*/}
      {/*  </p>*/}
      {/*</div>*/}

      <div className={style.section}>
        <h2>Education</h2>
        <div className={style.experience}>
          <h3>Linguistics of English and German</h3>
          <p>Arabaev</p>
          <p>Sophomere</p>
        </div>
      </div>

      <div className={style.section}>
        <h2>Courses</h2>
        <div className={style.education}>
          {/* <h3>Secondary education</h3> */}
          <p>geeks.kg</p>
          <p>for 4 months of training</p>
        </div>
      </div>

      <div className={style.section}>
        <h2>Навыки</h2>
        <ul className={style.skill_list}>
          <li className={style.skill_item}>
            <i className="fas fa-code icon"></i>HTML
          </li>
          <li className={style.skill_item}>
            <i className="fas fa-code icon"></i>CSS
          </li>
          <li className={style.skill_item}>
            <i className="fas fa-code icon"></i>SASS
          </li>
          <li className={style.skill_item}>
            <i className="fas fa-code icon"></i>SCSS
          </li>

          <li className={style.skill_item}>
            <i className="fab fa-js icon"></i>JavaScript
          </li>
          <li className={style.skill_item}>react</li>
          <li className={style.skill_item}>reduxToolkit</li>
          <li className={style.skill_item}>TanStack Query</li>
          <li className={style.skill_item}>Tailwindcss</li>
          <li className={style.skill_item}>GIT</li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
