import { useEffect, useState } from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";

const SearchResultFunctionalContainer = (props) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const searchGiphy = (query) => {
    API.search(query)
      .then((res) => setResults(res.data.data))
      .catch((err) => console.log(err));
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (event.target.name == "search") {
      setSearch(event.target.value);
    }
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchGiphy(search);
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  useEffect(() => {
    searchGiphy("kittens");
  },[]);
  
  return (
    <div>
      <SearchForm
        search={search}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
      />
      <ResultList results={results} />
    </div>
  );
};

export default SearchResultFunctionalContainer;
