import "../assets/styles/contenedor.css";
import Email from "./Email";
import Password from "./Password";
import Button from "./Button";

function Contenedor() {
  return (
    <>
      <center>
        <div className="wrapper">
          <Email />
          <Password />
          <Button />
        </div>
      </center>
    </>
  );
}

export default Contenedor;
