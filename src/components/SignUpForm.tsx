import { useRef, useState } from "react"
import { Container, Button, Card, Form } from "react-bootstrap"

const SignUpForm = () => {
    const [showError,setShowError] = useState(false)
    const [isValid, setIsValid] = useState(false)
    const emailRef = useRef<HTMLInputElement>(null) 
    const passwordRef = useRef<HTMLInputElement>(null) 
    const passwordConfirmRef = useRef<HTMLInputElement>(null) 

    const handleOnSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        const data = new FormData(event.target)
        console.log(Object.fromEntries(data.entries()))
    }

    const onHandleChange = () => {
        if (!passwordConfirmRef.current?.value || !emailRef.current?.value ) return
        if (passwordRef.current?.value === passwordConfirmRef.current?.value) {
            setShowError(false)
            setIsValid(true)
            return
        }
        setShowError(true)
        setIsValid(false)
    }
    
    return <Container fluid className='d-flex align-items-center justify-content-center bg-image' >
        <Card className='m-4' style={{ minWidth: '450px' }}>
            <Card.Body className='px-5'>
                <h2 className="text-uppercase text-center mb-4">Create an account</h2>
                <Form onSubmit={handleOnSubmit} 
                    onChange={onHandleChange}
                >

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email"
                            ref={emailRef}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" ref={passwordRef} />
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control name='password2' type="password" placeholder="Password" ref={passwordConfirmRef}  />
                    </Form.Group>
                    <div className="m-2" style={{ height:'1rem'}}>
                    {showError && <Form.Text className=" text-danger ">
                        *Password and Confirm Password does not match.
                    </Form.Text>}
                    </div>
                    <Button type="submit" className='mb-4 mt-2 w-100 gradient-custom-4' size='lg' disabled={!isValid}>Register</Button>
                </Form>
              
            </Card.Body>
        </Card>
    </Container>
}

export default SignUpForm