// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Krishnendu Kauri',
    image: "images/kauri.jpg",
    designation: 'React JS | NEXT JS | Node | GraphQL',
    view: "Hey everyone! I wanted to take a moment to recommend Pratip Kayal for any React.js opportunities. I had the pleasure of working with him on multiple projects where he showcased a strong understanding of React.js and Next.js concepts and delivered high-quality code. He consistently demonstrated a willingness to learn and grow, and his enthusiasm for tackling new challenges was contagious. Osama is a reliable and dedicated team member who would be a great asset to any React.js team. Highly recommended! 👍! 🌟",
    linkednURL: "https://www.linkedin.com/in/krishnendu-kauri-796626168/"
  },
  {
    id: 1,
    name: 'Pritam Natua',
    image: "images/pritam.jpg",
    designation: 'Data Scientist | Machine Learning Engineer | Python Developer',
    view: "I had the privilege of working alongside Pratip on multiple university projects, and I must say, his talent and work ethic truly stood out. Recently, we were both part of the dynamic team at Gospeedy, where Pratip's professionalism and attention to detail shone brightly. I wholeheartedly endorse Osama for any opportunity that calls for a highly skilled and dedicated individual.",
    linkednURL: "https://www.linkedin.com/in/sikandar-hayat-381407179/"
  },

]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
