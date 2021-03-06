import React from 'react'
import { Container, Box } from '@mui/material'

const CybercrimePage = () => {
  return (
    <Container maxWidth='md' style={{ color: '#ffffff'}}>
      <h1 className='post-title'>Cybercrime</h1>
      <p>
        In this article, we'll be taking a look at a few things that are bound to
        open your mind to really interesting concepts in cyberlaw. For instance,
        coming from a technical background, did you know that a computer isn't 
        just defined as something that you use to work on assignments??!! Is your
        mind blown? I know right!! Then, we'll be taking a look at what exactly do
        the Criminal Code Laws cover in terms of Computer Crimes. Finally, we'll
        analyse a real life case study where all these concepts and criminal codes
        come into play.
      </p>
      <Box style={{ backgroundColor: 'white', color: 'black', padding: '10px 40px', borderRadius: '10px' }}>
        <h1>Reflection</h1>
        <p>
          Reseaching this was honestly an eye-opener as there were many things about
          cyberlaw that I did not realise. Coming from a technical background, I
          never considered the implications of a simple hack. However, by listening to
          the amazing Lyria's podcast, it really opened my mind up to the more legal
          side of things which I am grateful for.
        </p>
      </Box>
      <h3>What is a Computer?</h3>
      <p>
        Unfortunately, the legislation about this was made a while back, back when
        computers were still chunky boxes and not super powerful. However, considering
        the advancements we have made, it's safe to assume that a computer can be classified
        as:
        <ul>
          <li>A regular computer</li>
          <li>A laptop</li>
          <li>A mobile phone (yes... this is considered a computer)</li>
          <li>Any device with the ability to connect to the internet</li>
        </ul>
      </p>
      <h3>What do the Criminal Law Codes Cover in terms of Computer Crime?</h3>
      <p>
        It is important to note here that a Computer Crime here does not mean
        smashing someone's laptop for instance. There are 3 main categories which
        constitues a computer crime. These are:
      </p>
      <h4>Unauthorised Access</h4>
      <p>
        You can think of this category as your classical hacking method. Someone
        in a dark room on thier laptop trying to gain unauthorised access into a 
        company network, or doing some phishing to gain access into someone's
        machine. Basically, doing something on your computer to gain access to
        something that your not supposed to have without explicit approval, consent
        or knowledge of that person/entity.
      </p>
      <h4>Modification</h4>
      <p>
        This category covers the alteration or the removal of data. Some examples
        of these are:
        <ul>
          <li>Adding yourself to a list of people who are entitled to a payment.</li>
          <li>Adding malware to someone's computer</li>
          <li>
            Making someone's computer into a botnet. If you are unsure of what a botnet is,
            you might be inclined to check out my post about DDOS&nbsp;
            <a href='https://cookies-sh.web.app/post/ddos-attacks' className='internal-post-link'>here</a>.
            But essentially, a bot is when you modidy someone's computer without authorization
            with the intention of using its computing power or bandwith to do malicious things.
            A botnet is a group of these bots (usually a very large number of bots).
          </li>
        </ul>
        You might be wondering, if modification can be a simple act of adding a file
        to someone's computer, why isn't cookies illegal? That was a question that was
        floating in my head to but it turns out, cookies are perfectly legal because you
        are giving consent for them to be added to your computer.
      </p>
      <h4>Impairment</h4>
      <p>
        The last category here is impairment and this category covers the attempt to
        impair someone's system without needing to access/modify a system. An 
        of this woiuld be a person performing a DDOS attack on an e-commerce website
        with the intention of bring down their system and preventing customers from
        accessing their website. This is considered impairment because we are not technically
        accessing or modifying the system but is still considered an offence.
      </p>
      <h3>Real Life Scenario</h3>
      <p>
        Knowing about these 3 categories, we can now start to look at a real life
        scenario where a person was convicted of a computer crime with multiple
        charges that combined one or more of these categories.
      </p>
      <h4>R v Boden [2002] QCA 164</h4>
      <p>
        This is a case of Vitek Boden, a disgruntled engineer who hacked into
        the Queensland sewage system, altering electronic data in respect of 
        sewerage pumping stations and causing raw sewerage to be discharged 
        into local waterways.
      </p>
      <p>
        You can read more about this fascinating case&nbsp;
        <a href='https://www.queenslandjudgments.com.au/caselaw/qca/2002/164' className='internal-post-link'>here</a>
        &nbsp;but I'll delve more into the offences, charges and how it relates to the 3 categories we've just learnt.
      </p>
      <h4>Offences</h4>
      <ul>
        <li>
          26 counts using restricted computer without consent of controller 
          thereby intending to cause detriment or damage (5 overturned).
          This is considered an unautorised access because he is accessing the
          system via their computer without consent.
        </li>
        <li>
          1 count of using restricted computer without consent of controller 
          intending to cause detriment or damage and causing detriment greater 
          than $5K. Again, this is unauthorised access.
        </li>
        <li>
          1 count of wilfully and unlawfully causing serious environmental harm.
          This isn't really a cybercrime, more so an environmental offence.
        </li>
        <li>
          1 count of stealing a two-way radio
        </li>
        <li>
          1 count of stealing a PDS Compact 500 computer
        </li>
      </ul>

      <h3>Resources</h3>
      <ul>
        <li>https://www.openlearning.com/unswcyber/courses/security-engineering-22t1/law/podcast/ep7/?cl=1</li>
        <li>https://www.queenslandjudgments.com.au/caselaw/qca/2002/164</li>
      </ul>
    </Container>
  )
}

export default CybercrimePage