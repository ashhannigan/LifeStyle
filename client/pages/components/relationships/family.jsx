import React from "react";

import familyTreeImg from '../../../assets/family_tree.png';

const family = ["Kim ", "Ken ", "Kait ", "Alex "];
const extendedFam = ["Mommom S ", "Poppy ", "Mommom J ", "Elsa ", "Jim "];

function Family() {
  return (
    <><h1>
          My Family: <p>{family} and {extendedFam}{" "}</p>
      </h1><img src={familyTreeImg} alt="family tree" /></>
  );
}

export default Family;
