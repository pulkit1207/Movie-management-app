import React, {useState, useEffect} from 'react';
import Modal from './Modal';
import Header from './Header';
import SearchBox from './SearchBox';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import Footer from './Footer';
import "../css/App.css";

const App = () => {

  const [movies, setMovies] = useState([]);
  const [modal, setModal] = useState({
    msg : "",
    visible : false
  })

  const [addForm, setAddForm] = useState(false);


  const filterMovies = (input) => {

    let newFilteredMovies = movies.filter((movie)=>{
      return movie.title.includes(input);
    })

    //if user deletes all the characters from the text box
    if(input === "")
    {
      newFilteredMovies = JSON.parse(localStorage.getItem("movies"))
    }

    setMovies(newFilteredMovies);    
  }


  const toggleAddForm = () => {
    setAddForm(!addForm)
  }


    //useEffect will fire-off when the components has finish loading
  useEffect(()=>{

    if(localStorage.getItem("movies"))
    {
        const newMovies = JSON.parse(localStorage.getItem("movies"));

        setMovies(newMovies);
    }
  },[])



  const addMovie = (newMovie) => {

    localStorage.setItem("movies", JSON.stringify([...movies, newMovie]));

    setMovies([...movies, newMovie]);

    setModal({
      msg : `${newMovie.title} was added successfully!`,
      visible : true
    });
  }


  const deleteMovie = (id) => {
      const newMovies = movies.filter((movie)=>{
        return movie.id !== id;
      })

      localStorage.setItem("movies", JSON.stringify(newMovies));

      setMovies(newMovies);

      setModal({
        msg : `This movie was successfully deleted!`,
        visible : true
      })
  }


  const hideModal = () => {
    setModal({
      msg: "",
      visible : false
    })
    
  }


  return (
    <div className="container"> 
      <Modal onHide = {hideModal} modalState = {modal}/>
      <Header onToggleAddForm = {toggleAddForm}/>
      <SearchBox onFilterMovies = {filterMovies} />
      <main>
        <AddMovie onAddForm = {addForm} onAdd = {addMovie} />
        <MovieList movies={movies} onDelete = {deleteMovie} />
      </main>
      <Footer />
    </div>
  );
};


export default App;
