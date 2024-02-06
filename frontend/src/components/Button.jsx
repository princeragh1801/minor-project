import React from 'react'

function Button({
    title,
    className = ''
}) {
  return (
    <button
    type="button"
    class={`rounded-md  ml-4 px-4 py-2  font-semibold shadow-sm border-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black text-lg ${className}`}
  >
    {title}
  </button>
  )
}

export default Button
