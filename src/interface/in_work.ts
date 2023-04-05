export interface InWork {
  projectLogo?: number;
  projectName: string;
  period: string;
  bgColor: string;
  category: string;
  imageUrl?: string;
  link?: string;
  description?: string;
  skills?: string;
  work?: string;
  logoUrl: string;
}

export type InWorksProps = Array<InWork>;

export interface InWorksColProps {
  description: string;
  name: string;
  worksCount: number;
}
