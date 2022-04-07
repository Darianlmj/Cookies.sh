import React from 'react'
import { Container } from '@mui/material'

const SAReflectionPage = () => {
  return (
    <Container style={{ color: '#ffffff', minHeight: '770px', textAlign: 'justify' }}>
      <h1 className='post-title'>Something Awesome Report</h1>
      <h3>Overview</h3>
      <ol>
        <li>Project Overview</li>
        <li>Articles in the Project</li>
        <ul>
          <li>Security Concepts</li>
          <li>CTF Tools</li>
          <li>The Legal Side of Digital Security</li>
          <li>Security Tools</li>
          <li>Challenge Writeups</li>
        </ul>
        <li>Reflection</li>
      </ol>

      <h2 style={{ textDecoration: 'underline' }}>Section 1</h2>
      <h3>1.1&nbsp;&nbsp;&nbsp;&nbsp; Project Overview</h3>
      <p>
      The project that I have chosen to do for my Something Awesome is a website 
      called Cookies.sh. The idea behind it was similar to the Computer Science 
      and Engineering Society's (CSESoc) existing project Structs.sh. This 
      website aims to teach others about Security Engineering from different 
      points of view via the various articles included on the website. It is 
      comprised of 5 main categories, namely
      </p>
      <ul>
        <li>Security Concepts</li>
        <li>CTF Tools</li>
        <li>The Legal Side of Digital Security</li>
        <li>Security Tools</li>
        <li>Challenge Writeups</li>
      </ul>
      <p>
        For more information about these categories, refer to section 2. 
        Links to the relevant pages will also be included for ease of navigating 
        around the project.
      </p>

      <h2 style={{ textDecoration: 'underline' }}>Section 2</h2>
      <h3>2.1&nbsp;&nbsp;&nbsp;&nbsp; Security Concepts</h3>
      <p>
        This category aims to provide an in-depth explanation into some of the 
        most well-known security concepts. There is one article in this category 
        which analyses what a Distributed Denial of Service (DDOS) attack is 
        about, how to identify it, how to prevent a DDOS and also provides 
        context into other security concepts such as:
      </p>
      <ul>
        <li>What happens when a user tries to access a website?</li>
        <li>What is a Botnet?</li>
      </ul>
      <p>
        Link to the page:&nbsp;
        <a href='https://cookies-sh.web.app/post/ddos-attacks' className='internal-post-link'>https://cookies-sh.web.app/post/ddos-attacks</a>
      </p>
      
      <h3>2.2&nbsp;&nbsp;&nbsp;&nbsp; CTF Tools</h3>
      <p>
        This category aims to provide a comprehensive list of common and 
        well-known tools that people use when tackling Capture the Flag (CTF) 
        events. This is split into several categories which are Web Application, 
        Forensics, Reverse Engineering and Cryptography.
      </p>

      <p>
        In each category, there is a list of tools, a brief description about 
        what each tool does, how is it useful in that particular CTF category 
        and a link to find out more information about the tool.
      </p>
      <p>
        Link to the page:&nbsp;
        <a href='https://cookies-sh.web.app/post/3' className='internal-post-link'>https://cookies-sh.web.app/post/3</a>
      </p>

      <h3>2.3&nbsp;&nbsp;&nbsp;&nbsp; The Legal Side of Digital Security</h3>
      <p>
        This category is targeted towards people from a more technical background, 
        rather than someone from a legal background. As engineers, our minds are 
        used to a more technical and analytical way of thinking which is why the 
        article about Cybercrime aims to help open up a security engineer's mind 
        and expose them to an entirely different perspective about security 
        engineering.
      </p>

      <p>
        In the article, I draw information from the Law podcast in week 7 
        that Ms. Lyria Bennett Moses and Professor Richard Buckland did together. 
        The article details:        
      </p>
      <ul>
        <li>Computer Crimes</li>
        <li>How do we define a computer?</li>
        <li>What do the Criminal Law Codes Cover in terms of a Computer Crime?</li>
        <li>A real-life scenario in which a person was prosecuted based off of the Computer Crime Criminal Law.</li>
      </ul>
      <p>
        Link to the page:&nbsp;
        <a href='https://cookies-sh.web.app/post/cybercime' className='internal-post-link'>https://cookies-sh.web.app/post/cybercime</a>
      </p>

      <h3>2.4&nbsp;&nbsp;&nbsp;&nbsp; Security Tools</h3>
      <p>
        This category aims to provide a brief introduction into some of the 
        tools that security professionals use. It contains 3 articles which are:
      </p>
      <ul>
        <li>
          Setting Up a Kali Linux Machine <br></br>
          <a href='https://cookies-sh.web.app/post/setting-up-kali-linux' className='internal-post-link'>https://cookies-sh.web.app/post/setting-up-kali-linux</a>
        </li>
        <li>
          Mimikatz <br></br>
          <a href='https://cookies-sh.web.app/post/mimikatz' className='internal-post-link'>https://cookies-sh.web.app/post/mimikatz</a>
        </li>
        <li>
          Remaining Anonymous on the Web <br></br>
          <a href='https://cookies-sh.web.app/post/remaining-anonymous' className='internal-post-link'>https://cookies-sh.web.app/post/remaining-anonymous</a>
        </li>
      </ul>

      <h3>2.4.1&nbsp;&nbsp;&nbsp;&nbsp; Setting Up a Kali Linux Machine</h3>
      <p>
        This article includes instruction on how anyone is able to install and 
        set up their very own Kali Linux machine. I chose this topic because 
        Kali is a security engineer's bread and butter. It goes through simple 
        installation guides like setting up VirtualBox and Kali. As a bonus, I 
        included a section where I explained the benefits of not using the 
        default root login but instead, setting up your own user account with 
        sudo privileges for added security.
      </p>

      <h3>2.4.2&nbsp;&nbsp;&nbsp;&nbsp; Mimikatz</h3>
      <p>
        This topic was done as a lightning talk in my Week 7 tutorial. 
        You can also find a re-enactment of the lightning talk through this 
        3-minute video&nbsp;
        <a href='https://youtu.be/MLizeTI0jr4' className='internal-post-link'>https://youtu.be/MLizeTI0jr4</a>
      </p>
      <p>
        This article provides a brief introduction into the popular password 
        cracking tool, Mimikatz. It guides the user to perform a basic privilege 
        escalation in order to impersonate a user, steal passwords and perform 
        an attack called Passing the Hash (PTH).
      </p>
      <p>
        It also contains a bonus section on how to do the same thing, but 
        without needing physical access to the target's machine. This is done 
        by using a reverse Meterpreter shell and a very basic phishing attack.
      </p>

      <h3>2.4.3&nbsp;&nbsp;&nbsp;&nbsp; Remaining Anonymous on the Web</h3>
      <p>
        This article teaches keen internet users some of the best ways to 
        avoid detection when doing anything online by using some popular tools 
        such as Virtual Private Networks (VPN), the TOR browser, Anonsurf, 
        MacChanger and Virtual Private Servers (VPS).
      </p>

      <h3>2.5&nbsp;&nbsp;&nbsp;&nbsp; Challenge Writeups</h3>
      <p>
        This category contains one article on a CTF challenge that I did from TryHackMe. It contains a detailed walkthrough of what I did to solve each question.
        Link to the page:&nbsp;
        <a href='https://cookies-sh.web.app/post/investigating-windows' className='internal-post-link'>https://cookies-sh.web.app/post/investigating-windows</a>
      </p>

      <h2 style={{ textDecoration: 'underline' }}>Section 3</h2>
      <h3>3.1&nbsp;&nbsp;&nbsp;&nbsp; Reflection</h3>
      <p>
        During the process of making this project, I have learnt a lot about the 
        security field. Coming into the subject, I felt overwhelmed by the amount 
        of content there was in security engineering. However, after spending 
        time to research about the different fields in computing, I have learnt 
        some really cool things that mostly extends beyond the scope of what the 
        course teaches and I'm really happy about it.
      </p>

      <strong style={{ textDecoration: 'underline' }}>Brainstorming</strong>
      <p>
        At first, I wanted to do a keylogger as my SA but I realised that I 
        didn't know how to go about doing that. Then when Richard mentioned 
        teaching someone something as a SA theme, I thought about Structs.sh 
        and how it was really useful when I was trying to learn algorithms. 
        Thus, the idea of Cookies was born.
      </p>

      <strong style={{ textDecoration: 'underline' }}>Planning and Execution</strong>
      <p>
        I wrote out the topics that I wanted to focus on in a to-do list. 
        Knowing that security is a very broad field, I went with the more 
        technical topics plus a non-technical one (Legal Side of Digital Security). 
        I then came up with a general research plan which was to find several 
        articles/podcasts/links and basically summarise it so that a regular 
        person with no computing background could understand it. 
        Then all I had to do was create the website 
        (GitHub link:&nbsp;
          <a href='https://github.com/Darianlmj/Cookies.sh' className='internal-post-link'>https://github.com/Darianlmj/Cookies.sh</a>
        ).
      </p>

      <strong style={{ textDecoration: 'underline' }}>Time Allocation</strong>
      <p>
        The entire project took about 35 hours* or so in total. 
        The time spent to research and do each category are as follows:
      </p>
      <ul>
        <li>Security Concepts (~4 hours)</li>
        <li>CTF Tools (~6 hours. Info collected throughout the term)</li>
        <li>The Legal Side of Digital Security (~3 hours)</li>
        <li>Security Tools (~14 hours)</li>
        <li>Challenge Writeups (~3 hours)</li>
        <li>Documentation/Article Writing (~5 hours)</li>
      </ul>
      <p>
        * Note that this is an estimation of the total time spent.
      </p>

      <strong style={{ textDecoration: 'underline' }}>Best Features</strong>
      <p>
        What I think I did the best in this project was the Security Tools 
        category because it was so fun to actually use the different tools and 
        apply it to things that we're learning in the course. For example, 
        learning the different features that Kali had to offer was great because 
        I use it primarily to solve the weekly wargames now.
      </p>
      <p>
        I also think that I did a good job explaining really technical things 
        to a person with a non-technical background such as the DDOS Attack 
        article.
      </p>
      
      <strong style={{ textDecoration: 'underline' }}>Challenges</strong>
      <p>
        Originally, I set out with the intention of doing 2-3 articles a week. 
        However, as I came to realise later, this was not feasible at all. 
        This was because I failed to realise the workload I would have from my 
        other university courses as well as some extracurricular commitments that 
        I had outside of university. Upon realising that, I decided to adopt a 
        quality over quantity approach when doing the project and chose to do one 
        article a week, but on something that I found extremely interesting while 
        researching.
      </p>
      <p>
        I had also originally planned to do another category called Warstories, 
        where I planned on sharing stories about the exciting world of penetration 
        testing, especially physical penetration testing. However, I decided to not 
        do this just because there are literally hundreds of podcasts out there 
        doing this and explaining it in at an in-depth level which I could not.
      </p>
      <p>
        Although every article was generally interesting to research about, 
        I do have some regrets about the project. For example, I don't think 
        that I should have spent as so much time doing the Investigating Windows 
        CTF. As fun as CTFs are, I don't think it adds a lot of appeal to the 
        project as a whole or was as impressive as the other articles. I probably 
        could have used the time to research about other really interesting fields 
        in security such as Drone Security which I would have loved to learn more 
        about and will no doubt do that even after the SA project is complete. 
        Nevertheless, I don't regret the knowledge that I gained from doing it.
      </p>

    </Container>
  )
}

export default SAReflectionPage