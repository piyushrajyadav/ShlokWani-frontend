# ShlokWani-frontend
for the backend of the project - https://github.com/piyushrajyadav/shlokwani

Website Link - https://shlokwani.netlify.app/

## overview of website 
### search page 
![image](https://github.com/user-attachments/assets/d1d59cb0-aa2c-400f-8828-9b56cfb5df3a)

### result after search 
![image](https://github.com/user-attachments/assets/aea99590-2bb8-4819-b5af-c2c57516ed3f)



## Overview
The **Gita Shlok Finder** is a web application where users can input a chapter and shlok number from the Bhagavad Gita to retrieve the corresponding shlok and its translation by great authors and Swamis. The frontend is built with **React**, and the backend is powered by **Flask**.

## Features
- **User Input**: Enter chapter and shlok number to find specific Gita shloks.
- **Shlok Details**: Displays the Sanskrit shlok along with its translation.
- **Translations by Renowned Authors**: Includes translations by revered Swamis and authors.
- **Fast and Responsive**: Built with a modern tech stack for a seamless user experience.

## Tech Stack
### Frontend:
- React
- HTML, CSS, JavaScript

### Backend:
- Flask
- Python


## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js and npm (for the frontend)
- Python 3.9+ (for the backend)
- Virtualenv (optional but recommended)

### Backend Setup
1. Clone the repository:
  
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the Flask application:
   ```bash
   flask run
   ```
   By default, the app runs on `http://127.0.0.1:5000`.

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The React app will run on `http://localhost:3000`.


## folder structure

├── backend/  
│   ├── app.py               # Flask backend  
│   ├── gita_data/           # Folder containing shlok JSON files  
│   │   ├── bhagavadgita_chapter_10_slok_1.json  
│   │   ├── bhagavadgita_chapter_10_slok_10.json  
│   │   ├── bhagavadgita_chapter_10_slok_11.json  
│   │   └── ...  
│   ├── utils.py             # Utility functions for loading JSON data  
│
├── frontend/  
│   ├── public/  
│   │   └── index.html       # Main HTML template  
│   ├── src/  
│   │   ├── components/  
│   │   │   ├── InputForm.js # Component for input fields  
│   │   │   ├── Result.js    # Component to display results  
│   │   │   └── App.js       # Main React component  
│   │   ├── styles/  
│   │   │   └── App.css      # CSS for the application  
│   │   └── index.js         # React entry point  
│   ├── package.json         # Dependencies for React  
│
├── README.md                # Instructions for the project  
└── requirements.txt         # Python dependencies  



## Future Enhancements
- Add a search history feature for users.
- Include audio recitation of shloks.
- Expand translations to include more authors and languages.
- Deploy the application to platforms like Heroku or AWS.

## Contributing
Contributions are welcome! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request.

## License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)**.

You may not use this project for commercial purposes without explicit permission from the owner. See the [LICENSE](LICENSE) file for details.


## Contact
For queries or support, contact **Piyush Yadav** at piyushyadavrajyadav@gmail.com.

