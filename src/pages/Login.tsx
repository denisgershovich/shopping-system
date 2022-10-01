import { Container, Button, Card, Form } from "react-bootstrap"

const Login = () => {
    return <Container fluid className='d-flex align-items-center justify-content-center bg-image' >
        <Card className='m-4' style={{ minWidth: '450px' }}>
            <Card.Body className='px-5'>
                <h2 className="text-uppercase text-center mb-4">Login</h2>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address: </Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email"
                           />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>

                    <div className="m-2" style={{ height: '1rem' }}>
           
                    </div>
                    <Button type="submit" className='mb-4 mt-2 w-100 gradient-custom-4' size='lg' >Register</Button>
                </Form>

            </Card.Body>
        </Card>
    </Container>
}

export default Login