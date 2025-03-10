import { Col, Container, Row, Button } from 'react-bootstrap';
const Intro = () => {
    return (
        <div className='intro'>
            <Container className="text-white d-flex justify-content-center text-center  align-items-center">
                <Row>
                    <Col>
                        <div className='tittle'>Nonton Gratis</div>
                        <div className='tittle'>Gak Pake Karcis</div>
                        <div className='IntroButton mt-4 text-center'>
                            <Button variant="dark">Lihat Semua List</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro