import Subitle from "../../UI/titles/Subtitle";
import Title from "../../UI/titles/Title";

const StyleBs = () => {
  return (
    <div>
      <p className="fst-italic text-center shadow-sm">Bonus !</p>
      <Title m-4bis text="Style de BootStrap" />

      {/* <div className="w-75 mx-auto shadow-lg"> */}
      {/* <h2 className="px-3 display-4 fw-bolder border border-2 border-primary">Texte latin</h2> */}
      {/* <div className="m-3">
                    <span className="bg-danger text-lg-center text-md-end text-left text-uppercase">Hello World</span><br />
                    <a href="" className="text-dark text-decoration-underline">LIEN</a><br />
                </div> */}
      {/* position-sticky, user-select-none... */}
      {/* <p className="p-1 text-center fst-italic border rounded rounded-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
      {/* </div> */}

      <Subitle text="Tableau :"></Subitle>
      <div className="mt-1 table-responsive-lg">
        <table className="table table-striped table-hover table-border caption-top">
          <caption className="text-center">Liste de joueurs</caption>
          <thead>
            <tr className="table-dark">
              <th>Prenom</th>
              <th>Nom</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr className="align-middle">
              <td>Olivier</td>
              <td>Aton</td>
              <td>18 ans</td>
            </tr>
            <tr className="align-middle">
              <td>Mark</td>
              <td>Landers</td>
              <td>18 ans</td>
            </tr>
            <tr className="align-middle">
              <td>Philippe</td>
              <td>Galahan</td>
              <td>18 ans</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Subitle text="Formulaire :"></Subitle>
      <form action="" className="mx-auto px-4 w-50 d-flex flex-column">
        <div className="py-2">
          <label htmlFor="name" className="form-label">
            Prénom :
          </label>
          <div className="input-group d-flex flex-row">
            {/* <span className="input-group-text">@</span> */}
            <input
              type="email"
              name="email"
              id="email"
              className="form-control-sm"
            />
          </div>
        </div>

        <div className="py-2">
          <label htmlFor="iberic" className="form-label">
            Péninsule ibérique :
          </label>
          <select
            name="iberics"
            id="iberic"
            className="form-select form-select-xl"
          >
            <option value="Italie">Espagne</option>
            <option value="Italie">Portugal</option>
            <option value="Italie">Sud-Ouest français</option>
          </select>
        </div>

        <div className="py-2">
          <div className="input-group-sm">
            <span className="input-group-text">Votre message :</span>
            <textarea
              className="form-control"
              id=""
              cols="23"
              rows="5"
            ></textarea>
          </div>
        </div>
      </form>

      <Subitle text="Cartes :"></Subitle>
      <div className="d-flex flex-row p-2">
        <div className="card mt-1 mx-auto w-25">
          <img
            src="https://dev.h2prog.com/API_TEST/images/cours/cours12.png"
            alt="test"
            className="card-img mx-4 py-2"
            height="110px"
            style={{ width: "110px" }}
          />
          <div className="card-body">
            <h4 className="card-title">Titre d'example</h4>
            <p className="card-text">Ceci deviendra une description</p>
            <a href="" className="card-link">
              En savoir plus
            </a>
          </div>
        </div>
        <div className="card mt-1 mx-auto w-25">
          <img
            src="https://dev.h2prog.com/API_TEST/images/cours/cours11.png"
            alt="test"
            className="card-img mx-4 py-2"
            height="110px"
            style={{ width: "110px" }}
          />
          <div className="card-body">
            <h4 className="card-title">Titre d'example</h4>
            <p className="card-text">Ceci deviendra une description</p>
            <a href="" className="card-link">
              En savoir plus
            </a>
          </div>
        </div>
      </div>

      <Subitle text="Grilles :"></Subitle>
      <div className="container text-white">
        <div className="row g-0">
          <div className="col-4 col-xs-2">
            <div className="bg-info p-4 opacity-75">Livre</div>
          </div>
          <div className="col-7 col-md-6 order-md-5">
            <div className="bg-danger p-4">Auteur</div>
          </div>
          <div className="col-8">
            <div className="bg-secondary p-4 opacity-50 order-4">
              Description
            </div>
          </div>
        </div>
      </div>

      <Subitle text="Boîtes flexibles :"></Subitle>
      <div className="d-flex flex-column-reverse">
        <div className="bg-info p-3"></div>
        <div className="bg-primary p-3"></div>
        <div className="bg-warning p-3"></div>
      </div>
      <div className="mt-2 d-flex flex-row justify-content-around bg-light align-items-md-start flex-wrap">
        <div className="bg-info p-3 flex-grow-1"></div>
        <div className="bg-primary p-3"></div>
        <div className="bg-warning p-3 flex-grow-1"></div>
      </div>
    </div>
  );
};

export default StyleBs;
