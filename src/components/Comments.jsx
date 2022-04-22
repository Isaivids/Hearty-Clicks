import React, { useState } from 'react';
import { nanoid } from "nanoid";
import comments from "./Mock-comments.json";
import './Comments.scss';
import {MdRemoveCircle} from 'react-icons/md'

function Comments() {

  const [reviews, setReviews] = useState(comments);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    review: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      id: nanoid(),
      fullName: addFormData.fullName,
      review: addFormData.review,
    };
    const newReviews = [...reviews, newReview];
    setReviews(newReviews);
  };

  const handleDeleteClick = (contactId) => {
    const newReviews = [...reviews];
    const index = reviews.findIndex((comment) => comment.id === contactId);
    newReviews.splice(index, 1);
    setReviews(newReviews);
  };

  return (
    <div className='cmt'>
      <div className='cmt-header'>Drop your reviews</div>
      <div className='cmt-input'>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter Your Name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="review"
          required="required"
          placeholder="Enter your Review..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Post</button>
        </form>
      </div>
      <div className='cmt-box'>
        {reviews.map((comment,id)=>{
          return(
            <div key={id} className="cmt-content">
              <div className='cmt-txt'>
                <span>{comment.fullName}</span>
                <span>{comment.review}</span>
              </div>
              <div className='cmt-del'>
                <MdRemoveCircle onClick={handleDeleteClick} className="del-btn"/>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Comments