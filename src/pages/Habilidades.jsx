const habilidades = [
  { nombre: 'HTML', nivel: 'Intermedio' },
  { nombre: 'CSS', nivel: 'Intermedio' },
  { nombre: 'JavaScript', nivel: 'Básico' },
  { nombre: 'React', nivel: 'Principiante' },
]

function Habilidades() {
  return (
    <section>
      <h1>Habilidades</h1>

      {habilidades.map((habilidad) => (
        <div key={habilidad.nombre}>
          <h3>{habilidad.nombre}</h3>
          <p>{habilidad.nivel}</p>
        </div>
      ))}

      <h2>Herramientas</h2>
      <ul>
        <li>Git</li>
        <li>GitHub</li>
        <li>VS Code</li>
      </ul>
    </section>
  )
}

export default Habilidades