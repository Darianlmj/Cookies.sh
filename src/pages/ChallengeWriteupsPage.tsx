import React from 'react'
import { Container, Link, Card } from '@mui/material';

const ChallengeWriteupsPage = () => {
  return (
    <Container style={{ color: '#ffffff' }}>
      <h1 className="post-title">Challenge Writeups</h1>
      <p style={{ textAlign: 'center', marginBottom: '60px' }}>
        Writeups to CTF challenges that I've completed.
      </p>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <Link href='/post/investigating-windows' style={{ textDecoration: 'none', width: '400px' }}>
          <Card>
            <h1>Investigating Windows</h1>
            <p>
              A fun forensics challenge which investigates malicious
              activity on a Windows machine
            </p>
          </Card>
        </Link>
      </div>
    </Container>
  )
}

export default ChallengeWriteupsPage