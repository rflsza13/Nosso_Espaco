import './About.css';
import julia1 from './img/julia 1.jpeg';
import julia2 from './img/julia 2.jpeg';
import rafael1 from './img/rafael 1.jpeg';
import rafael2 from './img/rafael 2.jpeg';

const birthDateJulia = new Date("1996", "12", "18", "00", "00", "00");
const birthDateRafael = new Date("1994", "04", "17", "00", "00", "00");

function Age(startDate) {
    const now = new Date();
    const diff = now - startDate;
    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor((hours / 24));
    let years = Math.floor(days / 365);
    return years;
}

function Carousel(foto1, foto2) {
    return (
        <div className="col-12 d-flex justify-itens-center">
            <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner justify-content-center">
                    <div className="carousel-item active">
                        <img src={ foto1 } className="carousel-img rounded" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={ foto2 }  className="carousel-img rounded" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function About() {
    return (
        <div className="About container-fluid">
            <div id="title" className="row">
                <div className="col-12 text-center">
                    <h2 className="subtitle">Um pouco sobre nós</h2>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-6 col-lg-3">
                    <div className="card rounded">
                        { Carousel(julia2, julia1) }
                        <div className="card-body">
                            <h5 className="card-title">Julia</h5>
                            <p className="card-text"><span>{ Age(birthDateJulia) }</span> anos | ♐ Sagitário</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3">
                    <div className="card rounded">
                        { Carousel(rafael2, rafael1) }
                        <div className="card-body">
                            <h5 className="card-title">Rafael</h5>
                            <p className="card-text"><span>{ Age(birthDateRafael) }</span> anos | ♈ Áries</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;