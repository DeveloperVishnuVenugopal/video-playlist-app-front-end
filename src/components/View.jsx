import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import VIdeocard from "./VIdeocard";
import { getVideos } from "../services/allApi";

function View({serverRes}) {

  const [deleteStatus,setDeleteStatus]= useState(false)
  const handleDeleteStatus = (res)=>{
    setDeleteStatus(res)
  }
  const [allVideos, setallVideos] = useState([])
  const getallVideo = async () => {
    const response = await getVideos()
    setallVideos(response.data);
  }
  // console.log(allVideos)
  useEffect(() => {
    getallVideo()
  }, [serverRes,deleteStatus])


  return (
    <div className="border p-3 rounded">
      <Row>
        {
          allVideos?.map((video) =>(
            //  index & key={video.id || index}
          <Col className="ps-3 mb-3" sm={12} md={6}  >
            
            <VIdeocard card={video} handleDeleteStatus={handleDeleteStatus} /> 
            
          
          </Col>
        ))
        }
      </Row>
    </div>
  )
}

export default View;
