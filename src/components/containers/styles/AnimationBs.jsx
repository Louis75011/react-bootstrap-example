import Subitle from "../../UI/titles/Subtitle";
import Title from "../../UI/titles/Title";

const AnimationBs = () => {
  return (
    <div>
      <Title text="Animations avec BootStrap" />

      <Subitle text="Barre de navigation responsive :"></Subitle>
      <nav className="navbar navbar-dark bg-gradient navbar-expand-md">
        <div className="container">
          <div className="navbar-brand">Navigation</div>

          <div
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#burger-menu"
          >
            <span className="navbar-toggler-icon"></span>
          </div>

          <div className="collapse navbar-collapse" id="burger-menu">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="" className="nav-link active">
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Albums
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Subitle text="Barre de défilement :"></Subitle>
      <nav id="navbar-example2" className="navbar navbar-light bg-gradient">
        <a className="navbar-brand text-white px-2" href="#">
          Navigation
        </a>
        <ul className="nav nav-pills mx-auto">
          <li className="nav-item">
            <a className="nav-link" href="#fat">
              @fat
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#mdo">
              @mdo
            </a>
          </li>
        </ul>
      </nav>
      <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
        <p className="h4" id="fat">
          @fat
        </p>
        <p className="h5 p-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p className="h4" id="mdo">
          @mdo
        </p>
        <p className="h5 p-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      <Subitle text="Symbole de chargement :"></Subitle>
      <div className="d-flex justify-content-center p-3">
        <div className="spinner-grow text-gradient">
          <span className="visually-hidden">Chargement...</span>
        </div>
      </div>

      <Subitle text="Carrousel :"></Subitle>
      {/* <!-- Créer un carousel --> */}
      <div
        id="monPetitCarrousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        {/* <!-- Indicateurs --> */}
        <ul className="carousel-indicators">
          <li
            data-bs-target="#monPetitCarrousel"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li data-bs-target="#monPetitCarrousel" data-bs-slide-to="1"></li>
        </ul>
        {/* <!-- Contenu du carousel --> */}
        <div className="carousel-inner">
          {/* <!-- Premier slide --> */}
          <div className="carousel-item active" data-bs-interval="1000">
            <img
              src="https://img.freepik.com/photos-gratuite/outils-sport_53876-138077.jpg?w=2000"
              className="w-100 h-100 d-block"
              alt="Japon"
            />
            {/* <!-- Description --> */}
            <div className="carousel-caption">
              <h5>Les sports :</h5>
              <p>
                Le sport demeure excellent pour la santé physique et mentale !
              </p>
            </div>
          </div>
          {/* <!-- Deuxième slide --> */}
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/photos-gratuite/gros-plan-lignes-blanches-peintes-terrain-football-vert-allemagne_181624-7842.jpg?w=1380&t=st=1666361742~exp=1666362342~hmac=390741a49427f5f6aa303725cdad42d5ffe3c37b8e267f8ff25d495eb394379d"
              className="w-100 h-100 d-block"
              alt="Japon"
            />
            {/* <!-- Description --> */}
          </div>
        </div>
        {/* <!-- Controles --> */}
        <a
          className="carousel-control-prev"
          href="#monPetitCarrousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="sr-only"></span>
        </a>
        <a
          className="carousel-control-next"
          href="#monPetitCarrousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="sr-only"></span>
        </a>
      </div>

      <div className="p-3"></div>
    </div>
  );
};

export default AnimationBs;
