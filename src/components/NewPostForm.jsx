import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewPostForm(props) {
  let _title = null;
  let _image = null;

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({title: _title.value, image:_image.value, score:0, id: v4()});
    _title.value='';
    _image.value='';
  }

  return(
    <div>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          type='text'
          id='title'
          placeholder='title'
          ref={(input)=> {_title = input;}}/>

        <input
          type='text'
          id='image'
          placeholder='image address'
          ref={(input)=> {_image = input;}}/>

        <button type='submit'>Post!</button>
      </form>
    </div>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func.isRequired
};

export default NewPostForm;
