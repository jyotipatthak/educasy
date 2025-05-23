import React, { useState, useRef } from "react";
import "./SearchBox.css";

const SearchBox = ({ placeholder = "Search...", onSearch }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [searchText, setSearchText] = useState("");
    const inputRef = useRef(null); // Reference for the input element

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const handleChange = (event) => setSearchText(event.target.value);

    const handleKeyPress = (event) => {
        if (event.key === "Enter" && onSearch) {
            onSearch(searchText); // Call the onSearch function
            inputRef.current.blur(); // Remove focus from the input
        }
    };

    const clearSearch = () => { 
        setSearchText(""); 
        inputRef.current.focus(); 
    };

    return (
        <div className={`search-box ${isFocused ? "focused" : ""}`}>
            <span className={`search-icon ${isFocused ? "move-right" : ""}`}
                onClick={searchText ? clearSearch : null}
            >

                {(searchText && isFocused) || isFocused ? "✖" : "🔍"}
            </span>
            <input
                type="text"
                ref={inputRef} // Attach the ref to the input element
                value={searchText}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyPress={handleKeyPress}
                placeholder={placeholder}
                className="search-input"
            />
        </div>
    );
};

export default SearchBox;
