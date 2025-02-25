import React from 'react'
import Button from 'react-bootstrap/Button'

const BootStrapPage = () => {
  return (
    <>
    <Button variant="outline-primary">Primary</Button>
    <Button variant="outline-secondary">Secondary</Button>
    <Button variant="outline-success">Success</Button>
    <Button variant="outline-warning">Warning</Button>
    <Button variant="outline-danger">Danger</Button>
    <Button variant="outline-info">Info</Button>
    <Button variant="outline-light">Light</Button>
    <Button variant="outline-dark">Dark</Button>
    <hr/>
      <button type='button' className='btn btn-primary'>
        Primary
      </button>
      <button type='button' className='btn btn-secondary'>
        Secondary
      </button>
      <button type='button' className='btn btn-success'>
        Success
      </button>
      <button type='button' className='btn btn-danger'>
        Danger
      </button>
      <button type='button' className='btn btn-warning'>
        Warning
      </button>
      <button type='button' className='btn btn-info'>
        Info
      </button>
      <button type='button' className='btn btn-light'>
        Light
      </button>
      <button type='button' className='btn btn-dark'>
        Dark
      </button>
      <button type='button' className='btn btn-link'>
        Link
      </button>
    </>
  )
}

export default BootStrapPage