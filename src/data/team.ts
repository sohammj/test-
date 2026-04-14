export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  glb: string;
  linkedin: string;
};
export const teamMembers: TeamMember[] = [
  {
    id: "soham",
    name: "Soham Joshi",
    role: "Founder & Lead Developer",
    bio: "Founder of SovraTech, focused on building sharp, high-performance digital products that feel as refined and intuitive as they are functional.",
    image: "/soham.jpg",
    glb: "/assets/soham.glb",
    linkedin: "https://www.linkedin.com/in/sohamjoshi05/",
  },
  {
    id: "anuj",
    name: "Anuj Iyer",
    role: "Full Stack Developer",
    bio: "Builds robust, scalable systems that keep products reliable, efficient, and seamless behind the scenes across every stage of development.",
    image: "/member3.jpg",
    glb: "/assets/anuj.glb",
    linkedin: "https://www.linkedin.com/in/anuj-iyer/",
  },
  {
    id: "parth",
    name: "Parth Dhadke",
    role: "Product Designer",
    bio: "Designs thoughtful, intuitive interfaces that feel calm, clear, and human, shaping digital experiences that are both elegant and purposeful.",
    image: "/member2.jpg",
    glb: "/assets/parth.glb",
    linkedin: "https://www.linkedin.com/in/parthdhadke/",
  },
];