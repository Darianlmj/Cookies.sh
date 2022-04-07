import React from 'react'
import { Container, Link, Card } from '@mui/material'

const LegalSidePage = () => {
  return (
    <Container style={{ color: '#ffffff', minHeight: '770px' }}>
      <h1 className='post-title'>Security Concepts</h1>
      <p style={{ textAlign: 'center', marginBottom: '60px' }}>
        How exactly does cyberlaw work? There are many different ways to
        define criminal behaviour when it comes to security engineering. In this
        section, we'll be taking a look at a few of these examples.
      </p>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <Link href='/post/cybercrime' style={{ textDecoration: 'none', width: '400px' }}>
          <Card>
            <h1>Cybercrime</h1>
            <p>
              How exactly is a computer defined in cyberlaw? What do the main
              criminal code laws cover? Are you able to get prosecuted for more
              than one cybercrime at a time? Find out more here.
            </p>
          </Card>
        </Link>
      </div>
    </Container>
  )
}

export default LegalSidePage