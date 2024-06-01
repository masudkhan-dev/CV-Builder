const Footer = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main>
      <div className="flex justify-center items-center mt-20">
        <button
          className="bg-green-500 px-3 py-2 rounded"
          onClick={handlePrint}
        >
          Print
        </button>
      </div>
    </main>
  );
};

export default Footer;
