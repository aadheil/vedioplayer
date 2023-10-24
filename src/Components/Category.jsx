import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAVideo, getAllCategory, updateCategory } from '../services/allAPI';
import VideoCard from './VedioCard'

function Category() {
  const[categories,setcategories]=useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[categoryvalue,setcategoryvalue]=useState("")

  const insertCategory = async()=>{
    if(categoryvalue){
      let body={
        categoryvalue,allVideos:[]
      }
      // make api call
     const response= await addCategory(body)
    if(response.status>=200 && response.status<=300){
      // reset state
      setcategoryvalue("")
      // modal hide
      handleClose()
      // call get catogery view
      getCategorieview()
      
      toast.success("Category Added Successfully")

    }
    else{
      toast.warning("Uploading Error!!! Please try after some time...")
    }
    }
    else{
      toast.error("Please Enter Category Name")
    }

  }



  const getCategorieview = async()=>{
    const {data}=await getAllCategory()
    setcategories(data)

  }

  useEffect(()=>{
    getCategorieview()
  },[])


  const deleteACategory=async(id)=>{
  await deleteCategory(id)
  getCategorieview()
  }

  const dragOverCategory=(e)=>{
    //  console.log("Dragging over Category");
     e.preventDefault()
  }

  const videoDrop=async(e,categoryId)=>{
    console.log("Inside Drop Function");
    // console.log("Category ID: "+categoryId);
    const viedocardId=e.dataTransfer.getData("cardId")
    // console.log("Video Card Id:"+viedocardId);
    
    // get a viedo details
    const {data}=await getAVideo(viedocardId)
    let selectedCategory=categories.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)
    // console.log(selectedCategory);
    await updateCategory(categoryId,selectedCategory)
    getCategorieview()


  }

  return (
    <>
    <div className='d-grid'>
      <button onClick={handleShow} className='d-grid btn btn-primary'>Add Category</button>
      </div>
       
       {
        categories?categories.map(item=>(
          <div className='border p-3 rounded mt-3 mb-3' droppable onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
            <div className='d-flex justify-content-between'>
              <h5 className=''>{item?.categoryvalue}</h5>
              <button className='btn' onClick={()=>deleteACategory(item?.id)}><i className='fa-solid fa-trash text-danger'></i></button>
              </div> 
              <Row>
                {
                  item?.allVideos&&item?.allVideos.map(card=>(
                    <Col sm={12} className='p-1 mb-2'>
                      <VideoCard displayData={card} insideCategory={true}></VideoCard>
                    
                    </Col>
                  ))
                }
              </Row>
              </div>
        )): <p className='fw-bolder fs-5 text-danger mt-3'>Oops!!! nothing to display</p>

       }
    

      <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        // keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Category Details" onChange={(e)=>setcategoryvalue(e.target.value)} />
      </Form.Group>
      
      </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary"  onClick={insertCategory} >Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      </>
  )
}

export default Category