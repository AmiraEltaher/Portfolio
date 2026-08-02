export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink: string;
  liveDemo?:string;
}
