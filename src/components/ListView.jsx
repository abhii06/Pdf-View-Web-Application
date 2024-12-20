import React from "react";
import Card from "./ui/Card";
import SearchBar from "./ui/SearchBar";

const ListView = ({ pdfs, onSearch, onViewPdf }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <SearchBar placeholder="Search by title or author" onSearch={onSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pdfs.map((pdf) => (
          <Card
            key={pdf.id}
            image={pdf.cover}
            title={pdf.title}
            subtitle={`Author: ${pdf.author}`}
            buttonText="View PDF"
            onButtonClick={() => onViewPdf(pdf)}
          />
        ))}
      </div>
    </div>
  );
};

export default ListView;
