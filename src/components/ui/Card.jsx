import React from "react";

const Card = ({ pdf }) => {
    return (
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl">
        <div className="p-6">
          <h3 className="text-white text-2xl font-bold mb-3">{pdf.name}</h3>
          <p className="text-gray-300 text-lg">{pdf.author}</p>
          <div className="mt-4 flex justify-between items-center">
            <a href={pdf.link} target="_blank" rel="noopener noreferrer">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg transform transition-all duration-300">
                View PDF
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  

export default Card;
