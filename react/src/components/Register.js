import React from 'react';



export const Register = () => {
    return (
        <div>
            <div class="row">
                <div class="col-md-4 col-sm-1"></div>
                <div class="col-md-4 col-sm-1 border border-1">
                    <div style = {{padding: "30px"}}>
                        <h2>Registrarse</h2>
                        <form method="POST">
                            <input type="hidden" />
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Apellido</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Telefono</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Contraseña</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Confirmar contraseña</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"/>
                            </div>
                            <div class="d-grid gap-2">
                                <button class="btn m-2 text-white" style={{backgroundColor: '#F5B041'}} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Registrarme</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-4 col-sm-1"></div>
            </div>
            
        </div>
    )
}