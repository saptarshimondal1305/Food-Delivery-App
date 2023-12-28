import React from 'react'

function Button({textOnly,children,className,...props}) {
    let cssClass=textOnly?"text-button":"button";
    cssClass+=' '+className;
  return (
    <button className={cssClass} {...props}>{children}</button>
  )
}

export default Button
