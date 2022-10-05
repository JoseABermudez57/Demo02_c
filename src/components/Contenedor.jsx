import "../assets/styles/contenedor.css";
import Email from "./Email";
import Password from "./Password";
import Button from "./Button";

function Contenedor() {
  return (
    <>
      <center>
        <div className="wrapper">
          <form action="">
            <Email />
            <Password />
            <Button />
          </form>
        </div>
      </center>
    </>
  );
}

export default Contenedor;
