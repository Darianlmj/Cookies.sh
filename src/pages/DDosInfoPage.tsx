import React from 'react'
import { Container } from '@mui/material';
import DDos_1 from '../assets/DDosInfo/DDos_1.png';
import DDos_2 from '../assets/DDosInfo/DDos_2.png';

const DDosInfoPage = () => {
  return (
    <Container maxWidth='md'>
        <div style={{color: '#ffffff'}}>
            <h1 className='post-title'>DDos Attack</h1>

            <h3>What is it?</h3>
            <p>
                A DDos (Distruibuted Denial of Service), is an attack which aims to bring 
                down a target web application by means of flooding it's server with so 
                much traffic that it inevitably shuts down.
            </p>

            <p>
                If you were confused by that initial explanation, allow me to
                clarify your understanding with the use of an example.
            </p>

            <h3>The Scenario</h3>
            <p>
                Imagine you are the owner of an E-commerce store. One day, you
                arrived at the office and tried to access your website but you 
                weren't able to, because for some reason, your website seems 
                to take a really long time to load. Assuming that your engineers
                have done their jobs properly when setting up the various 
                servers and whatnot, you might be experiencing a DDos attack.
                <br></br>
                <br></br>
                To properly understand the basis of a DDos attack, I need to
                walk you through what happens when a user tries to access your
                website.
                <br></br>
                <br></br>
                When you type in a URL, a request is sent through the internet
                to the server where the website is hosted on. This is 
                represented as internet traffic This server will then return a
                copy of the website that you requested and that is what you would
                see on your screen.
                <br></br>
                <br></br>
                <div className='image-container'>
                    <img src={DDos_1} width='100%'></img>
                </div>
                <br></br>
                <br></br>
                When a DDos attack happens, a hacker will utilise a botnet to
                send tons of request to that website which will essentially 
                overload the server with tons of traffic. A botnet is a network
                of computers (with different IP addresses) that is infected with
                malware which allows a hacker to control remotely.
                <br></br>
                <br></br>
                Because there is a ton of traffic that the server has to process,
                this creates a congestion in the flow of traffic and slows down 
                or prevent's a regular user's request from being process. This
                effectively renders your website useless.
                <br></br>
                <br></br>
                <div className='image-container'>
                    <img src={DDos_2} width='100%'></img>
                </div>
            </p>
            
            <h3>How To Identify a DDos?</h3>
            <p>
                The most common symptom of a DDoS attack is a site or service 
                suddenly becoming slow or unavailable. But you do need to 
                investigate further just in case there is an influx of 
                legitimate traffic.
                <br></br>
                <br></br>
                However, here are some of the other symptoms of a DDos attack.
                <ul>
                    <li>Suspicious amounts of traffic originating from a single IP address or IP range</li>
                    <li>A flood of traffic from users who share a single behavioral profile, such as device type, geolocation, or web browser version</li>
                    <li>An unexplained surge in requests to a single page or endpoint</li>
                    <li>Odd traffic patterns such as spikes at odd hours of the day or patterns that appear to be unnatural (e.g. a spike every 10 minutes)</li>
                </ul>
            </p>

            <h3>How to Prevent a DDos?</h3>
            <p>
                Here's a few ways to try and prevent (or at least mitigate a DDos):
                <ul>
                    <li>
                        <strong>Blackhole Routing</strong>
                        <p>
                            In essence, an admin creates a null route 
                            (a blackhole) and reroutes all traffic there which
                            will get dropped by the network.
                        </p>
                    </li>
                    <li>
                        <strong>Rate Limiting</strong>
                        <p>
                            Limiting the number of requests that a server will 
                            accept over a certain time frame. This method will
                            mitigate brute forcing but will not be enough to
                            stop a DDos completely.
                        </p>
                    </li>
                </ul>
            </p>

            <h3>Resources</h3>
            <ul>
                <li>https://www.youtube.com/watch?v=z503nLsfe5s</li>
                <li>https://www.cloudflare.com/en-au/learning/ddos/what-is-a-ddos-attack/</li>
            </ul>
        </div>
    </Container>
  )
}

export default DDosInfoPage