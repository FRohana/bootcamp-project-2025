export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
  additionalImages?: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
}

const blogs: Blog[] = [
  {
    title: "How I Built My Portfolio Website",
    date: "10-14-2025",
    description: "Through Hack4Impact's bootcamp, I learned web development from the ground up starting with HTML structure...",
    image: "/images/websiteSS.png",
    imageAlt: "Screenshot of my portfolio website homepage",
    slug: "how-i-built-my-website",
  },
  {
    title: "Why I Got Into Computer Engineering",
    date: "10-14-2025",
    description: "My journey into computer engineering started in seventh grade when I built my first custom PC...",
    image: "/images/fullgame.jpg",
    imageAlt: "Completed whack-a-mole arcade game with wooden cabinet and button controls",
    additionalImages: [
      {
        src: "/images/wires.jpg",
        alt: "Inside view of the arcade game",
        caption: "The hardware side: designing and wiring the circuit board",
      },
    ],
    slug: "why-im-doing-ce",
  },
];

export default blogs;