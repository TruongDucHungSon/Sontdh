export interface IProjectSignProps {
  id: number;
  mouth?: number;
  year?: string;
  namePr: string;
  descriptions: string;
  tech?: { label: string }[];
  path: string;
}

export interface navProps {
  id: number;
  label: string;
  routes: string;
}
