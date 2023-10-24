import React, { useEffect, useState } from 'react'
import VideoCard from './VedioCard'
import { Col, Row } from 'react-bootstrap'
import {getAllVideos} from '../services/allAPI'

function View({uploadVideoServerResponse}) {
  const[allVideos,setallVideos]=useState([])
  const[deleteVideoStatus,setdeleteVideoStatus]=useState(0)
  const getAllUloadedVideos = async()=>{
    const {data} = await getAllVideos()
    setallVideos(data);
  }
  useEffect(()=>{
    getAllUloadedVideos()
  },[uploadVideoServerResponse,deleteVideoStatus])
  // console.log(allVideos);
  return (
    <>
    <Row>
      {allVideos.length>0 ?
      allVideos.map(video=>(
        <Col sm={12} md={6} lg={4} xl={3}>

        <VideoCard displayData={video} setdeleteVideoStatus={setdeleteVideoStatus}/>
  
        </Col>

      ))
      : <p className='fw-bolder fs-5 text-danger mt-3'>Oops!!! nothing to display</p>
       
    }
      
      
      
      
    </Row>
    </>
  )
}

export default View