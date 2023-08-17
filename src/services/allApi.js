import {BASE_URL} from "./baseUrl";
import {commonRequest} from "./commonRequest";

// add video
export const addVideo = async (body)=>{
   return await commonRequest("POST",`${BASE_URL}/videos`,body) 
}

// getVideos

export const getVideos = async ()=>{
    return await commonRequest("GET",`${BASE_URL}/videos`,"")
}

// deleteVideos

export const deleteVideos = async (id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/videos/${id}`,{})
}

// addCatogory

export const addCategory = async (body)=>{
    return await commonRequest("POST",`${BASE_URL}/catogories`,body)
}

// getallcategory

export const getallcategory = async ()=>{
    return await commonRequest("GET",`${BASE_URL}/catogories`,"")
}

// deleteCatogory
export const deletecatogory = async (id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/catogories/${id}`,{})
}

// get history
export const gethistory = async ()=>{
    return await commonRequest("GET",`${BASE_URL}/watchhistory`,"")
}

// addhistory
export const addhistory = async (body)=>{
    return await commonRequest("POST",`${BASE_URL}/watchhistory`,body) 
 }

//  geta single video
export const getavideo = async (id)=>{
    return await commonRequest("GET",`${BASE_URL}/videos/${id}`,"")
}

// update category
export const updatecategory = async (id,body)=>{
    return await commonRequest("PUT",`${BASE_URL}/catogories/${id}`,body)
}