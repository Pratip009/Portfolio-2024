const portfolio = [
  {
    id: 0,
    projectName: "Learning Needs",
    url: "https://learningneeds.com/",
    image: "projects/learning.png",
    projectDetail: "",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "NodeJS",
      },
      {
        tech: "MongoDB",
      },
      {
        tech: "MaterialUI",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },
  {
    id: 0,
    projectName: "Gospeedy",
    url: "https://www.gospeedy.co.in/",
    image: "projects/gospeedypic.png",
    projectDetail: "",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "Ant Design",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },
  {
    id: 0,
    projectName: "KredX",
    url: "https://kredx.ltd/",
    image: "projects/KredX.png",
    projectDetail: "",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },

      {
        tech: "REST API's",
      },
      {
        tech: "Ant Design",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },
  {
    id: 0,
    projectName: "Optacademia",
    url: "https://Optacademia.app/",
    image: "projects/optAcademia.png",
    projectDetail: "",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },

      {
        tech: "REST API's",
      },
      {
        tech: "Ant Design",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },
  {
    id: 0,
    projectName: "PMart",
    url: "/domain-expired",
    image: "projects/Pmart.png",
    projectDetail: "",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "NodeJS",
      },
      {
        tech: "MongoDB",
      },
      {
        tech: "MaterialUI",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },
  {
    id: 0,
    projectName: "Custom Dashboard",
    url: "",
    image: "projects/CustomDashboard.png",
    projectDetail: "",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },

      {
        tech: "Ant Design",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },

  // {
  //     id: 2,
  //     projectName: "Culyte",
  //     url: "https://culyte.com",
  //     image: "projects/culyte.png",
  //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
  //     technologiesUsed: [
  //         {
  //             tech: "ReactJS"
  //         },
  //         {
  //             tech: "NodeJS"
  //         },
  //         {
  //             tech: "Ant Design"
  //         },
  //         {
  //             tech: "TailwindCSS"
  //         },
  //     ]
  // },
];
export default function handler(req, res) {
  res.status(200).json(portfolio);
}
