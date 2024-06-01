import { useState } from "react";

const Footer = () => {
  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <main>
      <div className="container mx-auto">
        <div>
          <p className="text-nd Times-New-Roman-bold mt-8">Faithfully yours,</p>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center gap-2 w-[100px] h-[30px] mt-2">
            {imageUrl ? (
              <img src={imageUrl} alt="Uploaded" className="w-full h-full " />
            ) : (
              <input type="file" onChange={handleImageChange} />
            )}
          </div>
        </div>
        <div>
          <p className="ml-2 -mt-1">------------------</p>
          <p className="text-sm mt-5">Date: </p>
        </div>
      </div>
    </main>
  );
};

export default Footer;
