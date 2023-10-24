
import { BASE_URL } from './baseURL';
import { commonAPI } from './commonAPI';

// uploading video

export const uploadVideo = async (video)=>{
    // post to http://localhost:4000/videos for adding videos in json server and return response to add component
    return await commonAPI("POST",`${BASE_URL}/videos`,video)
}


// get all videos from json server

export const getAllVideos = async ()=>{
    // http get request to http://localhost:4000/videos for getting videos from json server and return response to view component
    return await commonAPI("GET",`${BASE_URL}/videos`,"")
}


export const getAVideo = async (id)=>{
    // http get request to http://localhost:4000/videos for getting videos from json server and return response to vidoe card component
    return await commonAPI("GET",`${BASE_URL}/videos/${id}`,"")
}

export const deleteAVideo = async (id)=>{
    // http get request to http://localhost:4000/videos for getting videos from json server and return response to vidoe card component
    return await commonAPI("DELETE",`${BASE_URL}/videos/${id}`,{})
}

// insert videos in watch history
export const addToHistory = async(videoHistory)=>{
    // http post request to http://localhost:4000/history for adding video history to json server and return response to VideoCard
    return await commonAPI("POST",`${BASE_URL}/history`,videoHistory)
}

// get  video watch history from json server
export const getHistory = async()=>{
    // http get request to http://localhost:4000/history to get video history to json server and return response to watchhistory
    return await commonAPI("GET",`${BASE_URL}/history`,"")
}


// adding category
export const addCategory = async (body)=>{
    // post to http://localhost:4000/categories for adding category in json server and return response to category component
    return await commonAPI("POST",`${BASE_URL}/categories`,body)
}

export const getAllCategory = async ()=>{
    // post to http://localhost:4000/categories for adding category in json server and return response to category component
    return await commonAPI("GET",`${BASE_URL}/categories`,"")
}

export const deleteCategory = async (id)=>{
    // http get request to http://localhost:4000/categories/id for deleting videos from json server and return response to category component
    return await commonAPI("DELETE",`${BASE_URL}/categories/${id}`,{})
}

// update category from json server
export const updateCategory = async (id,updatedCategory)=>{
    // http put request to http://localhost:4000/categories/id for updating existing category from json server and return response to category component
    return await commonAPI("PUT",`${BASE_URL}/categories/${id}`,updatedCategory)
}

export const deleteHistory = async (id)=>{
    // http get request to http://localhost:4000/history/id for deleting history from json server and return response to category component
    return await commonAPI("DELETE",`${BASE_URL}/history/${id}`,{})
}
