const posts = [
  {
    id: 1,
    title: "Warstories",
    tag: "Storytime",
    description: `
      A collection of the most insane and daring attempts at penetration
      testing. Sourced from podcasts, videos, and articles. 
      Coming Soon.
    `
  },
  {
    id: 2,
    title: "Security Concepts",
    tag: "Security Engineering",
    description: `
      Currently has info on DDos Attack. More coming soon.
    `
  },
  {
    id: 3,
    title: "A beginner's guide to CTFs",
    tag: "CTF",
    description: `
      From Recon to Forensics, this is an all-encompasing guide to help
      you tackle those tricky CTF cahllenges. Coming Soon.
    `
  },
  {
    id: 4,
    title: "The Legal Side of Digital Security",
    tag: "Cyber Law",
    description: `
      What happens when you are performing a pentest? Surely you don't 
      expect to hack someone's network without repercusions. Coming Soon.
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