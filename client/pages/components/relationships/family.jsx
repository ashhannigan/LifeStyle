import React from "react";

const family = ["Kim ", "Ken ", "Kait ", "Alex "];
const extendedFam = ["Mommom S ", "Poppy ", "Mommom J ", "Elsa ", "Jim "];

function Family() {
  return (
    <h1>
      My Family: <p>{family} and {extendedFam}{" "}</p>
    </h1>
  );
}

export default Family;
