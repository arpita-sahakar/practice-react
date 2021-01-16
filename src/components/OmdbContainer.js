import { useEffect, useState } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";


const OmdbContainer = (props) => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState({});

  const searchMovies = (query) => {
    API.search(query)
      .then((res) => setResult(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    searchMovies("Matrix");
  },[]);

  const handleInputChange = (event)=>{
    if(event.target.id === "search"){
      setSearch(event.target.value);
    }
  };
  const handleFormSubmit = event =>{
    event.preventDefault();
    searchMovies(search);

  };

  return (
    <Container>
      <Row>
        <Col size="md-8">
          <Card
            heading={result.Title || "Search for a Movie to Begin"}
          >
            <MovieDetail
              title={result.Title}
              src={result.Poster}
              director={result.Director}
              genre={result.Genre}
              released={result.Released}
            />
          </Card>
        </Col>
        <Col size="md-4">
          <Card heading="Search">
            <SearchForm
              value={search}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OmdbContainer;
