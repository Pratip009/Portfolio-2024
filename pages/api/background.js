const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "St. Thomas' College of Engineering & Technology",
        degree: "B.Tech, Information Technology",
        detail:
          "Bachelor's Degree in Information Technology from St. Thomas' College of Engineering & Technology.",
        year: "2016-2020",
      },
      {
        id: 1,
        title: "Hatuganj M.N.K High School",
        degree: "HSC, Science Subjects",
        detail: "Completed HSC from Hatuganj M.N.K High School",
        year: "2016",
      },
      {
        id: 2,
        title: "Sarisha Ramakrishna Mission Siksha Mandir",
        degree: "SSC",
        detail: "Completed SSC from Sarisha Ramakrishna Mission Siksha Mandir",
        year: "2013",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "Gospeedy",
        role: "Application Developer",
        url: "https://www.gospeedy.co.in/",
        desc: "As a application developer, I use React, Next & JavaScript to build user interfaces for web applications. and also build mobile applications using react native and flutter",
        year: "02/2023 - Present",
        location: "Kolkata, West Bengal",
      },
      {
        id: 2,
        title: "Optimasedge LLP",
        role: "Frontend Developer",
        url: "no website",
        desc: "As an Frontend Developer, I learned how to use React & JavaScript to build interactive websites.",
        year: "11/2021 - 12/2022",
        location: "Kolkata, West Bengal",
      },
      {
        id: 3,
        title: "Modern Enterprise Pvt. Ltd",
        role: "Intern",
        url: "no website",
        desc: "I work there as a Jr. Frontend Developer, there I learned how to do CRUD'S operations in React, also I worked on Firebase",
        year: "05/2021 - 10/2021",
        location: "Falta, West Bengal",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
