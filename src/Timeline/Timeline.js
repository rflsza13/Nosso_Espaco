import './Timeline.css';

function Timeline() { 
    return (
        <div className="Timeline container-fluid text-center">
            <div id="title" className="row">
                <div className="col-12">
                    <h2 className="subtitle">Linha do Tempo</h2>
                </div>
            </div>
            <div className='row d-flex justify-content-center'>
                <div className="timeline">
                    <div className="timeline-item left">
                        <div className="timeline-text">
                            <div className="timeline-date">07/05/2023 - 14/05/2023</div>
                            <h2>🌱 O Primeiro Contato 🌱</h2>
                            <h4>
                                Nos conhecemos pelo Facebook e trocamos algumas mensagens. Mas, como uma semente que não recebeu água, a conversa foi se apagando, e acabamos seguindo caminhos diferentes... por enquanto!
                            </h4>
                        </div>
                    </div>
                    <div className="timeline-item right">
                        <div className="timeline-text">
                            <div className="timeline-date">14/05/2024</div>
                            <h2>🔄 O Destino nos Reencontra 🔄</h2>
                            <h4>
                                Um ano depois, o acaso (ou o destino?) nos colocou no mesmo caminho de novo! Nos esbarramos na cidade, retomamos o contato e percebemos que algo especial estava prestes a acontecer.
                            </h4>
                        </div>
                    </div>
                    <div className="timeline-item left">
                        <div className="timeline-text">
                            <div className="timeline-date">15/05/2024 - 14/08/2024</div>
                            <h2>✨ Descobrindo a Magia ✨</h2>
                            <h4>
                                Foram três meses intensos, cheios de conversas, risadas e descobertas. Quanto mais nos conhecíamos, mais víamos que nossas almas estavam conectadas.
                            </h4>
                        </div>
                    </div>
                    <div className="timeline-item right">
                        <div className="timeline-text">
                            <div className="timeline-date">10/08/2024</div>
                            <h2>❤️ O Início da Nossa Jornada ❤️</h2>
                            <h4>
                                O dia em que oficializamos nosso amor! Uma nova fase cheia de cumplicidade, carinho e momentos inesquecíveis começou.
                            </h4>
                        </div>
                    </div>
                    <div className="timeline-item left">
                        <div className="timeline-text">
                            <div className="timeline-date">25/12/2024</div>
                            <h2>🎄 Nosso Primeiro Natal Juntos 🎄</h2>
                            <h4>
                                A magia do Natal ficou ainda mais especial porque estávamos juntos! Nosso primeiro fim de ano como casal, cheio de amor, presentes e momentos inesquecíveis.
                            </h4>
                        </div>
                    </div>
                    <div className="timeline-item right">
                        <div className="timeline-text">
                            <div className="timeline-date">10/02/2025</div>
                            <h2>💖 Metade do Caminho 💖</h2>
                            <h4>
                                Meio ano juntos! Um marco especial na nossa história, celebrando o quanto crescemos e tudo o que ainda está por vir.
                            </h4>
                        </div>
                    </div>
                </div>
                <span className='infinity'><i class="fa-solid fa-infinity"></i></span>
            </div>
        </div>
    );
}

export default Timeline;