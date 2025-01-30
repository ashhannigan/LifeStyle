import React, { useState } from "react";
import Meals from "./meals.jsx";
import NewRecipes from "./newRecipes.jsx";

function HealthstyleChoice() {
  const [healthOption, setHealthOption] = useState("");

  const handleHealthChange = (e) => {
    setHealthOption(e.target.value);
  };

  return (
    <div> {/* Wrap in a div */}
      <h1>What would you like to browse?</h1>
      <select value={healthOption} onChange={handleHealthChange}>
        <option value="">Select an option</option> {/* Important: Default option */}
        <option value="Favorite Meals">Favorite Meals</option>
        <option value="New Recipes">New Recipes</option>
      </select>

      {/* Conditionally render Meals */}
      {healthOption === "Favorite Meals" && <Meals />}

      {/* Conditionally render New Recipes */}
      {healthOption === "New Recipes" && <NewRecipes />}
    </div>
  );
}

export default HealthstyleChoice;