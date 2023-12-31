import React, { useEffect, useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import {addToHistory, deleteAVideo} from '../services/allAPI'

function VedioCard({displayData,setdeleteVideoStatus,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  // add video to watch history
  const handleShow = async () => {

    setShow(true);
  // get time stamp for playing the video
  let today= new Date()
  let timeStamp= new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute:'2-digit', second:'2-digit'}).format(today)
  const {caption,embbedlink}=displayData
  const videoHistory={
    caption,embbedlink,timeStamp
  }
// make api call
await addToHistory(videoHistory)
  
  }

  const handleDelete=async(idForDelete)=>{
    
    // alert(idForDelete)
    const response = await deleteAVideo(idForDelete)
    setdeleteVideoStatus(s=>s+1)

   
    // dlAllUloadedVideos(idForDelete)
  }
  // const dlAllUloadedVideos = async(idForDelete)=>{
    // const response = await deleteAVideo(idForDelete)
    // setallVideos(data);
  // }

const dragStarted=(e,id)=>{
   console.log("Drag started..");
  //  console.log(id);
   e.dataTransfer.setData("cardId",id)
}


  return (
    <>
    {displayData &&
    <Card className='mb-3 shadow' style={{height:'290px'}} draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
    <Card.Img onClick={handleShow} variant="top" src={displayData?.url} style={{width:'100%',height:'180px'}} />
    <Card.Body>
      <Card.Title className='d-flex justify-content-between'>
        <h5 className='text-success'>{displayData?.caption}</h5>
        {insideCategory?"":<button className='btn text-danger' onClick={()=>handleDelete(displayData?.id)}>
          <i className='fa-solid fa-trash fs-5'></i>
          </button>}
        </Card.Title>
      
    </Card.Body>
  </Card>}
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width={"100%"} height={"400px"} src={`${displayData?.embbedlink}?autoplay=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
       
      </Modal>
  </>
  )
}

export default VedioCard