import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getHistory } from '../services/allAPI'


function WatchHistory() {
 
  // fetch watch-history
  const[historyvideo,sethistoryvideo]=useState([])

 const getWatchHistory = async ()=>{
  const {data} = await getHistory()
  sethistoryvideo(data);
  console.log(historyvideo);

 }

 useEffect(()=>{
  getWatchHistory()
},[])

const deleteanhistory=async(id)=>{
  await deleteHistory(id)
  getWatchHistory()
}

  return (
    <>
    <div className='d-flex justify-content-between mt-5 mb-5 container align-items-center '>
      <h3 >Watch History</h3>
      <Link to={'/home'} className='d-flex align-items-center' style={{textDecoration:'none',fontSize:'20px'}} ><i className='fa-solid fa-arrow-left'></i>Back t Home</Link>
      
    </div>

    <div  className='border p-5 container rounded mt-5 mb-5 '>
      <table className='table' >
        <thead>
          <tr >
            <th style={{color:'white'}} >#</th>
            <th style={{color:'white'}}>Caption</th>
            <th style={{color:'white'}}>URL</th>
            <th style={{color:'white'}}>Time Stamp</th>
            <th style={{color:'white'}}>*</th>
          </tr>
        </thead>

        <tbody>
          {
            historyvideo.length>0?
            historyvideo.map((item,index)=>(
              <tr>
              <td style={{color:'white'}}>{index+1}</td>
              <td style={{color:'white'}}>{item?.caption}</td>
              <td style={{color:'white'}}> <a href={item?.embbedlink} target='_blank'>{item?.embbedlink}</a></td>
              <td style={{color:'white'}}>{item?.timeStamp}</td>
              <td style={{color:'white'}}> <button className='btn' onClick={()=>deleteanhistory(item?.id)}><i className='fa-solid fa-trash text-danger'></i> </button></td>
            </tr>
            ))
            : <p>sorry</p>
         
          }
        </tbody>
      </table>
    </div>
    </>
  )
}

export default WatchHistory