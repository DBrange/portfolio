/* eslint-disable max-len */
import React, { useRef } from "react";
import Button from "../../common/components/Button/Button";
import Link from "../../common/components/Link/Link";
import { LinkTypes } from "../../common/components/Link/link-types";
import useIntersectionObserver from "../../common/hooks/useIntersectionObserver";
import useVisiblePage from "../../common/hooks/useVisiblePage";
import { Page } from "../../common/reducers/visible-page/visible-page-types";
import Title from "../../components/Title/Title";

const WhoAmI = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useVisiblePage(ref, Page.WHOAMI);
  const animationEntry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
  });

  return (
    <div ref={ref} className="whoami">
      <div className="whoami__container">
        <Title title="Sobre mi" subtitle="quien soy" />
        <p>
          Hola! mi nombre es <b>Didier</b>, desarrollo paginas web desde hace
          mas de 1 año, con preferencia en Front-End.
        </p>
        <p>
          He trabajado siempre con el mismo objetivo, dar soluciones a los
          problemas, tanto en <b>Back-end</b> como en <b>Fornt-end</b>, aprendiendo en el camino. Si este sitio llamó su atención, no dude en
          ponerse en contacto conmigo.
        </p>
        <Link href="mailto:brangedidier@gmail.com" type={LinkTypes.BUTTON}>
          <Button label="Contactame!" />
        </Link>
      </div>
      <div
        className="whoami__moving-border"
        data-animate={animationEntry?.isIntersecting}
      >
        <div className="whoami__concept whoami__concept--front">Front-End</div>
        <div className="whoami__concept whoami__concept--back">Back-End</div>
      </div>
    </div>
  );
};

export default WhoAmI;
