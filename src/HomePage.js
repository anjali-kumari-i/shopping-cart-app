import React from 'react'
import BackgroundAnimate from "./BackgroundAnimate";
import InputShortener from "./InputShortener";
import LinkResult from "./LinkResult";

const HomePage = () => {
  return (
    <div className="container">
              <InputShortener setInputValue={setInputValue} />
              <BackgroundAnimate />
              <LinkResult inputValue={inputValue} />
            </div>
  )
}

export default HomePage
