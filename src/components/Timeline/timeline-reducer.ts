import { createSlice } from "@reduxjs/toolkit";
import URL from "../../common/types/url-types";
import { TimelineState } from "./timelime-types";

const initialState: TimelineState = {
  steps: [
    {
      content: [
        "Crear, diseñar e implementar solución agil, rapida y flexible para eventos deportivos",
        "Implementar estrategia para retener y alcanzar nuevos usuarios",
        "Arquitectura hexagonal en Backend y scream architecture en Frontend",
        "Tecnologias usadas: Flutter, Go, MongoDB",
      ],
      header: "Agosto 2024 - Presente",
      title: {
        position: "Fullstack Developer (Propio)",
        company: {
          name: "Bradi",
          url: URL.BRADI,
        },
      },
    },
    {
      content: [
        "Modificar añadir y actualizar interfaz de usuario, API y DB",
        "Mejorar y eficientizar la consulta de datos, en Backend y Frontend",
        "Algunas tecnologias usadas: Angular, Nest.js, Mongoose, Sass, +",
      ],
      header: "Marzo 2024 - Agosto 2024",
      title: {
        position: "Fullstack Developer (Freelance)",
        company: {
          name: "Genesis Agency",
          url: URL.EMPTY,
        },
      },
    },
    {
      content: [
        "Encargado de la estructura y manejo de seguridad del frontend",
        "Desarrollo de rutas y servicios para API",
        "Algunas tecnologias usadas: Next, Typescrpt, Mongoose, MongoDB, +",
      ],
      header: "Febrero 2024 - Marzo 2024",
      title: {
        position: "Fullstack Developer (Freelance)",
        company: {
          name: "Greenplus",
          url: URL.GREENPLUS,
        },
      },
    },
    {
      content: [
        "Encargado de diseñar la mejor experiencia de usuario, facil, accesible y rapida",
        "Encargado del desarrollo de la misma end-to-end",
        "Algunas tecnologias usadas: React, Nest, Typescrpt, PostgreSQL, +",
      ],
      header: "Julio 2023 - Enero 2024",
      title: {
        position: "Fullstack Developer (Freelance)",
        company: {
          name: "Reclamo Web",
          url: URL.RECLAMOWEB,
        },
      },
    },
    {
      content: [
        "Liderar el desarrollo frontend del proyecto.",
        "Junto a 7 compañeros de equipo, desarrollamos un CRM accesible, para grandes y pequeñas empresas.",
        "Algunas tecnologias usadas: React, Express, Javascript, PostgreSQL, +",
      ],
      header: "Marzo 2023 - Abril 2023",
      title: {
        position: "Frontend Developer",
        company: {
          name: "Staff Sphere",
          url: URL.STAFFSPHERE,
        },
      },
    },
    {
      content: [
        "Egresado como Fullstack Developer.",
        "Asistente de enseñanza (TA) hacia un grupo de 28 alumnos de Henry Bootcamp. Reconocimiento en mi desempeño: Friendly",
        "Algunas tecnologias aprendidas: React, Express, Typescrpt, PostgreSQL, +",
      ],
      header: "Diciembre 2022 - Abril 2023",
      title: {
        position: "Fullstack Developer",
        company: {
          name: "SoyHenry",
          url: URL.SOYHENRY,
        },
      },
    },
  ],
};

const componentReducer = createSlice({
  name: "timeline",
  initialState,
  reducers: {},
});

export default componentReducer.reducer;
