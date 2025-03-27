import './Time.css';
import { useState, useEffect } from "react";

const start = new Date("2024-08-10T19:00:00");

export function calculateTime() {
    const now = new Date();
    let diff = Math.floor((now - start) / 1000);

    const years = Math.floor(diff / (3600 * 24 * 365));
    diff -= years * 3600 * 24 * 365;
    const months = Math.floor(diff / (3600 * 24 * 30));
    diff -= months * 3600 * 24 * 30;
    const days = Math.floor(diff / (3600 * 24));
    diff -= days * 3600 * 24;
    const hours = Math.floor(diff / 3600);
    diff -= hours * 3600;
    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;

    return { years, months, days, hours, minutes, seconds };
};

function Time() { 
    const [time, setTime] = useState(calculateTime());
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(calculateTime());
        }, 1000);
        return () => clearInterval(interval);
    }, [start]);

    return (
        <div className="Time container-fluid text-center">
            <div id="title" className="row">
                <div className="col-12">
                    <h2 className="subtitle">Quanto Tempo Já Passou</h2>
                </div>
                <div className='card-time'>
                    <div className="row time">
                        <div className="col-6 col-lg-4 counter d-flex justify-content-center">
                            <div className="timer">{ time.years }<br/>anos</div>
                        </div>
                        <div className="col-6 col-lg-4 counter d-flex justify-content-center">
                            <div className="timer">{ time.months }<br/>meses</div>
                        </div>
                        <div className="col-6 col-lg-4 counter d-flex justify-content-center">
                            <div className="timer">{ time.days - 1 }<br/>dias</div>
                        </div>
                        <div className="col-6 col-lg-4 counter d-flex justify-content-center">
                            <div className="timer">{ time.hours }<br/>horas</div>
                        </div>
                        <div className="col-6 col-lg-4 counter d-flex justify-content-center">
                            <div className="timer">{ time.minutes }<br/>minutos</div>
                        </div>
                        <div className="col-6 col-lg-4 counter d-flex justify-content-center">
                            <div className="timer">{ time.seconds }<br/>segundos</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Time;