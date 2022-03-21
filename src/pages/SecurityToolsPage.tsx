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
            <p>Learn how to pash the hash using Mimikatz. Coming Soon</p>
          </Card> 
        </Link>
      </div>
    </Container>
  )
}

export default SecurityToolsPage