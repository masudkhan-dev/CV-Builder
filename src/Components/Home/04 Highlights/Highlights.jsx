import { FaChevronRight } from "react-icons/fa";

const Highlights = () => {
  return (
    <main className="">
      <div className="container mx-auto">
        <header className="mt-3">
          <h2 className="title bg-[#D3D7DE] py-2 px-3 text-[#258208] text-xl underline Times-New-Roman-bold">
            Highlights of Qualification:
          </h2>
        </header>
        <div className="mt-1">
          <ul className="bg-[#E9ECE9] p-3 details text-sm">
            <li className="list-style">
              <FaChevronRight className="" /> Excellent organizational,
              interpersonal and communicative skills.
            </li>
            <li className="list-style">
              <FaChevronRight /> Team sprit initiative and able to work under
              reassures.
            </li>
            <li className="list-style">
              <FaChevronRight /> High sense of motivation and dedication.
            </li>
            <li className="list-style">
              <FaChevronRight /> Able to bear extreme physical and mental stress
              and to solve strong analytical problem.
            </li>
            <li className="list-style">
              <FaChevronRight /> Excellent knowledge of MS Office.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Highlights;
