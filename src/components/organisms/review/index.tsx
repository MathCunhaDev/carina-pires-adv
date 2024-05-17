// "use client";

// import { useEffect } from "react";
// import "./styles.scss";

// interface IReview {
//   title: string;
//   text: string;
//   stars: number;
// }

// const apiKey = "";

// const url =
//   "//locations//reviews";

// const fetchConfigs = {
//   method: "GET",
//   headers: {
//     Authorization: `Bearer ${apiKey}`,
//     "Content-Type": "application/json",
//   },
// };

// async function getAccessToken() {
//   const url = 'https://oauth2.googleapis.com/token';
//   const params = new URLSearchParams({
//       'client_id': clientId,
//       'client_secret': clientSecret,
//       'refresh_token': refreshToken,
//       'grant_type': 'refresh_token'
//   });

//   const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       body: params
//   });

//   const data = await response.json();
//   return data.access_token;
// }

export function Review() {
  // useEffect(() => {
  //   fetch(url, fetchConfigs).then((response: any) => {
  //     return response.json();
  //   });
  // }, []);

  return (
    <section className="review">
      {/* <h3 className="review-title">{title}</h3>
      <p className="review-text">{text}</p>
      <section className="review-footer"></section> */}
    </section>
  );
}
