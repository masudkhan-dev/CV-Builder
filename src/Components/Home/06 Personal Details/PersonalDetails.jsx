import { useState } from "react";

const PersonalDetails = () => {
  const [name, setName] = useState("");
  const [Fname, setFName] = useState("");
  const [Mname, setMName] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [status, setStatus] = useState("");
  const [nationality, setNationality] = useState("");

  const [vill1, setVill1] = useState("");
  const [vill2, setVill2] = useState("");

  const [post1, setPost1] = useState("");
  const [postCode1, setPostCode1] = useState("");

  const [post2, setPost2] = useState("");
  const [postCode2, setPostCode2] = useState("");

  const [religion, setReligion] = useState("");
  const [phone, setPhone] = useState("");
  const [homePhone, setHomePhone] = useState("");
  const [email, setEmail] = useState("");
  const [nid, setNid] = useState("");

  return (
    <main>
      <div>
        <div className="container mx-auto">
          <header className="mt-3">
            <h2 className="title bg-[#D3D7DE] py-2 px-3 text-[#258208] text-xl underline Times-New-Roman-bold">
              Personal Details:
            </h2>
          </header>
          <div className="mt-1 ">
            {/* Name */}
            <div className="flex gap-1">
              <div className="flex justify-end items-center py-2 bg-[#E9ECE9] w-[30%] details">
                <p className="mr-5 text-sm">Name:</p>
              </div>
              <div className="flex justify-start items-center py-2 bg-[#E9ECE9] w-[70%] details">
                <div className="text-[12px] flex justify-center items-center gap-1 ml-5">
                  <input
                    type="text"
                    id="nameInput"
                    placeholder="Name"
                    className="border border-black rounded w-52 p-2 Times-New-Roman-regular"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <span className="print-name">{name}</span>
                </div>
              </div>
            </div>

            {/* Father's Name */}
            <div className="flex gap-1 mt-1">
              <div className="flex justify-end items-center py-2 bg-[#E9ECE9] w-[30%] details">
                <p className="mr-5 text-sm">Father's Name:</p>
              </div>
              <div className="flex justify-start items-center py-2 bg-[#E9ECE9] w-[70%] details">
                <div className="text-[12px] flex justify-center items-center gap-1 ml-5">
                  <input
                    type="text"
                    id="nameInput"
                    placeholder="Father's Name"
                    className="border border-black rounded w-52 p-2 Times-New-Roman-regular"
                    value={Fname}
                    onChange={(e) => setFName(e.target.value)}
                  />
                  <span className="print-name">{Fname}</span>
                </div>
              </div>
            </div>

            {/* Mother's Name */}
            <div className="flex gap-1 mt-1">
              <div className="flex justify-end items-center py-2 bg-[#E9ECE9] w-[30%] details">
                <p className="mr-5 text-sm">Mother's Name:</p>
              </div>
              <div className="flex justify-start items-center py-2 bg-[#E9ECE9] w-[70%] details">
                <div className="text-[12px] flex justify-center items-center gap-1 ml-5">
                  <input
                    type="text"
                    id="nameInput"
                    placeholder="Mother's Name"
                    className="border border-black rounded w-52 p-2 Times-New-Roman-regular"
                    value={Mname}
                    onChange={(e) => setMName(e.target.value)}
                  />
                  <span className="print-name">{Mname}</span>
                </div>
              </div>
            </div>

            {/* Gender */}
            <div className="flex gap-1 mt-1">
              <div className="flex justify-end items-center py-2 bg-[#E9ECE9] w-[30%] details">
                <p className="mr-5 text-sm">Gender:</p>
              </div>
              <div className="flex justify-start items-center py-2 bg-[#E9ECE9] w-[70%] details">
                <div className="text-[12px] flex justify-center items-center gap-1 ml-5">
                  <input
                    type="text"
                    id="nameInput"
                    placeholder="Gender"
                    className="border border-black rounded w-52 p-2 Times-New-Roman-regular"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span className="print-name">{gender}</span>
                </div>
              </div>
            </div>

            {/* Height */}
            <div className="flex gap-1 mt-1">
              <div className="flex justify-end items-center py-2 bg-[#E9ECE9] w-[30%] details">
                <p className="mr-5 text-sm">Height:</p>
              </div>
              <div className="flex justify-start items-center py-2 bg-[#E9ECE9] w-[70%] details">
                <div className="text-[12px] flex justify-center items-center gap-1 ml-5">
                  <input
                    type="text"
                    id="nameInput"
                    placeholder="Height"
                    className="border border-black rounded w-52 p-2 Times-New-Roman-regular"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                  <span className="print-name">{height}</span>
                </div>
              </div>
            </div>

            {/* Weight */}
            <div className="flex gap-1 mt-1">
              <div className="flex justify-end items-center py-2 bg-[#E9ECE9] w-[30%] details">
                <p className="mr-5 text-sm">Weight:</p>
              </div>
              <div className="flex justify-start items-center py-2 bg-[#E9ECE9] w-[70%] details">
                <div className="text-[12px] flex justify-center items-center gap-1 ml-5">
                  <input
                    type="text"
                    id="nameInput"
                    placeholder="Weight"
                    className="border border-black rounded w-52 p-2 Times-New-Roman-regular"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                  <span className="print-name">{weight}</span>
                </div>
              </div>
            </div>

            {/* Marital Status */}
            <div className="flex gap-1 mt-1">
              <div className="flex justify-end items-center py-2 bg-[#E9ECE9] w-[30%] details">
                <p className="mr-5 text-sm">Marital Status:</p>
              </div>
              <div className="flex justify-start items-center py-2 bg-[#E9ECE9] w-[70%] details">
                <div className="text-[12px] flex justify-center items-center gap-1 ml-5">
                  <input
                    type="text"
                    id="nameInput"
                    placeholder="Marital Status"
                    className="border border-black rounded w-52 p-2 Times-New-Roman-regular"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <span className="print-name">{status}</span>
                </div>
              </div>
            </div>

            {/* Nationality */}
            <div className="flex gap-1 mt-1">
              <div className="flex justify-end items-center py-2 bg-[#E9ECE9] w-[30%] details">
                <p className="mr-5 text-sm">Nationality:</p>
              </div>
              <div className="flex justify-start items-center py-2 bg-[#E9ECE9] w-[70%] details">
                <div className="text-[12px] flex justify-center items-center gap-1 ml-5">
                  <input
                    type="text"
                    id="nameInput"
                    placeholder="Nationality"
                    className="border border-black rounded w-52 p-2 Times-New-Roman-regular"
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                  />
                  <span className="print-name">{nationality}</span>
                </div>
              </div>
            </div>

            {/* Present Address */}
            <div className="flex gap-1 mt-1">
              <div className="flex justify-end items-center py-2 bg-[#E9ECE9] w-[30%] details">
                <p className="mr-5 text-sm">Present Address:</p>
              </div>
              <div className="flex justify-start items-center py-2 bg-[#E9ECE9] w-[70%] details">
                <div className="ml-5">
                  <div className="text-[12px] flex justify-start items-center gap-1">
                    <p>Vill:</p>
                    <input
                      type="text"
                      id="nameInput"
                      placeholder="Village"
                      className="border border-black rounded p-2 Times-New-Roman-regular"
                      value={vill1}
                      onChange={(e) => setVill1(e.target.value)}
                    />
                    <span className="print-name ml-1">{vill1}</span>
                  </div>
                  <div className="text-[12px] flex justify-start items-center gap-1 mt-2">
                    <p>Post:</p>
                    <input
                      type="text"
                      id="postInput"
                      placeholder="Post"
                      className="border border-black rounded p-2 Times-New-Roman-regular"
                      value={post1}
                      onChange={(e) => setPost1(e.target.value)}
                    />

                    <input
                      type="number"
                      id="postCodeInput"
                      placeholder="Post Code"
                      className="border border-black rounded p-2 w-52 Times-New-Roman-regular"
                      value={postCode1}
                      onChange={(e) => setPostCode1(e.target.value)}
                    />
                    <span className="print-name">
                      {post1} - {postCode1}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Permanent Address */}
            <div className="flex gap-1 mt-1">
              <div className="flex justify-end items-center py-2 bg-[#E9ECE9] w-[30%] details">
                <p className="mr-5 text-sm">Permanent Address:</p>
              </div>
              <div className="flex justify-start items-center py-2 bg-[#E9ECE9] w-[70%] details">
                <div className="ml-5">
                  <div className="text-[12px] flex justify-start items-center gap-1">
                    <p>Vill:</p>
                    <input
                      type="text"
                      id="nameInput"
                      placeholder="Village"
                      className="border border-black rounded p-2 Times-New-Roman-regular"
                      value={vill2}
                      onChange={(e) => setVill2(e.target.value)}
                    />
                    <span className="print-name ml-1">{vill2}</span>
                  </div>
                  <div className="text-[12px] flex justify-start items-center gap-1 mt-2">
                    <p>Post:</p>
                    <input
                      type="text"
                      id="postInput"
                      placeholder="Post"
                      className="border border-black rounded p-2 Times-New-Roman-regular"
                      value={post2}
                      onChange={(e) => setPost2(e.target.value)}
                    />

                    <input
                      type="number"
                      id="postCodeInput"
                      placeholder="Post Code"
                      className="border border-black rounded p-2 w-52 Times-New-Roman-regular"
                      value={postCode2}
                      onChange={(e) => setPostCode2(e.target.value)}
                    />
                    <span className="print-name">
                      {post2} - {postCode2}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Religion */}
            <div className="flex gap-1 mt-1">
              <div className="flex justify-end items-center py-2 bg-[#E9ECE9] w-[30%] details">
                <p className="mr-5 text-sm">Religion:</p>
              </div>
              <div className="flex justify-start items-center py-2 bg-[#E9ECE9] w-[70%] details">
                <div className="text-[12px] flex justify-center items-center gap-1 ml-5">
                  <input
                    type="text"
                    id="nameInput"
                    placeholder="Religion"
                    className="border border-black rounded w-52 p-2 Times-New-Roman-regular"
                    value={religion}
                    onChange={(e) => setReligion(e.target.value)}
                  />
                  <span className="print-name">{religion}</span>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-1 mt-1">
              <div className="flex justify-end items-center py-2 bg-[#E9ECE9] w-[30%] details">
                <p className="mr-5 text-sm">Phone:</p>
              </div>
              <div className="flex justify-start items-center py-2 bg-[#E9ECE9] w-[70%] details">
                <div className="text-[12px] flex justify-center items-center gap-1 ml-5">
                  <input
                    type="number"
                    id="nameInput"
                    placeholder="Phone"
                    className="border border-black rounded w-52 p-2 Times-New-Roman-regular"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <span className="print-name">{phone}</span>
                </div>
              </div>
            </div>

            {/* Home Phone */}
            <div className="flex gap-1 mt-1">
              <div className="flex justify-end items-center py-2 bg-[#E9ECE9] w-[30%] details">
                <p className="mr-5 text-sm">Home Phone:</p>
              </div>
              <div className="flex justify-start items-center py-2 bg-[#E9ECE9] w-[70%] details">
                <div className="text-[12px] flex justify-center items-center gap-1 ml-5">
                  <input
                    type="number"
                    id="nameInput"
                    placeholder="Home Phone"
                    className="border border-black rounded w-52 p-2 Times-New-Roman-regular"
                    value={homePhone}
                    onChange={(e) => setHomePhone(e.target.value)}
                  />
                  <span className="print-name">{homePhone}</span>
                </div>
              </div>
            </div>

            {/* Email Phone */}
            <div className="flex gap-1 mt-1">
              <div className="flex justify-end items-center py-2 bg-[#E9ECE9] w-[30%] details">
                <p className="mr-5 text-sm">Email:</p>
              </div>
              <div className="flex justify-start items-center py-2 bg-[#E9ECE9] w-[70%] details">
                <div className="text-[12px] flex justify-center items-center gap-1 ml-5">
                  <input
                    type="email"
                    id="nameInput"
                    placeholder="Email"
                    className="border border-black rounded w-52 p-2 Times-New-Roman-regular"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className="print-name">{email}</span>
                </div>
              </div>
            </div>

            {/* National Id */}
            <div className="flex gap-1 mt-1">
              <div className="flex justify-end items-center py-2 bg-[#E9ECE9] w-[30%] details">
                <p className="mr-5 text-sm">National Id:</p>
              </div>
              <div className="flex justify-start items-center py-2 bg-[#E9ECE9] w-[70%] details">
                <div className="text-[12px] flex justify-center items-center gap-1 ml-5">
                  <input
                    type="number"
                    id="nameInput"
                    placeholder="NID"
                    className="border border-black rounded w-52 p-2 Times-New-Roman-regular"
                    value={nid}
                    onChange={(e) => setNid(e.target.value)}
                  />
                  <span className="print-name">{nid}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PersonalDetails;
