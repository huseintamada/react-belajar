import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import antmanImage from '../assets/images/superhero/antman.jpg'
import avangerImage from '../assets/images/superhero/avenger.jpg'
import batmanImage from '../assets/images/superhero/batman.jpg'
import robinhoodImage from '../assets/images/superhero/robinhood.jpg'
import spidermanImage from '../assets/images/superhero/spiderman-cover.jpg'
import supermanImage from '../assets/images/superhero/superman.jpg'

const Superhero = () => {
    return (
        <div>
            <Container>
                <br />
                <h2 className='text-center'>Superhero</h2>
                <br />
                <Row>
                    <Col md={4} className='movieWrapper' id='superhero'>
                        <Card className="movieImage">
                            <Image src={antmanImage} alt="Dune Movies" className='images' />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className='text-center'>Antman</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={avangerImage} alt="Dune Movies"  className='images' />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className='text-center'>Avanger</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={batmanImage} alt="Dune Movies"  className='images' />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className='text-center'>Batman</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={robinhoodImage} alt="Dune Movies"  className='images' />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className='text-center'>Robinhood</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={spidermanImage} alt="Dune Movies"  className='images' />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className='text-center'>Spiderman</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={supermanImage} alt="Dune Movies"  className='images' />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className='text-center'>Superman</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Superhero