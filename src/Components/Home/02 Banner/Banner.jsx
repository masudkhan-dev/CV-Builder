import { useState } from "react";
import "./Banner.css";

const Banner = () => {
  const [name, setName] = useState("");
  const [vill, setVill] = useState("");
  const [post, setPost] = useState("");
  const [postCode, setPostCode] = useState("");
  const [upazila, setUpazila] = useState("");
  const [dist, setDist] = useState("");
  const [phone, setPhone] = useState("");

  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <main>
      <div className="container mx-auto mt-10">
        <div className="flex justify-between items-center ">
          <div className="flex justify-center items-center gap-3">
            <label htmlFor="nameInput">Name:</label>
            <input
              type="text"
              id="nameInput"
              placeholder="Name"
              className="border border-black rounded p-2"
              value={name}
              onChange={(e) => setName(e.target.value.toUpperCase())}
            />
            <span className="print-name">{name}</span>
          </div>

          {/* Card */}
          <div className="card_shadow w-72 py-3 px-5 mt-5">
            <h2 className="text-[12px] Times-New-Roman-bold">Address: </h2>

            {/* Village */}
            <div className="text-[12px] flex justify-start items-center gap-1">
              <p>Vill:</p>
              <input
                type="text"
                id="nameInput"
                placeholder="Name"
                className="border border-black rounded p-2 Times-New-Roman-regular"
                value={vill}
                onChange={(e) => setVill(e.target.value)}
              />
              <span className="print-name">{vill}</span>
            </div>

            {/* Post */}
            <div className="text-[12px] flex justify-start items-center gap-1">
              <p>Post:</p>
              <input
                type="text"
                id="postInput"
                placeholder="Post"
                className="border border-black rounded p-2 Times-New-Roman-regular"
                value={post}
                onChange={(e) => setPost(e.target.value)}
              />

              <input
                type="number"
                id="postCodeInput"
                placeholder="Post Code"
                className="border border-black rounded p-2 w-20 Times-New-Roman-regular"
                value={postCode}
                onChange={(e) => setPostCode(e.target.value)}
              />
              <span className="print-name">
                {post} - {postCode}
              </span>
            </div>

            {/* Upazilla */}
            <div className="text-[12px] flex justify-start items-center gap-1">
              <p>Upazila:</p>
              <input
                type="text"
                id="nameInput"
                placeholder="Name"
                className="border border-black rounded p-2 Times-New-Roman-regular"
                value={dist}
                onChange={(e) => setDist(e.target.value)}
              />
              <span className="print-name">{dist}</span>
            </div>

            {/* District */}
            <div className="text-[12px] flex justify-start items-center gap-1">
              <p>Dist:</p>
              <input
                type="text"
                id="nameInput"
                placeholder="Name"
                className="border border-black rounded p-2 Times-New-Roman-regular"
                value={upazila}
                onChange={(e) => setUpazila(e.target.value)}
              />
              <span className="print-name">{upazila}</span>
            </div>

            {/* Phone */}
            <div className="text-[12px] flex justify-start items-center gap-1">
              <p>Cell Phone:</p>
              <input
                type="number"
                id="nameInput"
                placeholder="Name"
                className="border border-black rounded p-2 Times-New-Roman-regular"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <span className="print-name">{phone}</span>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="flex flex-col items-center justify-center gap-2 w-32 h-36 mt-5">
            {imageUrl ? (
              <img src={imageUrl} alt="Uploaded" className="w-full h-full " />
            ) : (
              <input type="file" onChange={handleImageChange} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
