import React from 'react'

function Profile() {
  return (
    <div className='card shadow p-5 me-2'>
        <div>
            <h3>My Profile</h3>
        </div>
        <div className='mt-3 row justify-content-center'>
            <label className='text-center' htmlFor="profile">
                <input type="file" id='profile' style={{display:'none'}} />
                <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png" width={'130px'} height={'140px'} alt="profile img" />
            </label>
            <div className='mt-3'>
                <input type="text" className='form-control' placeholder='Enter Your Username' />
            </div>
            <div className='mt-3'>
                <input type="text" className='form-control' placeholder='Enter Your Github Id' />
            </div>
            <div className='mt-3'>
                <input type="text" className='form-control' placeholder='Enter Your LinkdIn Id' />
            </div>

        </div>

    </div>
  )
}

export default Profile