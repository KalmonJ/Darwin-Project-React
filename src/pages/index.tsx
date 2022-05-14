import ButtonComponent from "../components/button/button";
import Card from "../components/cards/card";
import { Link } from "react-scroll";

import "./pages.css";
import { useEffect, useState } from "react";
import ModalComponent from "../components/modal/modal";

function Page() {
  const [modalState, setModalState] = useState<boolean | undefined>(false);

  useEffect(() => {
    let timer = 0;
    if (!modalState) {
      timer = setTimeout(() => {
        setModalState(false);
      }, 1000);

      if (modalState === false) {
        clearTimeout(timer);
      }
    }
  }, [modalState]);

  const cardData = [
    {
      url: "img/graphic.svg",
      title: "UX Design e Branding",
      description:
        "Nosso time de Design está sempre focado em desenvolver projetos gráficos de alta qualidade que resolvam os problemas dos clientes e sejam esteticamente agradáveis.",
    },
    {
      url: "img/coding.svg",
      title: "Desenvolvimento",
      description:
        "Facilisis ornare vel sed amet porta. Montes, aliquam pellentesque malesuada velit. Eget mi tempus faucibus elementum volutpat, nulla est id cras.",
    },
    {
      url: "img/strategy.png",
      title: "Planejamento Estratégico",
      description:
        "Facilisis ornare vel sed amet porta. Montes, aliquam pellentesque malesuada velit. Eget mi tempus faucibus elementum volutpat, nulla est id cras.",
    },
  ];

  function clickCloseModal() {
    setModalState(undefined);
  }

  function click(state: boolean) {
    setModalState(state);
  }

  return (
    <>
      <section className="main__container">
        <section className="main__content">
          <div className="main__container--logo">
            <img className="main__logo" src="img/logo.svg" alt="Darwin Logo" />
          </div>
          <div className="main__container--description">
            <div className="container__description">
              <h1 className="main__title">
                Vamos evoluir <br /> seu negócio
              </h1>
              <p className="main__description">
                Somos uma agência de design e <br /> desenvolvimento que ajuda
                <br />
                a alcançar o próximo nível através da <br /> transformação
                digital.
              </p>
              <div className="container__buttons">
                <ButtonComponent func={click} />
                <button className="know__More--button">
                  <Link
                    to={"suit-container"}
                    spy={false}
                    smooth={true}
                    duration={1200}
                  >
                    Saiba Mais
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="suit-container" className="container__suit">
          <div className="suit__content">
            <h2 className="title__suit-content">
              Tudo que sua organização precisa <br /> para se adequar ao mundo
              digital
            </h2>
            <p className="description__suit">
              Através da sua equipe de especialistas multidisciplinares, a
              Darwin pode prover tudo que uma organização <br /> precisa para se
              adequar ao novo panorama do mundo digital.
            </p>
          </div>
          <div className="suit__container--cards">
            <Card cardData={cardData}></Card>
            <div className="button__container-main">
              <ButtonComponent func={click} />
            </div>
          </div>
        </section>
        {modalState || modalState === undefined ? (
          <>
            <div
              className="bg-form"
              onClick={() => {
                setModalState(false);
              }}
            ></div>

            <ModalComponent
              state={modalState}
              close={clickCloseModal}
              func={click}
            />
          </>
        ) : null}
      </section>
    </>
  );
}

export default Page;
