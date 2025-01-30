import React, { useState } from "react";

import Family from "./components/relationships/family.jsx";
import Reminders from "./components/reminders.jsx";
import Pets from "./components/relationships/pets.jsx";
import HealthstyleChoice from "./components/lifestyle/healthlyLifestyle.jsx";

function Home() {
  const user = {
    fname: "ashley",
    lname: "hannigan",
    password: "password",
  };

  const [selectedOption, setSelectedOption] = useState(""); // State for selected option.
  const [relationshipOption, setRelationshipOption] = useState(""); //state for relationship

  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Update state when option changes
  };
  
  const handleRelationshipChange = (event) => {
    setRelationshipOption(event.target.value)
  };

  return (
    <>
      <h1>Welcome to YOUR Lifestyle App, {user.fname} {""} {user.lname}!</h1>
      <h3>
        <em>
          Please use this website for your own personal growth and journey.{" "}
        </em>{" "}
        <br />
        What would you like to get started with?
      </h3>
<Reminders/>
      <select value={selectedOption} onChange={handleChange}>
        {" "}
        {/* Dropdown (select) options */}
        <option value="">Select One</option>
        <option value="Healthy">Healthy Lifestyle</option>{" "}
        <option value="Relationships">Relationships</option>
      </select>

      {/* Conditionally render content based if healthy selected */}
      {selectedOption === "Healthy" && (
        <div>
          <h2>Healthy Lifestyle Section</h2>
          {/* Content for healthy lifestyle */}
          <HealthstyleChoice />
        </div>
      )}
      {/* Conditionally render content based if relationships selected */}
      {selectedOption === "Relationships" && (
        <div>
          <h2>Relationships Section</h2>
          {/* choices for subheadings under relationship section of life */}
          <select value={relationshipOption} onChange={handleRelationshipChange}>
            {" "}
            {/* Dropdown (select) */}
            <option value="Family">Family</option>{" "}<Family />
            <option value="Friends">Friends</option>
            <option value="Pets">Pets</option>
          </select>

           {/* Conditionally render the Family component */}
           {relationshipOption === "Family" && <Family />} {/* Render Family here */}
          {relationshipOption === "Friends" && <p>Content for Friends</p>}
          {relationshipOption === "Pets" && <p><Pets /></p>}
        </div>
      )}
    </>
  );
}

export default Home;