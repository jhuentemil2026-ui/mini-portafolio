import { Link } from 'react-router-dom'
function Inicio() {
  return (
    <section>
      <h1> Jesús Huentemil</h1>
      <p> Estudiante de Desarrollo Frontend</p>
      <p>Bienvenido a mi portafolio, aquí muestro todo lo que he ido aprendiendo durante este proceso, disfruta.</p>
      <Link to="/proyectos">Explorar</Link>
    </section>
    )

}

export default Inicio