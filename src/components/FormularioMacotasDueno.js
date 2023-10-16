import { useState } from 'react';
import '../css/imagen.css'

const extencionesImagenes = [
    'png',
    'jpg',
    'jpeg'
]

const FormularioMascotasDueno = () => {

    const [error, setError] = useState(null);

    const [imagen, setImagen] = useState(null);

    const [post, setPost] = useState({
        name: '',
        specie: 'Perro',
        gender: 'Hembra',
        breed: 'Chihuahua',
        age: '',
        size: '',

        // datos de perdida
        last_seen: '',
        description: '',
        lost_date: '',
        image: ''
    });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(post);
    }

    const handleChangeImg = (evt) => {
        const file = evt.target.files[0];

        if (file === undefined) {
            return;
        }

        const nameFileArray = file.name.split('.');

        if (!extencionesImagenes.some(extencion => nameFileArray[nameFileArray.length - 1].toLowerCase() === extencion)) {
            setError('Debes seleccionar un archivo de tipo imagen');
            setTimeout(() => {
                setError(null);
            }, 4000)
            return;
        }

        const newObjectPost = {
            ...post,
            image: file
        }
        setPost(newObjectPost);
        setImagen(URL.createObjectURL(file));
    }


    return (
        <div className='container d-flex justify-content-center align-items-center mt-3'>
            <form className='row g-3' onSubmit={handleSubmit}>

                {
                    error ? (
                        <div className='alert alert-danger text-center'>
                            {error}
                        </div>
                    ) : null
                }

                <div className='col-md-6 col-sm-12'>
                    <h2>Datos de la mascota</h2>
                    <div className='row g-2'>
                        <div className='col-12'>
                            <label className='form-label'>Nombre</label>
                            <input value={post.name} onChange={evt => setPost({ ...post, name: evt.target.value })} required type='text' className='form-control' />
                        </div>
                        <div className='col-6'>
                            <label className='form-label'>Especie</label>
                            <select value={post.specie} onChange={evt => setPost({ ...post, specie: evt.target.value })} className='form-select'>
                                <option value='Perro'>Perro</option>
                                <option value='Gato'>Gato</option>
                                <option value='Ave'>Ave</option>
                            </select>
                        </div>
                        <div className='col-6'>
                            <label className='form-label'>Genero</label>
                            <select value={post.gender} onChange={evt => setPost({ ...post, gender: evt.target.value })} required className='form-select'>
                                <option value='Hembra'>
                                    Hembra
                                </option>
                                <option value='Macho'>
                                    Macho
                                </option>
                            </select>
                        </div>
                        <div>
                            <label className='form-label'>Raza</label>
                            {/* <input value={post.breed} onChange={evt => setPost({...post, breed: evt.target.value})} required type='text' className='form-control' /> */}
                            <select value={post.breed} onChange={evt => setPost({...post, breed: evt.target.value})} className='form-select'>
                                {
                                    post.specie === 'Perro' ? (
                                        <>
                                            <option>Chihuahua</option>
                                            <option>Labrador</option>
                                            <option>Pug</option>
                                            <option>Husky</option>
                                            <option>Pastor aleman</option>
                                            <option>Pitbull</option>
                                            <option>Pastor belga mallinois</option>
                                            <option>Meztizo</option>
                                        </>
                                    ) : post.specie === 'Gato' ?(
                                        <>
                                            <option>Persa</option>
                                            <option>Azul ruso</option>
                                            <option>Siames</option>
                                            <option>Angora turco</option>
                                            <option>Siberiano</option>
                                            <option>Bengali</option>
                                            <option>Meztizo</option>
                                        </>
                                    ): (
                                        <>
                                            <option>Paloma</option>
                                            <option>Gorrion</option>
                                            <option>Pinzon</option>
                                            <option>Golondrina</option>
                                        </>
                                    )
                                }
                            </select>
                        </div>
                        <div className='col-6'>
                            <label className='form-label'>Edad</label>
                            <div className='input-group'>
                                <span className='input-group-text'>Años</span>
                                <input value={post.age} onChange={evt => setPost({ ...post, age: evt.target.value })} required type='number' className='form-control' min={1} />
                            </div>
                        </div>

                        <div className='col-6'>
                            <label className='form-label'>Tamaño</label>
                            <select value={post.size} onChange={evt => setPost({ ...post, size: evt.target.value })} required className='form-select'>
                                <option value='Chico'>Chico</option>
                                <option value='Mediano'>Mediano</option>
                                <option value='Grande'>Grande</option>
                                <option value='No aplica'>No aplica</option>
                            </select>
                        </div>
                    </div>

                </div>


                <div className='col-md-6 col-sm-12 '>
                    <h2>Datos de perdida</h2>
                    <div className='row g-2'>
                        <div className=''>
                            <label className='form-label'>Ubicacion donde fue visto la ultima</label>
                            <div className='input-group'>
                                <span className='input-group-text'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg>
                                </span>
                                <textarea value={post.last_seen} onChange={evt => setPost({ ...post, last_seen: evt.target.value })} required className='form-control'></textarea>
                            </div>
                        </div>
                        <div>
                            <label>Descripcion</label>
                            <div className='input-group'>
                                <span className='input-group-text'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-body-text" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5Zm0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-12 2A.5.5 0 0 1 .5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-8 2A.5.5 0 0 1 .5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-7 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z" />
                                    </svg>
                                </span>
                                <textarea value={post.description} onChange={evt => setPost({ ...post, description: evt.target.value })} required className='form-control'></textarea>
                            </div>

                        </div>
                        <div>
                            <label className='form-label'>Fecha de perdida</label>
                            <div className='input-group'>
                                <span className='input-group-text'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-calendar-date" viewBox="0 0 16 16">
                                        <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                    </svg>
                                </span>
                                <input value={post.lost_date} onChange={evt => setPost({ ...post, lost_date: evt.target.value })} type='date' className='form-control' />

                            </div>
                        </div>

                        <div className=''>
                            <label className='form-label'>Fotografia de tu mascota</label>
                            <input required className={`form-control ${error ? 'border-danger' : null}`} type='file' onChange={handleChangeImg} />
                        </div>
                    </div>
                </div>


                <div className='col-12'>
                    {
                        imagen !== null ? (
                            <div className='card row justify-content-center align-items-center'>
                                <img className='imagen card-img-top pt-2' src={imagen} alt="Vista previa de la imagen" />
                                <div className='card-body text-center'>
                                    <h5 className='card-title'>Previsualización de imagen</h5>
                                </div>
                            </div>
                        ) : null
                    }
                </div>

                <div className='col-12 mt-4 mb-3 d-flex justify-content-center'>
                    <button className='btn btn-primary'>Publicar mascota</button>
                </div>
            </form>
        </div>
    );
}

export default FormularioMascotasDueno;