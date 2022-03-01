const posts = [
    {
        id: 1,
        title: "Warstories",
        tag: "Project",
        description: `
            A collection of the most insane and daring attempts at penetration
            testing. Sourced from podcasts, videos, and articles. 
            Coming Soon.
        `
    },
    {
        id: 2,
        title: "Security Concepts",
        tag: "Experience",
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
    }
];

const getPosts = () => {
    return posts
}

export default getPosts