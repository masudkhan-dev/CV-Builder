const Language = () => {
  return (
    <main>
      <div>
        <div className="container mx-auto">
          <header className="mt-2">
            <h2 className="title bg-[#D3D7DE] py-2 px-3 text-[#258208] text-xl underline Times-New-Roman-bold">
              Language Proficiency:
            </h2>
          </header>
          <div className="mt-1">
            <div className="text-xm grid grid-cols-4 justify-center items-center gap-1">
              <p className="bg-[#E9ECE9] details text-sm py-2 px-5">Language</p>
              <p className="bg-[#E9ECE9] details text-sm py-2 px-5">Reading</p>
              <p className="bg-[#E9ECE9] details text-sm py-2 px-5">Writing</p>
              <p className="bg-[#E9ECE9] details text-sm py-2 px-5">Speaking</p>
            </div>

            <div className="text-xm grid grid-cols-4 justify-center items-center gap-1 mt-1">
              <p className="bg-[#E9ECE9] details text-sm py-2 px-5">
                1. Bengali
              </p>
              <p className="bg-[#E9ECE9] details text-sm py-2 px-5">Native</p>
              <p className="bg-[#E9ECE9] details text-sm py-2 px-5">Native</p>
              <p className="bg-[#E9ECE9] details text-sm py-2 px-5">Native</p>
            </div>

            <div className="text-xm grid grid-cols-4 justify-center items-center gap-1 mt-1">
              <p className="bg-[#E9ECE9] details text-sm py-2 px-5">
                2. English
              </p>
              <p className="bg-[#E9ECE9] details text-sm py-2 px-5">Fluent</p>
              <p className="bg-[#E9ECE9] details text-sm py-2 px-5">Fluent</p>
              <p className="bg-[#E9ECE9] details text-sm py-2 px-5">Fluent</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Language;
