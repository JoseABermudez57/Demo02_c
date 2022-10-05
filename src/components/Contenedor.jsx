import "../assets/styles/contenedor.css";
import Email from "./Email";
import Password from "./Password";

function Contenedor() {
  return (
    <>
      <center>
        <div className="wrapper">
            <Email />
            <Password />
            </div>
      </center>
    </>
  );
}

export default Contenedor;
