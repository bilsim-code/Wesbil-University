import { useNavigate } from "react-router-dom"

const Diploma = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-28 w-[600px] max-w-[90%] mx-auto">
      <h2 className="font-medium text-2xl mb-4">Diploma Programmes</h2>
      <ul className="list-disc list-inside flex flex-col gap-2 font-serif mb-6">
        <li>Diploma in Computer Science</li>
        <li>Diploma in Information Systems</li>
        <li>Diploma in Information Technology</li>
        <li>Diploma in Accounting</li>
        <li>Diploma in Marketing</li>
        <li>Diploma in Clinical Medicine</li>
        <li>Diploma in Public Health</li>
        <li>Diploma in Mathematics</li>
        <li>Diploma in Statistics</li>
        <li>Diploma in Education</li>
        <li>Diploma in Social Work</li>
      </ul>

      <button onClick={() => navigate('/join-us')} className="bg-royalblue p-2 text-white block w-1/2 text-center uppercase hover:rounded hover:text-gold font-medium">Join Us</button>
    </div>
  )
}
export default Diploma