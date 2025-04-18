import "./HeartFailure.css";

const HeartFailure = () => {
  return (
    <div className="heart-failure">
      <h1>Insuficiencia cardíaca</h1>

      <div className="model-placeholder">
        <div className="labels">
          <p>Corazón normal</p>
          <p>Corazón con insuficiencia</p>
        </div>
      </div>

      <section className="info-section">
        <div className="info-title">¿Qué es?</div>
        <p>
          La insuficiencia cardíaca es una condición en la que el corazón no puede
          bombear sangre de manera eficiente para satisfacer las necesidades del cuerpo.
          Puede deberse a debilidad del músculo cardíaco, rigidez o problemas estructurales.
        </p>
      </section>
    </div>
  );
};

export default HeartFailure;
