const posts = [
  {
    id: 1,
    title: "SA Report",
    tag: "Report",
    description: `
      A high level overview of this website and a reflection on what I've learnt 
      throughout this whole SA progress and how it has made me better. 
      An alternative to the PDF submission as part of the SA grading.
      
    `
  },
  {
    id: 2,
    title: "Security Concepts",
    tag: "Security Engineering",
    description: `
      Currently has info on DDos Attack.
    `
  },
  {
    id: 3,
    title: "CTF Tools",
    tag: "CTF",
    description: `
      A collection of helpful tools and links to help you on your CTF journey.
    `
  },
  {
    id: 4,
    title: "The Legal Side of Digital Security",
    tag: "Cyber Law",
    description: `
      What happens when you are performing a pentest? Surely you don't 
      expect to hack someone's network without repercusions.
    `
  },
  {
    id: 5,
    title: "Security Tools",
    tag: "Security Tools",
    description: `
      Learn more about what professional penetration testers in the field 
      use.
    `
  },
  {
    id: 6,
    title: "Challenge Writeups",
    tag: "CTF",
    description: `
      Writeups to the challenges that I have done.
    `
  }
];

const getPosts = () => {
  return posts
}

export default getPosts