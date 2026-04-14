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
    bio: "Founder of SovraTech. Focused on building sharp, high-performance digital products that feel as good as they function.",
    image: "/soham.jpg",
    glb: "/assets/soham.glb",
    linkedin: "https://www.linkedin.com/in/sohamjoshi05/",
  },
  {
    id: "anuj",
    name: "Anuj Iyer",
    role: "Full Stack Developer",
    bio: "Builds robust and scalable systems, ensuring everything works seamlessly behind the scenes.",
    image: "/member3.jpg",
    glb: "/assets/anuj.glb",
    linkedin: "https://www.linkedin.com/in/anuj-iyer/",
  },
  {
    id: "parth",
    name: "Parth Dhadke",
    role: "Product Designer",
    bio: "Designs thoughtful, intuitive interfaces that feel calm, clear, and human.",
    image: "/member2.jpg",
    glb: "/assets/parth.glb",
    linkedin: "https://www.linkedin.com/in/parthdhadke/",
  },
];