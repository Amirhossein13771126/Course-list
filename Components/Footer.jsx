import React from 'react'
const isPassed = true;
function Footer() {
  return (
    <div className='footer'>
        <p>Course Resault</p>
        {isPassed ? (
        <p>
          You have successfully passed <strong>33%</strong> of your courses.
        </p>
      ) : (
        <p>You have not passed any course</p>
      )}
    </div>
  )
}

export default Footer