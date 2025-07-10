import "./SearchBar.css";

import Input from "../../atoms/input/Input";




const SearchBar = ({ term, onChange, onSearch }) => {
  return (
    <div className="search-bar">
      <Input
        value={term}
        onChange={onChange}
        placeholder="Buscar producto..."
      />
    
    
    </div>
  );
};

export default SearchBar;
