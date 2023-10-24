import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center' style={{width:'100%',height:'450px',marginTop:'100px',backgroundColor:'#33363D'}}> 
    <div className='footer d-flex justify-content-evenly'>
      <div className="website d-flex flex-column " style={{width:'300px'}}>
      <h5> <i className="fa-solid fa-upload "></i>{' '}
      Media Player</h5>
      
      </div>
      <div className="link  d-flex flex-column " style={{width:'300px'}}>
        <h5>Links</h5>
      <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landingpage</Link>
      <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home</Link>
      <Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}}>watch History</Link>
       </div>
      <div className="guide d-flex flex-column " style={{width:'300px'}}>
        <h5>Guides</h5>
        <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}>React</Link>
      <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white'}}>React bootstrap</Link>
      <Link to={'https://www.w3schools.com/react/react_router.asp'} style={{textDecoration:'none',color:'white'}}>Routing</Link>
      </div>
        </div>
      <div style={{marginTop:'50px'}}>
      <p> 

© Media Player 2023 ® </p>
      </div>
        </div>
  )
}

export default Footer