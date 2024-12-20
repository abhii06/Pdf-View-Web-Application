import React, { useState, useEffect } from "react";
import Card from "./components/ui/Card";
import DetailView from "./components/DetailView";

const App = () => {
  const [pdfData, setPdfData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPdf, setSelectedPdf] = useState(null);

  useEffect(() => {
    fetch("https://api.npoint.io/dee51ea017d20efdfcc8")
      .then((response) => response.json())
      .then((data) => setPdfData(data));
  }, []);

  // Filter PDFs based on search query
  const filteredPdfs = pdfData.filter(
    (pdf) =>
      pdf.author &&
      pdf.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle the card click to display detailed view
  const handlePdfClick = (pdf) => {
    setSelectedPdf(pdf);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tl from-blue-500 to-indigo-600 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center text-white">
          <h1 className="text-4xl font-bold">Explore PDF Collection</h1>
          <input
            type="text"
            placeholder="Search by Author"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mt-4 p-2 rounded-lg text-black"
          />
        </div>
        {/* Display cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredPdfs.map((pdf, index) => (
            <Card
              key={`${pdf.name}-${pdf.author}-${index}`} // Unique key combining name, author, and index
              pdf={pdf}
              onClick={() => handlePdfClick(pdf)} // Handle click to show detailed view
            />
          ))}
        </div>
        {/* Display detailed view if a PDF is selected */}
        {selectedPdf && <DetailView pdf={selectedPdf} />}
      </div>
    </div>
  );
};

export default App;
