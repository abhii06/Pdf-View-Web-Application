This is a React-based web application that allows users to browse and read a collection of PDFs. It features a list view showcasing PDF titles, authors, and a button to view the selected PDF. Additionally, it includes a search bar for filtering PDFs by author names.

Features

List View: Displays PDF titles, authors, and a button to view each PDF in a new tab.

Search Bar: Allows users to filter PDFs by the author's name.
Responsive Design: Ensures a great user experience on all devices using Tailwind CSS.
Reusable Components: Components like Card and DetailView are designed for reusability.


Technologies Used
Frontend: React.js
Styling: Tailwind CSS
Data Fetching: REST API from https://api.npoint.io/dee51ea017d20efdfcc8
Prerequisites


Before running the project, make sure you have the following installed:

Node.js (version 14 or higher)
npm or yarn package manager
Getting Started
Follow these steps to set up and run the project on your local machine:

1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/pdf-collection.git
cd pdf-collection
2. Install Dependencies
Run the following command to install the required npm packages:

bash
Copy code
npm install
3. Start the Development Server
Start the application by running:

bash
Copy code
npm start
The app will be available at http://localhost:3000 in your browser.

Project Structure
bash
Copy code
src/
├── components/
│   ├── DetailView.jsx         # Component for detailed PDF view
│   ├── ui/
│   │   └── Card.jsx           # Reusable Card component for displaying PDF details
├── App.jsx                    # Main application component
├── index.css                  # Global styling using Tailwind CSS
├── index.js                   # Entry point of the React application
How to Use
Browse PDFs: Open the application to see the list of PDFs with their titles and authors.
Search PDFs: Use the search bar to filter PDFs by author name.
View PDF: Click the "View More" button on any card to open the corresponding PDF in a new tab.
