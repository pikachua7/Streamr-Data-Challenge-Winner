import React, { Component } from 'react'
import "./ProfileBox.css";
import { Card, CardDeck } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <div className="Cards">
                <CardDeck>
                    <Card>
                        <Card.Body style={{backgroundColor:"rgb(83, 81, 81)"}}>
                        <Card.Title>Atharva Paliwal</Card.Title>
                        <Card.Text >
                        I am currently pursuing Computer Science and Engineering from Shri Ramdeobaba College of Engineering and Management.
                        My interests lies in backend programming, Django and Blockchain.   
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">III Year B.Tech CSE</small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Body style={{backgroundColor:"rgb(117, 116, 116)"}}>
                        <Card.Title>Ritul Deshmukh</Card.Title>
                        <Card.Text>
                            I am currently pursuing Computer Science and Engineering from Shri Ramdeobaba College of Engineering and Management. My special interest lies in Agile Development and Project Management in Software Engineering.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">III Year B.Tech CSE</small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Body style={{backgroundColor:"rgb(117, 116, 116)"}}>
                        <Card.Title>Rishikesh Kale</Card.Title>
                        <Card.Text>
                            I am a Blockchain Developer intern at Digilocker,India and an avid learner. 
                            I am pursuing Computer Science Engineering from Shri Ramdeobaba College of
                            Engineering and Management Nagpur.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">III Year B.Tech CSE</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body style={{backgroundColor:"rgb(83, 81, 81)"}}>
                        <Card.Title>Yash Roy</Card.Title>
                        <Card.Text>
                        I am a III Year student pursuing B.tech in Computer Science and Engineering from Shri Ramdeobaba College of Engineering and Management.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">III Year B.Tech CSE</small>
                        </Card.Footer>
                    </Card>
                    </CardDeck>
            </div>
        )
    }
}

export default About
