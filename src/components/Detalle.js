import { useParams } from "react-router-dom";
import json from "../data/instrumentos.json";
import styles from "../styles/instrumentoDetalle.module.css";
const {
  container,
  descripcion,
  vendidos,
  section,
  price,
  name,
  envioGratis,
  envioPago,
  boton,
  btnContainer,
} = styles;

export function Detalle() {
  const { id } = useParams();
  const { instrumentos } = json;
  const instr = instrumentos.find((instrumento) => instrumento.id === id);

  return (
    <div className={container}>
      <section className={section}>
        <img
          src={require(`../images/${instr.imagen}`)}
          alt={instr.instrumento}
          width={300}
        />
        <h5>Marca: {instr.marca}</h5>
        <h5>Modelo: {instr.modelo}</h5>
        <h4>Descripcion</h4>
        <p className={descripcion}>{instr.descripcion}</p>
      </section>
      <section className={section}>
        <p className={vendidos}>{instr.cantidadVendida} vendidos</p>
        <h3 className={name}>{instr.instrumento}</h3>
        <h2 className={price}>$ {instr.precio}</h2>

        {instr.costoEnvio === "G" ? (
          <p className={envioGratis}>
            <img src={require(`../images/camion.png`)} alt="camion" />
            Envío gratis a todo el país
          </p>
        ) : (
          <p className={envioPago}>
            Costo de envío al interior de Argentina: ${instr.costoEnvio}
          </p>
        )}
        <div className={btnContainer}>
          <button className={boton}>Comprar ahora</button>
          <button className={boton}>Agregar al carrito</button>
        </div>
      </section>
    </div>
  );
}
