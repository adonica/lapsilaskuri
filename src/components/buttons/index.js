import React from 'react';

import './buttons.css';

const classNames = classnames => classnames.join(" ");

const Button = ({ className = "", primary, secondary, ...props}) => {
  return(
    <button 
      type= "button" 
      className={classNames([
        "button", 
        className,
        primary ? "button--primary" : "",
        secondary ? "button--secondary" : ""
      ])}      
      {...props} />
  );
}

const FloatingButton = ({className = "", ...props}) => {
   return (
     <Button
        className={classNames(["button--floating", className])}
     {...props} />
   );
}

const LapsiButton = ({className = "", primary, secondary, ...props}) => {
  return (
     <Button
        className={classNames([
          "button__lapsi",
         className,
         primary ? "button__lapsipri": "",
         secondary ? "button__lapsisec": ""])}
        {...props} />
    );
}

export { Button as default, Button, FloatingButton, LapsiButton };