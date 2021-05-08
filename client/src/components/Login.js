import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import results from '../result'
import result from "../result"
import { response } from "express"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  state = {
    email:''
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const Data = {
      email : this.state.email
    }
    result.post('/marks.json',Data).then(response=>{
      console.log(response);
    })

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/home")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 id = 'history'>Log In to the World of Uno</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <p>Email</p>
              <Form.Control type="email" value = {this.state.email} onChange = {(e)=>this.setState({email: e.target.value})} ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <p>Password</p>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div class = 'toblack'>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div class = 'toblack'>
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}