import React from "react";

//


export default function Badge(props) {

  // const [isFormEmpty, setIsFormEmpty] = useState(true);

  //destruct props
  const {firstName,lastName,email,dateOfBirth,placeOfBirth,phone,favoriteFood,aboutSelf}=props


  // // To check if the form is empty
  // useEffect(() => {
  //   const isEmpty = !Object.values(props.formData).every(Boolean);
  //   setIsFormEmpty(isEmpty);
  // }, [props.formData]);

  return (
    <div className="badgeForm">
      <form onSubmit={props.onClick} action="" className="badge">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={props.onChange}
          value={firstName}
          required
          minLength={3}
        />
        <br />

        <br />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={props.onChange}
          value={lastName}
        />
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          onChange={props.onChange}
          value={email}
        />
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          onChange={props.onChange}
          value={dateOfBirth}
        />
        <label htmlFor="placeOfBirth">Place of Birth</label>
        <input
          type="text"
          name="placeOfBirth"
          value={placeOfBirth}
          onChange={props.onChange}
        />

        <label htmlFor="phone">Phone number</label>
        <input
          type="tel"
          name="phone"
          onChange={props.onChange}
          value={phone}
        />

        <label htmlFor="favoriteFood">Favorite food</label>
        <input
          type="text"
          name="favoriteFood"
          onChange={props.onChange}
          value={favoriteFood}
        />

        <label htmlFor="aboutSelf">About You!</label>
        <textarea
          className="textarea"
          name="aboutSelf"
          onChange={props.onChange}
          placeholder="Tell us about yourself"
          value={aboutSelf}
        />
        {/* {isFormEmpty ? (
          <button disabled={true}>Please fill out the form</button>
        ) : (
          <button onClick={props.onClick}>Submit</button>
        )} */}
        <button>Submit</button>
      </form>
    </div>
  );
}
