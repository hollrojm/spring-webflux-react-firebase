import React, { Fragment } from 'react'

function Footer() {
    return (
        <Fragment >
            
            <footer className="text-center  footer margin-top  text-lg-start bg-black text-muted">

                <section
                    className="d-flex justify-content-center justify-content p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                    </div>
                    <div className="float-left">
                        <div  className="me-4 text-reset float-left">
                            <i className="fab fa-facebook-f"></i>
                        </div>
                        <div  className="me-4 text-reset float-left">
                            <i className="fab fa-twitter"></i>
                            </div>
                        <div  className="me-4 text-reset float-left">
                            <i className="fab fa-google"></i>
                            </div>
                        <div  className="me-4 text-reset float-left">
                            <i className="fab fa-instagram"></i>
                            </div>
                        <div  className="me-4 text-reset float-left">
                            <i className="fab fa-linkedin"></i>
                            </div>
                        <div   className="me-4 text-reset float-left">
                            <i className="fab fa-github"></i>
                            </div>
                    </div>
                    
                </section>
                <div className="text-center"><p>Sitio de preguntas y respuestas para todo publico,
                                profesionales y aficionados de cualquier tema en general.
                                </p></div>

                <div className="text-center ">
                    © 2021 Copyright:
                    <p className="text-reset fw-bold">  Hollman Rojas</p>
                </div>

            </footer>
        </Fragment>
    )
}

export default Footer
