import { useRef } from "react";
import { LogoSize } from "../../common/components/Logos/logos-types";
import GitHubLogo from "../../common/components/Logos/social/GitHubLogo";
import useVisiblePage from "../../common/hooks/useVisiblePage";
import { Page } from "../../common/reducers/visible-page/visible-page-types";
import URL from "../../common/types/url-types";
import Box from "../../components/Box/Box";
import Title from "../../components/Title/Title";

const Projects = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useVisiblePage(ref, Page.PROJECTS);

  return (
    <div ref={ref} className="projects">
      <Title
        title="algunos proyectos"
        subtitle="en los que he estado trabajando"
      />
      <div className="projects__box-container">
        <Box
          title="Reclamo Web"
          description="Facilitar reclamos o seguros, tanto para vehiculos o electrodomesticos."
          tags={["Typescript", "Nest", "PostgreSQL", "TypeORM"]}
          imageSize={LogoSize.XSMALL}
          url={URL.RECLAMOWEB}
        />
        <Box
          title="Staff Sphere CRM"
          description="Gestionador de recursos humanos."
          tags={["Javascript", "React", "Express", "PostgreSQL"]}
          image={GitHubLogo}
          imageSize={LogoSize.XSMALL}
          url={URL.STAFFSPHEREGITHUB}
        />
        <Box
          title="Mundo de las recetas"
          description="Catalogo y creador de recetas."
          tags={["Javascript", "React", "Express", "PostgreSQL"]}
          image={GitHubLogo}
          imageSize={LogoSize.XSMALL}
          url={URL.FOODPI}
        />
        <Box
          title="Mi sitio web"
          description="Este mismo sitio web, pero tras bambalinas."
          tags={["Typescript", "React", "SASS"]}
          image={GitHubLogo}
          imageSize={LogoSize.XSMALL}
          url={URL.PORTFOLIO}
        />
      </div>
    </div>
  );
};

export default Projects;
