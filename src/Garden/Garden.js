import './Garden.css';
import { calculateTime } from '../Time/Time.js';

var time = calculateTime();

function Garden(i) {
    return (
        <div className="Garden container-fluid text-center">
            <div id="title" className="row">
                <div className="col-12">
                    <h2 className="subtitle">O Jardim do Amor</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="garden night">
                        <div className="meiaLua"></div>
                        {  
                            new Array(time.months).fill('').map((_, i) =>
                                <Flowers />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function Flowers(flor) {
    var color = getRandomInt(6);
    return (
        <div className="flowers" style={{ bottom: flor.top + 'px' , padding: '4%'}}>
            <div className="flower flower--1">
                <div className="flower__leafs flower__leafs--1">
                <div className={ "flower__leaf flower-" + color + " flower__leaf--1" }></div>
                <div className={ "flower__leaf flower-" + color + " flower__leaf--2" }></div>
                <div className={ "flower__leaf flower-" + color + " flower__leaf--3" }></div>
                <div className={ "flower__leaf flower-" + color + " flower__leaf--4" }></div>
                <div className="flower__white-circle"></div>
        
                <div className="flower__light flower__light--1"></div>
                <div className="flower__light flower__light--2"></div>
                <div className="flower__light flower__light--3"></div>
                <div className="flower__light flower__light--4"></div>
                <div className="flower__light flower__light--5"></div>
                <div className="flower__light flower__light--6"></div>
                <div className="flower__light flower__light--7"></div>
                <div className="flower__light flower__light--8"></div>
        
                </div>
                <div className="flower__line">
                <div className="flower__line__leaf flower__line__leaf--1"></div>
                <div className="flower__line__leaf flower__line__leaf--2"></div>
                <div className="flower__line__leaf flower__line__leaf--3"></div>
                <div className="flower__line__leaf flower__line__leaf--4"></div>
                <div className="flower__line__leaf flower__line__leaf--5"></div>
                <div className="flower__line__leaf flower__line__leaf--6"></div>
                </div>
            </div>
        
            <div className="long-g long-g--1">
                <div className="grow-ans">
                <div className="leaf leaf--0"></div>
                </div>
                <div className="grow-ans">
                <div className="leaf leaf--1"></div>
                </div>
                <div className="grow-ans">
                <div className="leaf leaf--2"></div>
                </div>
                <div className="grow-ans">
                <div className="leaf leaf--3"></div>
                </div>
            </div>
        
            <div className="long-g long-g--2">
                <div className="grow-ans">
                <div className="leaf leaf--0"></div>
                </div>
                <div className="grow-ans">
                <div className="leaf leaf--1"></div>
                </div>
                <div className="grow-ans">
                <div className="leaf leaf--2"></div>
                </div>
                <div className="grow-ans">
                <div className="leaf leaf--3"></div>
                </div>
            </div>
        
            <div className="long-g long-g--3">
                <div className="grow-ans">
                <div className="leaf leaf--0"></div>
                </div>
                <div className="grow-ans">
                <div className="leaf leaf--1"></div>
                </div>
                <div className="grow-ans">
                <div className="leaf leaf--2"></div>
                </div>
                <div className="grow-ans">
                <div className="leaf leaf--3"></div>
                </div>
            </div>
        
            <div className="long-g long-g--4">
                <div className="grow-ans">
                <div className="leaf leaf--0"></div>
                </div>
                <div className="grow-ans">
                <div className="leaf leaf--1"></div>
                </div>
                <div className="grow-ans">
                <div className="leaf leaf--2"></div>
                </div>
                <div className="grow-ans">
                <div className="leaf leaf--3"></div>
                </div>
            </div>
        
            <div className="long-g long-g--5">
                <div className="grow-ans">
                <div className="leaf leaf--0"></div>
                </div>
                <div className="grow-ans">
                <div className="leaf leaf--1"></div>
                </div>
                <div className="grow-ans">
                <div className="leaf leaf--2"></div>
                </div>
                <div className="grow-ans">
                <div className="leaf leaf--3"></div>
                </div>
            </div>
        
            <div className="long-g long-g--7">
                <div className="grow-ans">
                <div className="leaf leaf--0"></div>
                </div>
                <div className="grow-ans">
                <div className="leaf leaf--1"></div>
                </div>
                <div className="grow-ans">
                <div className="leaf leaf--2"></div>
                </div>
                <div className="grow-ans">
                <div className="leaf leaf--3"></div>
                </div>
            </div>
        </div>
    );
}

export default Garden;