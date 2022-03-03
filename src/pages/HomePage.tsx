import React from 'react';
import { Container, Card, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import getPosts from './PostsData';
import '../style/HomePageStyle.css'

const HomePage = () => {
    document.title = "Cookies.sh"; 

    const posts = getPosts();   

    return (
        <Container maxWidth='md'>
            <h1 id='home-title'>Welcome to Cookies</h1>
            <p id='home-description'>
                This Something Awesome project is conducted as part of the 
                Extended Security Engineering course at UNSW. While I aim to
                provide as much detail as possible in some of these articles,
                I cannot guarantee that 100% of it will be completely accurate.
            </p>
            <br></br>
                
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', flex: 2}}>
                {posts.map((post) => (
                    <Grid  xs={9} md={5} sx={{paddingBottom: {xs: 5}}}>
                        <Link to={`/post/${post.id}`} style={{ textDecoration: 'none'}}>
                            <Card sx={{}}>
                                <h3>{post.tag}</h3>
                                <h1>{post.title}</h1>
                                <p>{post.description}</p>
                            </Card> 
                        </Link>
                    </Grid>
                ))}
            </div>
        </Container>
    )
}

export default HomePage