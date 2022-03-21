import React, { useEffect } from 'react'
import { Container } from '@mui/material'

import KaliGuide_1 from '../assets/KaliGuide/KaliGuide_1.png'
import KaliGuide_2 from '../assets/KaliGuide/KaliGuide_2.png'
import KaliGuide_3 from '../assets/KaliGuide/KaliGuide_3.png'
import KaliGuide_4 from '../assets/KaliGuide/KaliGuide_4.png'
import KaliGuide_5 from '../assets/KaliGuide/KaliGuide_5.png'

const SettingUpKaliLinuxPage = () => {
  document.title = "Cookies.sh | Setting Up Kali";
  window.scrollTo(0, 0);

  return (
    <Container style={{ color: '#ffffff' }}>
      <h1 className='post-title'>Setting Up Your Kali Linux Virtual Machine</h1>
      <p>
        Ever wondered what a security professional uses at work? In this
        guide, I'll walk you through the basics of setting up your very own
        virtual hacking station.
      </p>

      <h2>Getting Started</h2>
      <p>
        We're going to get aquainted with a common tool used for virtual
        machines {'\u2013'} Virtual Box. Then we're going to run through how
        to install Kali in Virtual Box.
      </p>

      <h3>Installing VirtualBox</h3>
      <ol>
        <li>
          Go to the official VirtualBox website which is located at {'\u0020'}
          <a href='https://www.virtualbox.org/wiki/Downloads'
            className='internal-post-link'>
            https://www.virtualbox.org/wiki/Downloads
          </a>
        </li>
        <li>
          Depending on your machine, you need to select the appropriate
          platform package
          <div className='image-container'>
            <img src={KaliGuide_1} width='600px' height='400px'></img>
          </div>
        </li>
        <li>
          Once downloaded, launch the program and follow the installation guide.
        </li>
      </ol>

      <h3>Installing Kali Linux</h3>
      <ol>
        <li>
          Go to the official Kali Linux website which is located at {'\u0020'}
          <a href='https://www.kali.org/get-kali/'
            className='internal-post-link'>
            https://www.kali.org/get-kali/
          </a>
        </li>
        <li>
          Don't be intimidated by the selection because you will only
          be concerned with the <strong>Virtual Machines</strong> platform.
        </li>
        <li>
          Since we are using Virtual Box, you're going to want to select
          Virtual Box download button (64 bit or 32-bit is dependant on
          the kind of machine you have)
          <div className='image-container'>
            <img src={KaliGuide_2} width='500px' height='500px'></img>
          </div>
        </li>
        <li>
          After the download is complete, and you unzip the package, you
          can now move on to installing it in VirtualBox.
        </li>
      </ol>

      <h3>Adding Kali to VirtualBox</h3>
      <ol>
        <li>
          Launch VirtualBox. You should see a default menu there with
          some settings at the top. Select the option that says
          <strong> New</strong>. This will prompt you to select a Virtual
          Machine that you want to deploy.
        </li>
        <li>
          Enter the name as "Kali", set type to "Linux" and set version
          to "Debian (64 bit)". You can change the bits to suit your
          machine.
        </li>
        <li>
          Next we want to set our memory size. This is totally dependent
          on how much RAM you are willing to spare but the minimum should
          at least be 2048MB.
        </li>
        <li>
          Next, select "Create a virtual hard disk now.
        </li>
        <li>
          Set the Hard Disk File Type as "VDI (VirtualBox Disk Image)".
        </li>
        <li>
          For Storage on Physical Hard Disk, you can go with the default
          option which is "Dynamically Allocated".
        </li>
        <li>
          In File Location and Size, select the path of the Kali image we
          installed earlier. Navigate to where you downloaded Kali and
          inside that folder you should see a file called
          <strong> Kali-Linux-2021.2-virtualbox-amd64.vbox</strong>.
        </li>
        <li>
          Next, you are asked how much of memory do you want to allocate
          for Kali. Again, this is completely dependant on how much memory
          you are willing to use. However, go with a reasonable amount
          cause you might end up running out of space after continued
          usage.
        </li>
        <li>
          Finally, hit the Create button and you should be good to go.
          You should see something like the image below.
          <div className='image-container'>
            <img src={KaliGuide_3}></img>
          </div>
        </li>
      </ol>

      <h3>Launching Kali Linux</h3>
      <p>
        Now that you have sucecssfully set up Kali, it's time to play around
        with it a little.
      </p>
      <ol>
        <li>
          Double click Kali in VirtualBox and it should launch.
          Alternitively, you can click once and select Start from the settings in
          the top.
        </li>
        <li>
          Wait for the VM to boot up. Once you are at the login screen,
          use the default login credentials to gain access. <br></br>
          Username: kali <br></br>
          Password: kali
        </li>
      </ol>
      <p>
        Please do not use this default user profile for anything you do in
        Kali. Take some time to set up an alternate account with your own
        username and password.
      </p>
      <ol>
        <li>
          Once you are logged in, open the terminal and use the following
          command to make a new user <br></br>
          <pre><code>useradd [USERNAME]</code></pre>
        </li>
        <li>
          Next set a password for the new user you have created <br></br>
          <pre><code>passwd [USERNAME]</code></pre>
          When typing in your password,
          you should not see anything change on the screen. This is normal
          behaviour. Hit enter and you should see a line that says <br></br>
          <pre><code>passwd: all authentication tokens updated successfully.</code></pre>
        </li>
        <li>
          Next, we want to give sudo permissions to the new user. Sudo
          permissions basically allows the user to run commands as a root
          user. Type in <br></br>
          <pre><code>sudo usermod -aG sudo [USERNAME]</code></pre>
          and the default kali password when prompted.
        </li>
        <li>
          To verify that you did this properly, you can switch users using
          the command <br></br>
          <pre><code>su [USERNAME]</code></pre>
        </li>
        <li>
          Type in your password and you should be logged in.
          <div className='image-container'>
            <img src={KaliGuide_4}></img>
          </div>
        </li>
        <li>
          Verify that you have sudo priviledges by running <br></br>
          <pre><code>sudo echo "Hello World!"</code></pre>
          If everything has been set up right, you should see an output
          saying "Hello World!".
        </li>
        <li>
          Now we want to disable easy access to that default kali account.
          There are 2 ways to do this, you can either remove the kali user
          completely, or you can just change its password. I prefer to do
          the latter. Use the following commands
          <div className='image-container'>
            <img src={KaliGuide_5} width='550px' height='350px'></img>
          </div>
        </li>
      </ol>
      <p>
        Congratulations, you have successfully set up your own Kali
        Virtual Machine and can now do all kinds of cool hacking things.
        Remember that when you want to login in the future, use the new user
        you created and that the kali default password has changed. If at
        any time, you get stuck or are confused with something, just remember...
        Google's your best friend.
      </p>

      <h3>Resources</h3>
      <ol>
        <li><a className='internal-post-link' href='https://www.kali.org/docs/virtualization/install-virtualbox-guest-vm/'>Installing Kali on VirtualBox</a></li>
        <li><a className='internal-post-link' href='https://www.tecmint.com/add-users-in-linux/'>Adding Users in Linux</a></li>
        <li><a className='internal-post-link' href='https://www.lifewire.com/how-to-change-your-user-password-in-linux-4694406'>Changing Passwords in Linux</a></li>
        <li><a className='internal-post-link' href='https://itsfoss.com/add-sudo-user-ubuntu/'>Giving sudo privileges to user</a></li>
      </ol>

      <h2 className='post-title'>Have Fun!!</h2>

    </Container>
  )
}

export default SettingUpKaliLinuxPage