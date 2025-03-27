import './Capa.css';
import img1 from './img/foto 1.jpeg'
import img2 from './img/foto 2.jpeg'
import img3 from './img/foto 3.jpeg'
import img4 from './img/foto 4.jpeg'

function Carousel() {
    return (
        <div className="Carousel col-12 d-flex justify-content-center">
            <div className="carousel carousel-capa slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ img1 } className="carousel-img" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={ img2 }  className="carousel-img" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={ img3 }  className="carousel-img" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={ img4 }  className="carousel-img" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Capa() {
  return (
    <div className="container-fluid Capa text-center">
        <div id="title" className="row">
            <div className="col-12 text-light border-dark">
                <h1 className='title-capa'> 
                    <span><i className="fa-solid fa-heart"></i></span>
                    <span>Nosso Espaço</span> 
                    <span><i className="fa-solid fa-heart"></i></span>
                </h1>
            </div>
        </div>
        <div className="row">
            <Carousel />
        </div>
        <div id="text" className="row justify-content-center">
            <div className="col-12 col-lg-9 order-1 text-break ">
                <p className="fs-5 fw-bold">
                    Este é um cantinho especial onde podemos guardar memórias, reviver momentos e celebrar tudo o que construímos juntos.
                    Cada palavra aqui é um pedacinho do nosso coração, uma forma de eternizar nosso amor e a cumplicidade que nos une.
                    Entre risos, desafios e sonhos, nossa história é feita de detalhes únicos que só nós entendemos.
                    Este site é como uma extensão de nós dois, um lugar para relembrar o quanto somos fortes e o quanto somos melhores quando estamos lado a lado. 
                    Que aqui a gente possa sempre se encontrar, mesmo nos dias mais corridos, e lembrar do motivo pelo qual escolhemos um ao outro, todos os dias.
                    <span><i className="fa-solid fa-heart"></i></span>
                </p>
            </div>
        </div>
    </div>
  );
}

export default Capa;