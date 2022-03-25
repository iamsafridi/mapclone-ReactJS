import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

const StyledApp = styled.div``;

function Search() {
  const [theme, setTheme] = React.useState("dark");

  function themeToggler() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  const [show, setShow] = React.useState(true);

  const [address, setAddress] = React.useState("");

  const handleSelect = async (value) => {};

  function handleClick() {
    setShow((prevState) => !prevState);
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <div className={show ? "search-container active" : "search-container"}>
          <div className="nav">
            <h1 className="logo">
              <span
                className={
                  show ? "title-logo-forward hidden" : "title-logo-forward"
                }
                onClick={handleClick}
              >
                <ArrowForwardIosIcon />
              </span>
              Bari<span className="title">koi</span>
            </h1>
            <span className="title-logo-back" onClick={handleClick}>
              <ArrowBackIosNewIcon />
            </span>
          </div>
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <input
                  {...getInputProps({ placeholder: "Search Location." })}
                />
                <div>
                  {loading ? <div>...loading</div> : null}

                  {suggestions.map((suggestion) => {
                    console.log(suggestion);
                    const style = {
                      backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                    };

                    return (
                      <div {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
      </StyledApp>
    </ThemeProvider>
  );
}

export default Search;
