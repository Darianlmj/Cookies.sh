import React from 'react';
import { Container } from '@mui/material';

import './AboutCtf.css';

const AboutCtf = () => {
  return (
    <Container maxWidth='md' style={{ color: '#ffffff', minHeight: '780px' }}>
      <h1 className='post-title'>CTF Tools</h1>
      <p>
        A collection of helpful tools and links to help you on your CTF journey.
      </p>
      <div id='about-ctf'>
        <h2>Web Application</h2>
        <ul>
          <li>
            Burp Suite. A paid platform but a useful for performing security testing of web applications.
            More suitable for experienced people.
            <br></br>
            <a href='https://portswigger.net/burp' className='internal-post-link'>https://portswigger.net/burp</a>
          </li>
          <li>
            ZAP. OWASP ZAP is an open-source web application security scanner. 
            It is intended to be used by both those new to application security 
            as well as professionals. 
            <br></br>
            <a href='https://www.zaproxy.org/' className='internal-post-link'>https://www.zaproxy.org/</a>
          </li>
          <li>
            SQL Map. An overpowered open source penetration testing tool that 
            automates the process of detecting and exploiting SQL injection 
            flaws and taking over of database servers.
            <br></br>
            <a href='https://sqlmap.org/' className='internal-post-link'>https://sqlmap.org/</a>
          </li>
        </ul>
        <h2>Forensics</h2>
        <ul>
          <li>
            Aircrack-ng. A complete suite of tools to assess WiFi network security.
            <br></br>
            <a href='https://www.aircrack-ng.org/' className='internal-post-link'>https://www.aircrack-ng.org/</a>
          </li>
          <li>
            Wireshark. Analysing network packets. 
            <br></br>
            <a href='https://www.wireshark.org/' className='internal-post-link'>https://www.wireshark.org/</a>
          </li>
          <li>
            Audacity. Analyze sound files (usually helpful in those morse code challenges).
            <br></br>
            <a href='http://sourceforge.net/projects/audacity/' className='internal-post-link'>http://sourceforge.net/projects/audacity/</a>
          </li>
          <li>
            Exif tool. A cli tool to inspect files to see if they contain any hidden file signatures.
            <br></br>
            <a href='https://exiftool.org/' className='internal-post-link'>https://exiftool.org/</a>
          </li>
          <li>
            Microsoft Paint. Useful for uncovering hidden messages in images.
            If you don't have a Windows machine, you might find this link helpful.
            <br></br>
            <a href='https://jspaint.app/' className='internal-post-link'>https://jspaint.app/</a>
          </li>
        </ul>
        <h2>Reverse Engineering</h2>
        <ul>
          <li>
            Binwalk. Binwalk is a tool for searching a given binary image for 
            embedded files and executable code. Specifically, it is designed for 
            identifying files and code embedded inside of firmware images.
            <br></br>
            <a href='https://github.com/ReFirmLabs/binwalk' className='internal-post-link'>https://github.com/ReFirmLabs/binwalk</a>
          </li>
          <li>
            Binary-Ninja. An interactive disassembler, decompiler, and binary analysis platform
            <br></br>
            <a href='https://binary.ninja/' className='internal-post-link'>https://binary.ninja/</a>
          </li>
          <li>
            Ghidra. An NSA developed tool for reverse engineering. Similar to binary ninja.
            <br></br>
            <a href='https://ghidra-sre.org/' className='internal-post-link'>https://ghidra-sre.org/</a>
          </li>
          <li>
            IDA Pro. Similar to Binary-Ninja and Ghidra.
            <br></br>
            <a href='https://www.hex-rays.com/ida-pro/' className='internal-post-link'>https://www.hex-rays.com/ida-pro/</a>
          </li>
          <li>
            GDB. Debugging cli tool. Self explanatory if you've taken a UNSW
            computing course especially COMP2521.
            <br></br>
            <a href='https://www.sourceware.org/gdb/' className='internal-post-link'>https://www.sourceware.org/gdb/</a>
          </li>
        </ul>
        <h2>Cryptography</h2>
        <ul>
          <li>
            CyberChef. A free tool which has a little of everything.
            <br></br>
            <a href='https://gchq.github.io/CyberChef/' className='internal-post-link'>https://gchq.github.io/CyberChef/</a>
          </li>
          <li>
            ZAP. OWASP ZAP is an open-source web application security scanner. 
            It is intended to be used by both those new to application security 
            as well as professionals. 
            <br></br>
            <a href='https://www.zaproxy.org/' className='internal-post-link'>https://www.zaproxy.org/</a>
          </li>
          <li>
            SQL Map. An overpowered open source penetration testing tool that 
            automates the process of detecting and exploiting SQL injection 
            flaws and taking over of database servers.
            <br></br>
            <a href='https://sqlmap.org/' className='internal-post-link'>https://sqlmap.org/</a>
          </li>
        </ul>
      </div>
      <p> 
        There is literally so many more tools out there but these are just some of the
        tools that I have used before and I would recommend. There is also a fantastic
        website which aims to do the same thing in this article but in more depth.
        You can check it out here:&nbsp; 
        <a href='https://c4pr1c3.github.io/awesome-ctf/' className='internal-post-link'>https://c4pr1c3.github.io/awesome-ctf/</a>
      </p>
    </Container>
  )
}

export default AboutCtf