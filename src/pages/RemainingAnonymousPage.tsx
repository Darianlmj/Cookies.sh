import React from 'react'
import { Container, Box } from '@mui/material'
import '../index.css'
import Pic1 from '../assets/RemainingAnonymous/Pic1.png'
import Pic2 from '../assets/RemainingAnonymous/Pic2.png'

const RemainingAnonymousPage = () => {
  return (
    <Container style={{ color: '#ffffff' }} maxWidth='md'>
      <h1 className='post-title'>Remaining Anonymous on the Web</h1>
      <p>
        In this article, I'll walk you through how to acheive near perfect 
        anonymity when doing anything on the web. The reason why I say near perfect
        is because there are always going to be ways that someone could use to track
        your activity online (**cough** NSA **cough**). We're going to be taking a look
        at tools like VPNs, the TOR browser, MacChanger and Anonsurf and how these
        can help hide your presence online.
      </p>

      <Box style={{ backgroundColor: 'white', color: 'black', padding: '10px', borderRadius: '10px' }}>
        <h1>Reflection</h1>
        <p>
          This was probably the most interesting research that I've done for this project.
          Even though it may seem like a very simple concept, total anonymity is actually somewhat
          unacheivable due to all the advancements in surveillance.
        </p>
      </Box>

      <h3>VPNs</h3>
      <p>
        A Virtual Private Network (VPN) is a connection method used to add security and
        privacy to any private and public network. With a VPN, the user's initial IP address
        is replaced with the one from the VPN's provider. Using this, a user can obtain an
        IP address from any gateway city the VPN provides/has access to.
      </p>

      <h3>The TOR Browser</h3>
      <p>
        This is a web browser that allows users to browse the web while preventing surveillance
        and tracking. How it acheives this is by routing all your requests through 3 other nodes (computers)
        in the TOR ecosystem, effectively using them as proxies.
      </p>
      <p>
        Unfortuanately, because of the multiple routings, it slows down each request you make.
        A small price to pay for anonymity. In addition to that, because it makes users
        anonymous online, it is also the browser where the Dark Web is located. Please do
        not go there =).
      </p>
      <div className='image-container'>
        <img src='https://ssd.eff.org/files/2019/03/29/tormac7.png' width='600px' height='400px'/>
      </div>

      <h3>Anonsurf</h3>
      <p>
        This is a tool that will help you stay anonymous by routing every packet from your computer
        through a TOR proxy server.
      </p>
      <div className='image-container'>
        <img src={Pic1} width='500px' height='300px'/>
      </div>

      <h3>MacChanger</h3>
      <p>
        A MAC address is essentially a unique identifier for a computer. So it only makes sense that
        you remain anonymous if it's changed.
      </p>
      <div className='image-container'>
        <img src={Pic2} width='600px' height='500px'/>
      </div>

      <h3>Virtual Private Server (VPS)</h3>
      <p>
        A VPS is a server that you would connect to and then execute all your commands through.
        By doing this, none of the commands would actually be coming from your actual computer.
      </p>

      <h3>On a side note</h3>
      <p>
        There is still a very small potential that someone can track your IP address back
        to you. If you are using your private wifi at home, this could very easily identify you.
        The best way to avoid detection is to use a combination of VPNs, TOR, MAcChanger as 
        well as using public wifi for all hacking activities. Of course, this project does not
        condone the use of this information for any black hatting purposes.
      </p>
    </Container>
  )
}

export default RemainingAnonymousPage