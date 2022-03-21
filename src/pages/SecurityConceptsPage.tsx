import { Container, Link, Card } from '@mui/material'
import React from 'react'

const SecurityConceptsPage = () => {
  return (
    <Container style={{color: '#ffffff'}}>
      <h1 className='post-title'>Security Concepts</h1>
      <p style={{textAlign: 'center', marginBottom: '60px'}}>
        Not sure what's the difference between a DDoS and Phishing? 
        Don't worry, I've got you covered.
      </p>

      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>
        <Link href='/post/ddos-attacks' style={{textDecoration:'none', width: '400px'}}>
          <Card>
            <h1>(Distributed) Denial of Service Attacks</h1>
            <p>Learn more about DDoS attacks and how they happen</p>
          </Card> 
        </Link>
      </div>
    </Container>
  )
}

export default SecurityConceptsPage