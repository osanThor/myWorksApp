export interface InWork {
  projectLogo: number;
  projectName: string;
  period: string;
  bgColor: string;
  category: string;
  imageUrl?: string;
  link?: string;
  description?: string;
  skills?: string;
}

export type InWorksProps = Array<InWork>;
