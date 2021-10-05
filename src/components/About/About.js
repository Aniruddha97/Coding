import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';

const About = () => {

const colortext ={colortext:"indigo"} 
    const color={color:"blue"};

    return (
        <div>
            <Container>
            <br />
            <h1 style={colortext}>Leaders</h1>
            <br />
            <h3 style={color}>Coding-school is lead by some expert teachers, working full time in Online. It also receives advices from people all over the world.</h3>
            <br />
            <h1>Meet the Leaders</h1>
            <p style={color}>Coding-school's leaders working hards for the students to creat experts. Who are eligible to rule the future world.</p>
            <br />
            <CardGroup>
                <Card className="p-2 mb-4">
                <Card.Img variant="top" src="https://www.unr.edu/main/images/colleges-schools/engineering/cse/profiles/TinNguyen.jpg" />
                <Card.Body>
                    <Card.Title>Tin Nguyan</Card.Title>
                    <Card.Text>
                    Tin Nguyan started with web development by making sites with WordPress
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card className="p-2 mb-4">
                <Card.Img variant="top" src="https://cdn.goodgallery.com/90b07b15-73b9-42df-81c9-d243f486f3a6/r/0300/2fdqu1ua/young-professional-headshot.jpg" />
                <Card.Body>
                    <Card.Title>Erik Vaughn</Card.Title>
                    <Card.Text>
                    Erik studied art in college and did programming on the side to pay for his education.{' '}
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card className="p-2 mb-4">
                <Card.Img variant="top" src="https://production-clubhouse-avatars.s3.amazonaws.com/1774200900_5429e24a-fab3-4910-9a45-b07dfd849275" />
                <Card.Body>
                    <Card.Title>Luna Ruan</Card.Title>
                    <Card.Text>Luna learned programming because she thought it meant creating video games.</Card.Text>
                </Card.Body>
                </Card>
                </CardGroup>
            </Container>
        </div>
    );
};

export default About;