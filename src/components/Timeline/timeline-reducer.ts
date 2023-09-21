import { createSlice } from "@reduxjs/toolkit";
import URL from "../../common/types/url-types";
import { TimelineState } from "./timelime-types";

const initialState: TimelineState = {
  steps: [
    {
      content: [
        "Junto a un compañero de equipo, nos encargamos de desde, diseñar la mejor experiencia de usuario, hasta crear el desarrollo del frontend y backend, trabajamos en lograr que la web sea mas rápida, fácil de usar y divertida.",
        "Encargado 100% del frontend y parte del backend.",
        "Algunas tecnologias usadas: React, Nest, Typescrpt, PostgreSQL, +",
      ],
      header: "Julio 2023 - Presente",
      title: {
        position: "Fullstack Developer",
        company: {
          name: "Reclamo Web",
          url: URL.RECLAMOWEB,
        },
      },
    },
    {
      content: [
        "Liderar el frontend del proyecto final.",
        "Junto a un 7 compañeros de equipo, desarrollamos un ORM accesible, para grandes y pequeñas empresas.",
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
        "Asistente de enseñanza (TA) a 28 alumnos de Henry Bootcamp. Reconocimiento en mi desempeño: Friendly",
        "Algunas tecnologias usadas: React, Express, Typescrpt, PostgreSQL, +",
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
