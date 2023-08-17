import React, { useState } from "react";
import { PlusCircle } from "react-feather";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { addVideo } from "../services/allApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Add({handleRes}) {
  const [uploadData, setUploadData] = useState({
    id: "",
    caption: "",
    thumbnail: "",
    url: "",
  })

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const setInput = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target
    setUploadData({...uploadData, [name]: value })
  }
  // console.log(uploadData);

  const extractUrl = (e) => {
    let youtubeurl = e.target.value
    if (youtubeurl.includes("v=")) {
      let index = youtubeurl.indexOf("v=")
      let videourl = youtubeurl.substring(index+2, index+13)
      let videoData = uploadData
      videoData.url = `https://www.youtube.com/embed/${videourl}`
      setUploadData(videoData)
    }
    // console.log(uploadData);
  }
  const handleAdd = async () => {
    const { id, caption, thumbnail, url } = uploadData
    if (!id || !caption || !thumbnail || !url) {
      toast.warning("Please fill the form completely")
    } else {
      const response = await addVideo(uploadData)

      if (response.status>= 200 && response.status<300) {
        handleRes(response.data);
        console.log(response.data);
        setShow(false);
        toast.success("New video added successfully")
      } else {
        toast.error("provide a unque id")
      }
    }
  }

  return (
    <>
      <div  className="btn" onClick={handleShow} >
        <PlusCircle color="grey" size={60} />
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload A Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FloatingLabel className="mb-3" controlId="floatingid" label="Video Id" >
              <Form.Control type="text" placeholder="Uploading video id" name="id"  onChange={setInput} />
            </FloatingLabel>

            <FloatingLabel className="mb-3" controlId="floatingcaption" label="Video Caption" >
              <Form.Control type="text" placeholder="Uploading Video Caption" name="caption" onChange={setInput} />
            </FloatingLabel>

            <FloatingLabel className="mb-3" controlId="floatingimage" label="Video Cover Image URL" >
              <Form.Control type="text" placeholder="Video Cover image url"
               name="thumbnail" onChange={setInput} />
            </FloatingLabel>

            <FloatingLabel className="mb-3" controlId="floatingvideolink" label="Uploading Video Link" >
              <Form.Control type="text" placeholder="Uploading Video Link"
                name="url" onChange={extractUrl} />
            </FloatingLabel>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}> Cancel </Button>
          
            <Button onClick={handleAdd} variant="primary"> Add </Button>
          
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default Add;
