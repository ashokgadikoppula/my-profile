import React from 'react';
import { Badge, Button, Card, ListGroup } from 'react-bootstrap';
import './aboutme.css';
import profilePic from './images/ashokg.jpeg';
function aboutMe() {

  const onContactClick = (e) => {
    window.open('mailto:ashokgadikoppula@gmail.com?subject=Hello Ashok');
    e.preventDefault();
  }
  return (
    <div className='about_me'>
      <Card className='about_me_card'>
        <Card.Img className='my_pic' variant="top" src={profilePic} />
        <Card.Body>
          <Card.Title>Ashok Gadikoppula
            <div className='sub-title'>MERN stack developer <b>@ADP</b></div>
          </Card.Title>
          <div>
            Hyderabad, Telangana, India
          </div>

          <Button className='contact-button' variant="primary" onClick={onContactClick}>Contact me</Button>

          <Card className='card'>
            <Card.Body>
              <Card.Title>About me

              </Card.Title>
              <div>
                <ListGroup>
                  <ListGroup.Item>Having experience in full stack Web application development in open source technologies</ListGroup.Item>
                  <ListGroup.Item>Have been writing maintainable, readable, reliable and quality code in different languages like Ruby, Java, JavaScript, Objective-C, and having Extensive experience in React.js, Node.js, Express.js, Angular,  MEAN, MERN, bootstrap, material-ui.</ListGroup.Item>
                  <ListGroup.Item> Developed RESTful APIs and consuming third party APIs into app.</ListGroup.Item>
                  <ListGroup.Item>Being a problem solver, have been finding solutions and implementing irrespective of language & technology. Having experience with Amazon Web services (S3 and, EC2)</ListGroup.Item>
                  <ListGroup.Item>Extensive experience with source code management tools (Git and SVN). Having a good understanding of agile methodology and overall SDLC process.</ListGroup.Item>
                  <ListGroup.Item>Proficient in requirement gathering, Jira management, sprint planning.</ListGroup.Item>
                  <ListGroup.Item>Having strong knowledge in databases MongoDB(Certified), MySQL. </ListGroup.Item>
                  <ListGroup.Item>Quick learner and excellent team player, ability to meet tight deadlines and work under pressure. </ListGroup.Item>
                </ListGroup>
              </div>
            </Card.Body>
          </Card>

          <Card className='card'>
            <Card.Body>
              <Card.Title>Skills

              </Card.Title>
              <div>
                <Badge bg="secondary">
                  JavaScript
                </Badge>{' '}
                <Badge bg="secondary">
                  Node.js
                </Badge>{' '}
                <Badge bg="secondary">
                  React.js
                </Badge>{' '}
                <Badge bg="secondary">
                  Express.js
                </Badge>{' '}
                <Badge bg="secondary">
                  MongoDB
                </Badge>{' '}
                <Badge bg="secondary">
                  Serverless
                </Badge>{' '}
              </div>
            </Card.Body>
          </Card>

          <Card className='card'>
            <Card.Body>
              <Card.Title>Experience

              </Card.Title>
              <div>
                9+ years of web development experience on technologies like Node, Angular, React. Proficient in requirement gathering, sprint planning, design, coding, deploying and maintaining, quick learner and excellent team player. Holding B1/B2 Visa.
              </div>
            </Card.Body>
          </Card>

          <Card className='card'>
            <Card.Body>
              <Card.Title>Education

              </Card.Title>
              <div>
                <h5>MCA</h5>
                <h6>Sreenidhi Institute of  Science and Technology</h6>
                <h5>Bsc Computer Science</h5>
                <h6>Kakatiya University</h6>
              </div>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </div>
  )
}

export default aboutMe;
