import React from 'react'


  const  courseStatus =[ "All", "Active", "Completed", "Upcoming"]
function Header() {
  return (
   
    <div>
        <h1>My Courses</h1>
        <div className='coures-status'>
            {courseStatus.map((s) =>(
                <div key={s}>{s}</div>
            ))}
        </div>
    </div>
  )
}

export default Header