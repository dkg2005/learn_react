# Smart Parking Pass System

A smart parking pass management system built with **React.js** that allows user and vehicle registration, dynamic QR code generation, and PDF pass downloading. The system efficiently manages parking passes based on vehicle type and duration while ensuring data persistence using local storage.

## 🚀 Features
- **User Registration**: Register users with Name, Contact No, and Role (Student/Faculty).
- **Vehicle Registration**: Register vehicles by selecting an owner from registered users, specifying vehicle type (Cycle, Bike, Car), and vehicle number.
- **Pass Generation**:
  - Issue parking passes based on the selected vehicle and duration (Daily, Monthly, Annual).
  - Automatically calculates fare based on vehicle type and pass duration.
  - Generates QR code for digital verification.
  - Allows users to download a PDF of the generated pass.
- **Data Persistence**:
  - Utilizes local storage to retain user and vehicle data across sessions.
- **Responsive UI**:
  - User-friendly interface with dynamic updates using `useEffect`.
  - Clean and structured design with color-coded UI improvements.

## 🛠 Technologies Used
- **React.js** (Functional Components, Hooks)
- **JavaScript (ES6+)**
- **HTML & CSS** (Responsive UI)
- **Local Storage** (Data persistence)
- **QR Code Generation**
- **PDF Generation** (for pass download)

## 📸 Screenshots
![Parking Pass System Screenshot](![parking/Project-Photos/PARKING PROJECT 1.png](https://github.com/dkg2005/Learn-React/blob/main/parking/Project-Photos/PARKING%20PROJECT%201.png))

## 🎯 Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/dkg2005/Learn-React/tree/main/parking
   ```
2. Navigate to the project folder:
   ```sh
   cd smart-parking-pass
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
5. Open `http://localhost:3000` in your browser.

## 📝 Usage Guide
1. **Register a User**: Enter the user's name, contact number, and select their role.
2. **Register a Vehicle**: Select an existing user, enter the vehicle number, and choose the vehicle type.
3. **Generate a Parking Pass**: Select a registered vehicle, choose the pass duration, and confirm the fare.
4. **QR Code & PDF Download**: The system generates a QR code and provides a PDF download option for the parking pass.

## 🏗 Future Enhancements
- Implement backend integration with a database (Firebase, MongoDB, etc.).
- Add user authentication (login/signup) for enhanced security.
- Enable real-time pass verification through QR code scanning.
- Implement admin dashboard for better management.

## 📜 License
This project is open-source and available under the **MIT License**.

## 🙌 Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request with improvements.

## 📬 Contact
For any queries or suggestions, feel free to reach out:
- **LinkedIn**: [Dhruv Kumar Gupta](https://www.linkedin.com/in/dhruv-gupta-7666d71/)
- **Email**: dhruvgupta766671@gmail.com
