import React from 'react'

const Create = () => {
  return (
   <div className="form-container">
    <form>
        <h2>Add a New Blog</h2>
        <label>Title:</label>
        <input type="text" name='title' placeholder='write title'/><br />
        <label>Description:</label>
        <input type="text" name='desc' placeholder='write description' /><br />
        <label>Image:</label>
        <input type="file" name='desc' placeholder='write description' /><br />
        <div className="privacy">

          <span> <input type="checkbox" name="verify" id="" /> &nbsp;&nbsp;&nbsp; I accept the privacy policy of this blog</span>
          
        </div>
        <button className='newblog-btn'>submit</button>
    </form>
   </div>
  )
}

export default Create