import React from 'react';
// import { v4 } from 'uuid';

function NewPostForm() {
  let _title = null;
  let _image = null;

  return(
    <div>
      <form>
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
  )
}

export default NewPostForm;
