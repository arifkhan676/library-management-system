import React from 'react'
import './home.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import paradoxical from '../../images/PDS.jpg'


const Home = () => {
    return (
        <div>
            <div className="book-card">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={paradoxical} />
                    <Card.Body>
                        <Card.Title>Paradoxical Sajid</Card.Title>
                        <Button variant="primary">Borrow Request</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src='https://th.bing.com/th/id/OIP.tjtAZpCedu3BEyI0Zg9vawHaHa?pid=ImgDet&rs=1' />
                    <Card.Body>
                        <Card.Title>Rich Dad Poor Dad</Card.Title>
                        <Button variant="primary">Borrow Request</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src='https://th.bing.com/th/id/OIP.tjtAZpCedu3BEyI0Zg9vawHaHa?pid=ImgDet&rs=1' />
                    <Card.Body>
                        <Card.Title>Rich Dad Poor Dad</Card.Title>
                        <Button variant="primary">Borrow Request</Button>
                    </Card.Body>
                </Card>
            </div>

        </div>
    )
}

export default Home
