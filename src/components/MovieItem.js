import React from 'react';
import { AiFillCloseSquare } from "react-icons/ai";

const MovieItem = (props) => {

  const clickHandler = ()=> props.onDeleteMovie(props.id);

  return (
    <div className="movie-container">

            <div className="grid grid-col-2 movie-top-area">
                <p className="">
                {props.title}
                </p>
                <AiFillCloseSquare onClick={clickHandler} className='icon-cursor icon-size-dbl-xlg grid-x-right'/>
            </div>

            <p className="movie-description">
                {props.description}
            </p>

        </div>
  );
};



MovieItem.defaultProps = {
  title: "Movie",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex possimus, perspiciatis corrupti ratione placeat unde ipsam dicta eligendi repellendus velit maxime quibusdam alias sit? Alias perspiciatis sunt quis nesciunt. In!"
}

export default MovieItem;
