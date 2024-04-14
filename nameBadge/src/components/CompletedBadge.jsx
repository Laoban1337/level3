import React from "react";

//regex phone number validation
function validatePhoneNumber(phoneNumber) {
    return /^\d{10}$/.test(phoneNumber);
}
export default function CompletedBadge(props) {
  // {props.formData.map((badge, index) => {
  //     return (
  //       <ol>
  //         <li key={index}>{badge.firstName} {badge.lastName}</li>
  //       </ol>
  //     );
  //   })}
  console.log(props);

  //destructured props

  const isPhoneNumberValid = validatePhoneNumber(props.data.phone);

  return (
    <div className="newBadges">
      <h1>NAME BADGE</h1>
      {/* <h2>First Name:{props.formData.firstName}</h2> */}

      {/* read only form Badge */}
      <form className="badgeForm">
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" value={props.data.firstName} readOnly />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" value={props.data.lastName} readOnly />

        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={props.data.email} readOnly />

        <label htmlFor="dateOfBirth">Date Of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          value={props.data.dateOfBirth}
          readOnly
        />

        <label htmlFor="placeOfBirth">Place of Birth</label>
        <input
          type="text"
          name="placeOfBirth"
          value={props.data.placeOfBirth}
          readOnly
        />

        <label htmlFor="phone">Phone number</label>
        <input type="tel" name="phone" value={props.data.phone} readOnly className={!isPhoneNumberValid ? 'invalid' : ''} />

        <label htmlFor="favoriteFood">Favorite Food</label>
        <input
          type="text"
          name="favoriteFood"
          value={props.data.favoriteFood}
          readOnly
        />
        <label htmlFor="aboutSelf"></label>
        <textarea
          name="aboutSelf"
          id="aboutSelf"
          cols="30"
          rows="10"
          value={props.data.aboutSelf}
          readOnly
        ></textarea>
      </form>
    </div>
  );
}
