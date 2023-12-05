import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
function BackgroundCard() {
    return (
        <div>
            <Card style={{ display: 'flex', flexDirection: 'row', height: '35%' }}>
                <Card.Body style={{ background: "#deedd6" }}>
                    <Card.Title style={{ fontSize: "2.5em", fontWeight: "bold" }}>Order groceries for delivery <br /> or pickup today</Card.Title>
                    <Card.Text style={{ fontSize: "1em" }}>
                        Whatever you want from local stores, brought right to your door.
                    </Card.Text>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control size="lg" type="text" placeholder="   Enter your address" />
                        </Form.Group>
                    </Form>
                </Card.Body>
                <Card.Img style={{ width: '70%', height: '300px'  }} variant="bottom" src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" />
            </Card>
        </div >
    )
}

export default BackgroundCard;