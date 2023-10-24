import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Landingpage() {
  const navigateByUrl = useNavigate()
  const navigate=()=>{
    navigateByUrl('/home')


  }
  return (
    <>
    <div className='d-flex' style={{backgroundColor:'black'}}>
      <div style={{marginLeft:'90px',marginTop:'150px'}}><h1>Welcome <span className='text-success'>Media Player</span> </h1>
      <p><b>Where user can manage their favorite videos.</b>User can upload any <br />
      youtube videos by copy and paste their URL.veedio.com will allow to <br />
      add and remove their uploaded videos and also arrange them in <br />
      different categories by drag and drop. Its free,try it now!</p>
      <div>
        <button type='button' onClick={navigate} className='btn btn-success'>Click here to know more!!!</button>
      </div>
      </div >
      <div style={{marginLeft:'400px',marginTop:'60px'}}>
        <img  style={{width:'400px',height:'400px'}} src='https://media.giphy.com/media/3o6gDP9oLOGtBMMBSU/giphy.gif'/>
      </div>



    </div>
    {/* card */}
    <div className='d-flex p-5 justify-content-evenly'>
      <div className='card1'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-vector/influencer-recording-new-video_23-2148527131.jpg?w=1060&t=st=1695963735~exp=1695964335~hmac=dcec313e92f3df57b20fcafc41feba6e4e0cb67eeccdf2992003dec3f2660ece" style={{width:'100%',height:'190px'}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>

    <div className='card2'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/hand-with-marker-drawing-picture_1134-297.jpg?w=1060&t=st=1695963880~exp=1695964480~hmac=1bf71138cf62d71ebc745e408d5f4ad55e27818b9d433cab8d1ef62dbd60de90" style={{width:'100%',height:'190px'}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>

    <div className='card3'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/play-button-media-player-podcast-graphic_53876-121173.jpg?w=1060&t=st=1695963946~exp=1695964546~hmac=e2cb8237345de1bc5086e94788790241b93efa88594afb8883392b3a8fcbf717" style={{width:'100%',height:'190px'}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>

    <div className='card3'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/R.391d866f6cfcc3b6c2d36f52daa5d6f7?rik=YH42pD7bgBknAw&riu=http%3a%2f%2fmedia.giphy.com%2fmedia%2fVw3k4Vro0Q5KE%2fgiphy.gif&ehk=GLUG%2fzkQe75rp3hA86Krv1Jh9knyHuNpcMYns8zXWo8%3d&risl=&pid=ImgRaw&r=0" style={{width:'100%',height:'190px'}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
      </div>
   
    </>
  )
}

export default Landingpage