import { useNavigate } from "react-router-dom"

const Bachelors = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-28 w-[600px] max-w-[90%] mx-auto">
      <h2 className="font-medium text-2xl mb-4">Bachelors Programmes</h2>
      <ul className="list-disc list-inside flex flex-col gap-2 font-serif mb-6">
        <li>Bachelor of Science in Computer Science</li>
        <li>Bachelor of Science in Software Engineering</li>
        <li>Bachelor of Science in Information Systems</li>
        <li>Bachelor of Science in Data Science</li>
        <li>Bachelor of Science in Information Technology</li>
        <li>Bachelor of Technology in Information Technology</li>
        <li>Bachelor of Commerce in Accounting</li>
        <li>Bachelor of Commerce in Finance</li>
        <li>Bachelor of Commerce in Marketing</li>
        <li>Bachelor of Commerce in Human Resource Management</li>
        <li>Bachelor of Medicine and Surgery</li>
        <li>Bachelor of Science in Nursing</li>
        <li>Bachelor of Science in Public Health</li>
        <li>Bachelor of Science in Mathematics</li>
        <li>Bachelor of Science in Applied Mathematics</li>
        <li>Bachelor of Science in Statistics</li>
        <li>Bachelor of Education in Arts</li>
        <li>Bachelor of Education in Science</li>
        <li>Bachelor of Arts in Sociology</li>
        <li>Bachelor of Arts in Psychology</li>
      </ul>

      <button onClick={() => navigate('/join-us')} className="bg-royalblue p-2 text-white block w-1/2 text-center uppercase hover:rounded hover:text-gold font-medium">Join Us</button>
    </div>
  )
}

export default Bachelors