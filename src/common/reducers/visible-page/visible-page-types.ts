export enum Page {
  HOME = 'BIENVENIDO',
  EXPERIENCE = 'EXPERIENCIA',
  WHOAMI = 'SOBRE MI',
  PROJECTS = 'PROYECTOS',
}

export type PageVisibility = {
  page: Page;
  intersectionRatio: number;
}

export type VisiblePageState = {
  HOME: number;
  EXPERIENCE: number;
  YOUTUBE: number;
  WHOAMI: number;
  PROJECTS: number;
};
