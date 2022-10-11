import "../assets/styles/contenedor.css";
//import Email from "./Email";
import Name from "./Name";
import LastName from "./LastName";
import Username from "./Username";
import Password from "./Password";
import Button from "./Button";

function Contenedor() {
  return (
    <>
      <center>
        <div className="wrapper">
          <form action="">
            <Name />
            <LastName />
            <Username />
            <Password />
            <Button />
          </form>
        </div>
      </center>
    </>
  );
}

export default Contenedor;
