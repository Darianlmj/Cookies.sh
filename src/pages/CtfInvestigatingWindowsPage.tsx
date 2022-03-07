import React from 'react'
import { Container } from '@mui/material'
import Pic_1 from '../assets/InvestigatingWindows/Pic_1.png';
import Pic_2 from '../assets/InvestigatingWindows/Pic_2.png';
import Pic_3 from '../assets/InvestigatingWindows/Pic_3.png';
import Pic_4 from '../assets/InvestigatingWindows/Pic_4.png';
import Pic_5 from '../assets/InvestigatingWindows/Pic_5.png';
import Pic_6 from '../assets/InvestigatingWindows/Pic_6.png';
import Pic_7 from '../assets/InvestigatingWindows/Pic_7.png';
import Pic_10 from '../assets/InvestigatingWindows/Pic_10.png';

const CtfInvestigatingWindowsPage = () => {
  return (
    <Container style={{color: '#ffffff'}}>
      <h1>
        Investigating Windows Page
      </h1>
      <p>
        This challenge was sourced from {'\u0020'}
        <a href='https://tryhackme.com/room/investigatingwindows' style={{textDecoration: 'none'}}> 
          TryHackMe 
        </a>
        {'\u0020'} and is a very interesting forensics challenge to someone who uses a Mac.
      </p>
      <p>
        The premise: This is a challenge that is exactly what is says on the 
        tin, there are a few challenges around investigating a windows machine 
        that has been previously compromised.
        <br></br>
        <br></br>
        Connect to the machine using RDP. The credentials the machine are as 
        follows:
        <br></br>
        <br></br>
        Username: Administrator
        <br></br>
        Password: letmein123!
      </p>
      <p>
        There are quite a few questions here that we weill attempt to get 
        through together.
      </p>

      <h3>Question 1</h3>
      <p><strong>What's the version and year of the windows machine?</strong></p>
      <p>Windows Server 2016</p>
      <p>
        This was a simple starting point into the challenge. All we have to do
        is go to the Windows Setting and look for the About panel.
        <br></br>
        <br></br>
        <img src={Pic_2} width="450px" height="250px"></img>
      </p>

      <h3>Question 2</h3>
      <p><strong>Which user logged in last?</strong></p>
      <p>Administrator</p>
      <p>
        I was stumped by this at first. The hint was less than useful so I had
        to do some Googling to find out that Windows has something called an
        Event Viewer. Typing this in the Search Bar and opening up the app, there
        are four folder which you can see in the image (Custom Views, Windows
        Logs, Applications and Services and Subsriptions). Now Windows Logs sounds
        l;ike what we are looking for. Expanding that we get a few files and among
        those, Security seemed like a good bet.
        <br></br>
        <br></br>
        Investigating the log, we can see that we picked the right log because
        there are a few "Login" categories listed there. Since there will be a 
        log when we initially booted up the machine, we just need to find the
        next Login log. That will give us info that Administrator logged in last.
        <br></br>
        <br></br>
        <img src={Pic_3} width="700px" height="500px"></img>
      </p>

      <h3>Question 3</h3>
      <p><strong>When did John log onto the system last?</strong></p>
      <p>03/02/2019 5:48:32 PM</p>
      <p>
        Again, this question confused me, but at least this time, the hint
        helped me by pointing out that I could use the command prompt. I figured
        that there had to be a command that would easily give me this information.
        Doing a quick google search for "How to get last login info from user 
        in command prompt". This gave me the command I needed which was 
        <code> net user John</code>
        <br></br>
        <br></br>
        <img src={Pic_4} width="450px" height="450px"></img>
      </p>

      <h3>Question 4</h3>
      <p><strong>What IP does the system connect to when it first starts?</strong></p>
      <p>10.34.2.3</p>
      <p>
        This one was easy, since the command propmt opened up by itself upon 
        starting the machine. Easy points!
        <br></br>
        <br></br>
        <img src={Pic_1} width="450px" height="150px"></img>
      </p>

      <h3>Question 5</h3>
      <p><strong>What two accounts had administrative privileges (other than the Administrator user)?</strong></p>
      <p>Jenny, Guest</p>
      <p>
        I wasn't really familiar with Windows and how they displayed admins and 
        other users in their file system so I didn't bother checking there.
        Instead, I just ran 
        <code> net user </code>
        which gave me a list of users in the system. Luckily, there weren't that
        many users so I could just brute force different combinations and that
        gave me the answer.
        <br></br>
        <br></br>
        <img src={Pic_5} width="650px" height="150px"></img>
      </p>

      <h3>Question 6</h3>
      <p><strong>WWhats the name of the scheduled task that is malicous.</strong></p>
      <p>Clean file system</p>
      <p>
        This had no hints or context whatsoever so I was stuck for a bit trying
        to figure out what to do. I took a chance with googling "How to see 
        scheduled tasks on Windows" which gave me info that there was an app
        called Task Scheduler. Opening that up, I saw a task scheduler library 
        folder in which there was a task called "Clean file system" which was set
        to execute a very sus action everyday at 4.55pm. There was also another
        task name "Game Over" which was also sus... but that's a problem for 
        another question.
        <br></br>
        <br></br>
        <img src={Pic_6} width="950px" height="600px"></img>
      </p>

      <h3>Question 7</h3>
      <p><strong>What file was the task trying to run daily?</strong></p>
      <p>nc.ps1</p>
      <h3>Question 8</h3>
      <p><strong>What port did this file listen locally for?</strong></p>
      <p>1348</p>
      <p>
        The answer for questions 7 and 8 can be found based on the image above
        <br></br>
        <br></br>
      </p>

      <h3>Question 9</h3>
      <p><strong>When did Jenny last logon?</strong></p>
      <p>Never</p>
      <p>
        Similar to the question about John's last login, I used the command 
        <code> net user Jenny</code>
        <br></br>
        <br></br>
        <img src={Pic_7} width="450px" height="550px"></img>
      </p>

      <h3>Question 10</h3>
      <p><strong>At what date did the compromise take place?</strong></p>
      <p>03/02/2019</p>
      <p>
        This was a hard one. Firstly, I assumed that the question was asking
        about the "Clean file system" task that we saw earlier. But looking back
        at it, I couldn't really find any info on when the task was created. But
        I noticed that the task "Game Over" is set to execute from 3/2/2019 so 
        I figured that was it.
        <br></br>
        <br></br>
      </p>

      <h3>Question 11</h3>
      <p><strong>At what time did Windows first assign special privileges to a new logon?</strong></p>
      <p>Never</p>
      <p>
        This seems like something that Event Viewer would have logged. Since we
        have the date when the compromise happened, we can essentially filter the
        events to only show stuff that happened on 3/2/2019. From here, I didn't 
        really know what to look out for, so I just kept scrolling, trying to find
        info when I noticed that there were 2 different types of login categories.
        Logon and Special Logon. The special logon info had logged when it assigned
        special privileges to new logon.
        <br></br>
        <br></br>
        <img src={Pic_10} width="750px" height="650px"></img>
      </p>

      <h3>Resources</h3>
      https://www.digitalcitizen.life/first-steps-working-task-scheduler/
    </Container>
  )
}

export default CtfInvestigatingWindowsPage