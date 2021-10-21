import React, { Fragment } from 'react'

function Footer() {
    return (
        <Fragment >
            
            <footer class="text-center  text-lg-start bg-black text-muted">

                <section
                    class="d-flex justify-content-center justify-content p-4 border-bottom">
                    <div class="me-5 d-none d-lg-block">
                        <span>Siguenos en nuestras redes sociales:</span>
                    </div>
                    <div>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>

                </section>

                <section class="">
                    <div class="container text-center text-md-start mt-8">

                        <div class="row mt-3">

                            <div class=" col-lg-6  mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                 Descripción
                                </h6>
                                <p>
                                Sitio de preguntas y respuestas para todo publico,
                                profesionales y aficionados. Es el sitio emblemático 
                                de la red, ​ creado en 2021 por Raul Alzate y Hollman Rojas.​​ 
                                Contiene preguntas y respuestas sobre una amplia gama de temas en general.
                                </p>
                            </div>

                            <div class="col-xl-5 mx-auto mb-md-0 mb-0">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    Contacto
                                </h6>
                                <p><i class="fas fa-home me-3"></i> La calera Cundinamarca</p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i>
                                    hollmanerojas@gmail.com
                                </p>
                                <p><i class="fas fa-phone me-3"></i> 57+ 3192893439</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="text-center ">
                    © 2021 Copyright:
                    <a class="text-reset fw-bold" href="https://hollman-cv-portafolio.netlify.app/">  Hollman Rojas</a>
                </div>

            </footer>
        </Fragment>
    )
}

export default Footer
