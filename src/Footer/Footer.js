import './Footer.css';

function Footer() {
    return (
        <div className='Footer container-fluid text-center'> 
            <div class="row">
                <div class="col-12">
                    <h4>E mais histórias estão por vir...</h4>
                    <br />
                    <h5>
                        <span><i className="fa-solid fa-heart"></i></span>
                        Desenvolvido com amor
                        <span><i className="fa-solid fa-heart"></i></span>
                    </h5>
                    <br />
                    <h6><a className='link' href="https://inovawebtec.site" target='_blank'>InovaWeb®</a>, All Right Reserved | Designed By UrusianX</h6>
                </div>
            </div>
        </div>
    );
}

export default Footer;