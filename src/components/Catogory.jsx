import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addCategory,
  deletecatogory,
  getallcategory,
  updatecategory,
  getavideo,
} from "../services/allApi";
import { Trash2 } from "react-feather";
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VIdeocard from "./VIdeocard";



function Category() {
  const [allCategory, seallCategory] = useState([]);

  const [categoryItem, setCategoryItem] = useState({
    id: "",
    categoryName: "",
    allVideos: [],
  });
  const addCategoryForm = (e) => {
    const { name, value } = e.target;
    setCategoryItem({ ...categoryItem, [name]: value });
  };
  // console.log(categoryItem);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory = async (e) => {
    e.preventDefault();
    const { id, categoryName } = categoryItem;
    if (!id || !categoryName) {
      toast.warning("Please fill the form Completely!!!");
    } else {
      const response = await addCategory(categoryItem);
      // addCategory
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        setShow(false);
        toast.success("New category added successfully...");
        getCategoryList();
      } else {
        toast.error("Provide a unique id!!!");
      }
    }
  };

  // getallCategory list
  const getCategoryList = async () => {
    //getallCategory : after making api call
    const response = await getallcategory();
    console.log(response);
    seallCategory(response.data);
  };
  // console.log(allCategory);
  useEffect(() => {
    getCategoryList();
  }, []);

  const handleDeleteCategory = async (e, id) => {
    e.preventDefault();
    // console.log(id);
    // removing category having id
    await deletecatogory(id);
    getCategoryList();
  };
  // dragOver
  const dragOver = (e) => {
    e.preventDefault();
    console.log("Dragging over the board");
  };
  // dropped
  const dropped = async (e, categoryId) => {
    console.log("Target category id:", categoryId);
    let sourceCardId = e.dataTransfer.getData("cardId");
    console.log("Source card id:", sourceCardId);
    // logic
    let { data } = await getavideo(sourceCardId);
    console.log("Source video data : ", data);
    let selectedCategory = allCategory.find((item) => item.id === categoryId);
    selectedCategory.allVideos.push(data);
    console.log("updated target category details ", selectedCategory);
    await updatecategory(categoryId, selectedCategory);
    getCategoryList();
  };
  return (
    <>
      <div className="d-grid">
        <button onClick={handleShow} className="btn btn-primary">
          Add Catogories
        </button>
      </div>

      {allCategory?.map((item) => (
        <div
          droppable
          onDragOver={(e) => dragOver(e)}
          onDrop={(e) => dropped(e, item?.id)}
        >
          <div className="d-flex justify-content-between border rounded mt-2 p-3">
            <h4>{item?.categoryName}</h4>
            <span onClick={(e) => handleDeleteCategory(e, item?.id)}>
              <Trash2 color="red"></Trash2>
            </span>
          </div>
          <Row>
            {item?.allVideos.map((card) => (
              <Col sm={12} className="p-3 mb-1" >

                
                <VIdeocard card={card} insideCategory={true} />

              </Col>
            ))}
          </Row>
        </div>
      ))}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Catogories form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FloatingLabel className="mb-3" controlId="floatingvid" label="Id">
              <Form.Control
                type="text"
                placeholder="Id"
                name="id"
                onChange={addCategoryForm}
              />
            </FloatingLabel>
            <FloatingLabel
              className="mb-3"
              controlId="floatingvcategory"
              label="Category"
            >
              <Form.Control
                type="text"
                placeholder="Category Name"
                name="categoryName"
                onChange={addCategoryForm}
              />
            </FloatingLabel>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddCategory} variant="primary">
            Add
          </Button>
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

export default Category;
