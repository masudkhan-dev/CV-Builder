import { useState } from "react";

const Qualification = () => {
  const [exName1, setExName1] = useState("");
  const [exName2, setExName2] = useState("");
  const [exName3, setExName3] = useState("");

  const [groupName1, setGroupName1] = useState("");
  const [groupName2, setGroupName2] = useState("");
  const [groupName3, setGroupName3] = useState("");

  const [resultName1, setResultName1] = useState("");
  const [resultName2, setResultName2] = useState("");
  const [resultName3, setResultName3] = useState("");

  const [yearName1, setYearName1] = useState("");
  const [yearName2, setYearName2] = useState("");
  const [yearName3, setYearName3] = useState("");

  const [boardName1, setBoardName1] = useState("");
  const [boardName2, setBoardName2] = useState("");
  const [boardName3, setBoardName3] = useState("");

  return (
    <main>
      <div>
        <div className="container mx-auto">
          <header className="mt-3">
            <h2 className="title bg-[#D3D7DE] py-3 px-3 text-[#258208] text-xl underline Times-New-Roman-bold">
              Academic Qualification:
            </h2>
          </header>
          <div className="mt-1">
            <table
              style={{
                backgroundColor: "#E9ECE9",
                padding: "3px",
                borderCollapse: "collapse",
              }}
              className="details text-xm"
            >
              <thead>
                <tr>
                  <th className="table-title">Exam Title</th>
                  <th>Group/Dep.</th>
                  <th className="table-result">Result</th>
                  <th className=" table-year">Passing Year</th>
                  <th className="table-board">Board</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  {/* Table Title */}
                  <td className="table-title">
                    <div className="text-[12px] flex justify-center items-center gap-1">
                      <input
                        type="text"
                        id="nameInput"
                        placeholder="Exam Name 1"
                        className="border border-black rounded p-2 w-32 Times-New-Roman-regular"
                        value={exName1}
                        onChange={(e) => setExName1(e.target.value)}
                      />
                      <span className="print-name">{exName1}</span>
                    </div>
                  </td>
                  {/* Table Group */}
                  <td>
                    <div className="text-[12px] flex justify-center items-center gap-1">
                      <input
                        type="text"
                        id="nameInput"
                        placeholder="Group Name 1"
                        className="border border-black rounded p-2 w-32 Times-New-Roman-regular"
                        value={groupName1}
                        onChange={(e) => setGroupName1(e.target.value)}
                      />
                      <span className="print-name">{groupName1}</span>
                    </div>
                  </td>
                  {/* Table Result */}
                  <td className="table-result">
                    <div className="text-[12px] flex justify-center items-center gap-1">
                      <input
                        type="text"
                        id="nameInput"
                        placeholder="Result Name 1"
                        className="border border-black rounded p-2 w-32 Times-New-Roman-regular"
                        value={resultName1}
                        onChange={(e) => setResultName1(e.target.value)}
                      />
                      <span className="print-name">{resultName1}</span>
                    </div>
                  </td>
                  {/* Table Year 1 */}
                  <td className=" table-year">
                    <div className="text-[12px] flex justify-center items-center gap-1">
                      <input
                        type="number"
                        id="nameInput"
                        placeholder="Year 1"
                        className="border border-black rounded p-2 w-32 Times-New-Roman-regular"
                        value={yearName1}
                        onChange={(e) => setYearName1(e.target.value)}
                      />
                      <span className="print-name">{yearName1}</span>
                    </div>
                  </td>
                  {/* Table board */}
                  <td className="table-board">
                    <div className="text-[12px] flex justify-center items-center gap-1">
                      <input
                        type="text"
                        id="nameInput"
                        placeholder="Board 1"
                        className="border border-black rounded p-2 w-32 Times-New-Roman-regular"
                        value={boardName1}
                        onChange={(e) => setBoardName1(e.target.value)}
                      />
                      <span className="print-name">{boardName1}</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  {/* Table Title 2*/}
                  <td className="table-title">
                    <div className="text-[12px] flex justify-center items-center gap-1">
                      <input
                        type="text"
                        id="nameInput"
                        placeholder="Exam Name 2"
                        className="border border-black rounded w-32 p-2 Times-New-Roman-regular"
                        value={exName2}
                        onChange={(e) => setExName2(e.target.value)}
                      />
                      <span className="print-name">{exName2}</span>
                    </div>
                  </td>
                  {/* Table Group 2 */}
                  <td>
                    <div className="text-[12px] flex justify-center items-center gap-1">
                      <input
                        type="text"
                        id="nameInput"
                        placeholder="Group Name 2"
                        className="border border-black rounded p-2 w-32 Times-New-Roman-regular"
                        value={groupName2}
                        onChange={(e) => setGroupName2(e.target.value)}
                      />
                      <span className="print-name">{groupName2}</span>
                    </div>
                  </td>
                  {/* Table Result 2 */}
                  <td className="table-result">
                    <div className="text-[12px] flex justify-center items-center gap-1">
                      <input
                        type="text"
                        id="nameInput"
                        placeholder="Result Name 2"
                        className="border border-black rounded p-2 w-32 Times-New-Roman-regular"
                        value={resultName2}
                        onChange={(e) => setResultName2(e.target.value)}
                      />
                      <span className="print-name">{resultName2}</span>
                    </div>
                  </td>
                  {/* Table Year 2 */}
                  <td className=" table-year">
                    <div className="text-[12px] flex justify-center items-center gap-1">
                      <input
                        type="number"
                        id="nameInput"
                        placeholder="Year 2"
                        className="border border-black rounded p-2 w-32 Times-New-Roman-regular"
                        value={yearName2}
                        onChange={(e) => setYearName2(e.target.value)}
                      />
                      <span className="print-name">{yearName2}</span>
                    </div>
                  </td>
                  {/* Table Board 2 */}
                  <td className="table-board">
                    <div className="text-[12px] flex justify-center items-center gap-1">
                      <input
                        type="text"
                        id="nameInput"
                        placeholder="Board 2"
                        className="border border-black rounded p-2 w-32 Times-New-Roman-regular"
                        value={boardName2}
                        onChange={(e) => setBoardName2(e.target.value)}
                      />
                      <span className="print-name">{boardName2}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  {/* Table Title 3 */}
                  <td className="table-title">
                    <div className="text-[12px] flex justify-center items-center gap-1">
                      <input
                        type="text"
                        id="nameInput"
                        placeholder="Exam Name 2"
                        className="border border-black rounded w-32 p-2 Times-New-Roman-regular"
                        value={exName3}
                        onChange={(e) => setExName3(e.target.value)}
                      />
                      <span className="print-name">{exName3}</span>
                    </div>
                  </td>
                  {/* Table Group 3 */}
                  <td>
                    <div className="text-[12px] flex justify-center items-center gap-1">
                      <input
                        type="text"
                        id="nameInput"
                        placeholder="Group Name 3"
                        className="border border-black rounded p-2 w-32 Times-New-Roman-regular"
                        value={groupName3}
                        onChange={(e) => setGroupName3(e.target.value)}
                      />
                      <span className="print-name">{groupName3}</span>
                    </div>
                  </td>
                  {/* Table Result 3 */}
                  <td className="table-result">
                    <div className="text-[12px] flex justify-center items-center gap-1">
                      <input
                        type="text"
                        id="nameInput"
                        placeholder="Result Name 3"
                        className="border border-black rounded p-2 w-32 Times-New-Roman-regular"
                        value={resultName3}
                        onChange={(e) => setResultName3(e.target.value)}
                      />
                      <span className="print-name">{resultName3}</span>
                    </div>
                  </td>
                  {/* Table Year 3 */}
                  <td className=" table-year">
                    <div className="text-[12px] flex justify-center items-center gap-1">
                      <input
                        type="number"
                        id="nameInput"
                        placeholder="Year 2"
                        className="border border-black rounded p-2 w-32 Times-New-Roman-regular"
                        value={yearName3}
                        onChange={(e) => setYearName3(e.target.value)}
                      />
                      <span className="print-name">{yearName3}</span>
                    </div>
                  </td>
                  {/* Table board 3 */}
                  <td className="table-board">
                    <div className="text-[12px] flex justify-center items-center gap-1">
                      <input
                        type="text"
                        id="nameInput"
                        placeholder="Board 3"
                        className="border border-black rounded p-2 w-32 Times-New-Roman-regular"
                        value={boardName3}
                        onChange={(e) => setBoardName3(e.target.value)}
                      />
                      <span className="print-name">{boardName3}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Qualification;
