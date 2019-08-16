import React from 'react'

const StoryPreview = props => {
  return (
    <div style={{ padding: '40px', backgroundColor: '#e4e5e6', ...props.additional }}>{props.children}</div>
  )
}

export default StoryPreview
