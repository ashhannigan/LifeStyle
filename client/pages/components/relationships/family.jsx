import React from "react";
// import familyTreeImg from "../../../assets/family_tree.png";

const family = ["Kim ", "Ken ", "Kait ", "Alex"];
const extendedFam = ["Mommom S ", "Poppy ", "Mommom J ", "Elsa ", "Jim"];
const elsaBday = "1/27"; // Month/Day format
const kimBday = "11/20"; // Kim's birthday
const todaysDate = new Date();

function calculateBirthdayReminder(birthday, name) {
  const currentYear = todaysDate.getFullYear();
  let birthdayDate = new Date(`${currentYear}/${birthday}`); // Try current year first

  if (isNaN(birthdayDate.getTime())) { // Check if it's a fixed date with year
    birthdayDate = new Date(birthday);
  } else if (birthdayDate < todaysDate) {
    birthdayDate = new Date(`${currentYear + 1}/${birthday}`); // Next year
  }

  const timeDifference = birthdayDate.getTime() - todaysDate.getTime();
  const daysUntilBirthday = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return (() => {
    if (daysUntilBirthday > 0) {
      return `${name}'s birthday is in ${daysUntilBirthday} days!`;
    } else if (daysUntilBirthday < 0) {
      return `${name}'s birthday was ${Math.abs(daysUntilBirthday)} days ago!`;
    } else {
      return `${name}'s birthday is today!`;
    }
  })();
}


function Family() {
  const elsaBdayReminder = calculateBirthdayReminder(elsaBday, "Elsa");
  const kimBdayReminder = calculateBirthdayReminder(kimBday, "Kim");

  return (
    <>
      <h1>
        My Family:
        <p>
         My Family: {family}. <br/> My extended family: {extendedFam}. <br/> Todays Date: {todaysDate.toLocaleDateString()}
        </p>
      </h1>
      <p>{elsaBdayReminder}</p>
      <p>{kimBdayReminder}</p>
      {/* <img src={familyTreeImg} alt="family tree" /> */}
    </>
  );
}

export default Family;