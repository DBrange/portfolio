import { FC } from "react";
import Palette from "../Palette/Palette";

const Footer: FC = () => (
  <footer className="footer">
    <div className="footer__container">
      {`Didier Brange © ${new Date().getFullYear()}`}
      <Palette />
      <div className="footer__credits">
        <p className="footer__credits-content">
          Icono de gato por icon-icons.com
        </p>
        <p className="footer__credits-content">
          Diseño creado por github.com/manuelbasanta
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
