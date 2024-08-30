import React from "react";
import SearchIcon from "../../assets/searchIcon.png";
import buttonSearchIcon from "../../assets/buttonsearchIcon.png";
import HospitalIcon from "../../assets/Hospital.png";
import ambulanceIcon from "../../assets/Ambulance.png";
import doctorsIcon from "../../assets/Doctor.png";
import labIcon from "../../assets/Drugstore.png";
import medicalIcon from "../../assets/Capsule.png";
import "./SearchComponent.css";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const SearchComponent = ({
  states,
  fetchCities,
  currentState,
  setCurrentState,
  cities,
  setCurrentCity,
  currentCity,
  handleSearch,
  type,
}) => {
  return (
    <div className="wrapper-searchComponent mt-[-40px]">
      {/* for search boxes and buttons */}
      <div className="wrapper-searchBox">
        {/* for search boxes */}
        <button className="button-search" onClick={handleSearch}>
          <img src={buttonSearchIcon} />
          Search
        </button>
        <div className="searchBox">
          <img src={SearchIcon} />
          <Autocomplete
            options={cities}
            value={currentCity}
            onChange={(e, newValue) => {
              setCurrentCity(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="City"
                variant="standard"
                sx={{
                  "& .MuiInput-underline:before": { borderBottom: "none" },
                  "& .MuiInput-underline:hover:before": {
                    borderBottom: "none",
                  },
                  "& .MuiInput-underline:after": { borderBottom: "none" },
                  "& .MuiAutocomplete-endAdornment": { display: "none" },
                }}
                disableClearable
              />
            )}
            style={{ width: "285px" }}
          />
        </div>
        <div className="searchBox">
          <img src={SearchIcon} />
          <Autocomplete
            options={states}
            value={currentState}
            onChange={(e, newValue) => {
              setCurrentState(newValue);
              if (newValue) fetchCities(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="State"
                variant="standard"
                sx={{
                  "& .MuiInput-underline:before": { borderBottom: "none" },
                  "& .MuiInput-underline:hover:before": {
                    borderBottom: "none",
                  },
                  "& .MuiInput-underline:after": { borderBottom: "none" },
                  "& .MuiAutocomplete-endAdornment": { display: "none" },
                }}
                disableClearable
              />
            )}
            style={{ width: "285px" }}
          />
        </div>
      </div>
      {/* for cards */}
      {type === "home" && (
        <div>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "30px",
              fontWeight: "500",
              textAlign: "center",
              marginTop: "5rem",
            }}
          >
            You may be looking for
          </p>
          <div className="wrapper-card">
            {/* five cards in a flex container */}
            <div className="card">
              <img src={doctorsIcon} />
              <p>Doctors</p>
            </div>
            <div className="card">
              <img src={labIcon} />
              <p>Labs</p>
            </div>
            <div className="card active">
              <img src={HospitalIcon} />
              <p>Hospitals</p>
            </div>
            <div className="card">
              <img src={medicalIcon} />
              <p>Medical Store</p>
            </div>
            <div className="card">
              <img src={ambulanceIcon} />
              <p>Ambulance</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
