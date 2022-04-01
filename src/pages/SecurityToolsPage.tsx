import { Container, Grid, Link, Card } from '@mui/material';
import React from 'react'

import SettingUpKaliLinuxPage from './SettingUpKaliLinuxPage';

const SecurityToolsPage = () => {
  document.title = "Cookies.sh | Security Tools";

  return (
    <Container style={{color: '#ffffff'}}>
      <h1 className="post-title">Security Tools</h1>
      <p style={{textAlign: 'center', marginBottom: '60px'}}>Ever wondered what sort of tools the professionals use? Look no further.</p>

      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>
        <Link href='/post/setting-up-kali-linux' style={{textDecoration:'none', width: '400px'}}>
          <Card>
            <h1>Setting Up a Kali Linux Machine</h1>
            <p>Learn how to set up a virtual Kali machine using Virtual Box</p>
          </Card> 
        </Link>

        <Link href='/post/mimikatz' style={{textDecoration:'none', width: '400px'}}>
          <Card>
            <h1>Mimikatz</h1>
            <p>Learn how to pash the hash using Mimikatz.</p>
            <p style={{ fontWeight: 'bold' }}>
              A demonstration of this was done as part of a lightning talk in my
              Week 7 tutorials and provided a lot of useful insight into the
              very awesome password rant done by Mark Sonn.
            </p>
          </Card> 
        </Link>

        <Link href='/post/remaining-anonymous' style={{textDecoration:'none', width: '400px'}}>
          <Card>
            <h1>Remaining Anonymous on the Web</h1>
            <p>
              VPNs, the TOR browser and other tools that you can use to maintain
              near perfect anonymity on the web.
            </p>
          </Card> 
        </Link>
      </div>
    </Container>
  )
}

export default SecurityToolsPage