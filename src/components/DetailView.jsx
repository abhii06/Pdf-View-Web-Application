import React from "react";

const DetailView = ({ pdfUrl, title }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ marginBottom: "20px", fontSize: "24px", color: "#333" }}>
        {title}
      </h1>
      <iframe
        src={pdfUrl}
        title={title}
        style={{
          width: "80%",
          height: "500px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      />
    </div>
  );
};

export default DetailView;
