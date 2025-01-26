# Bot Manager App

## Overview
The *Bot Manager App* is a React-based application for managing a collection of bots. Users can view bots, sort and filter them by class or attributes, enlist bots into their army, release them, or discharge them permanently.

This project uses modern React features like hooks, components, and a responsive design implemented with a Bento-style grid layout. The app also integrates with a backend API for fetching, adding, and deleting bot data.

---

## Features
- *Bot Collection*: Displays a list of bots fetched from the backend.
- *Your Bot Army*: Manage enlisted bots with options to release or discharge them.
- *Sorting and Filtering*: Sort bots by health, damage, or armor and filter by class.
- *Responsive Design*: A mobile-friendly interface using a Bento-style grid layout.

---

## Project Structure

BotManagerApp/
├── public/
├── src/
│   ├── components/
│   │   ├── App.js
│   │   ├── BotCard.js
│   │   ├── BotCollection.js
│   │   ├── SortBar.js
│   │   ├── YourBotArmy.js
│   ├── styles/
│   │   ├── App.css
│   ├── index.js
├── README.md


### Components
- *App.js*: The root component managing state and routing.
- *BotCard.js*: Displays individual bot details with enlist functionality.
- *BotCollection.js*: Manages bot listing, sorting, and filtering.
- *SortBar.js*: A control panel for sorting and filtering bots.
- *YourBotArmy.js*: Displays the user's enlisted bots with management options.

---

## Installation

### Prerequisites
- Node.js (>=14.x)
- npm or yarn

### Steps
1. Clone the repository:
   bash
   git clone https://github.com/your-username/bot-manager-app.git
   
2. Navigate to the project directory:
   bash
   cd bot-manager-app
   
3. Install dependencies:
   bash
   npm install
   # or
   yarn install
   
4. Start the development server:
   bash
   npm start
   # or
   yarn start
   

---

## Usage
1. Visit the app in your browser at http://localhost:3000.
2. Browse through the bot collection.
3. Sort and filter bots using the *SortBar*.
4. Enlist bots into your army by clicking the "Enlist" button.
5. Manage your army by releasing or discharging bots.

---

## API
The app interacts with a backend API to fetch and manipulate bot data.

### Endpoints
- *GET* /bots: Fetch all bots.
- *DELETE* /bots/:id: Delete a bot by ID.

### Example Bot Object
json
{
  "id": 1,
  "name": "Warrior Bot",
  "bot_class": "Assault",
  "health": 100,
  "damage": 50,
  "armor": 30,
  "avatar_url": "https://example.com/avatar.png"
}


---

## Technologies Used
- *Frontend*: React, JavaScript
- *Styling*: CSS (Bento Grid Layout)
- *Backend API*: JSON server

---

## Future Enhancements
- Add drag-and-drop functionality for managing the bot army.
- Implement a search bar for faster bot filtering.
- Include user authentication and profiles for personalized bot collections.
- Add detailed bot statistics and upgrade options.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Contact
For any questions or suggestions, feel free to reach out:
- *Email*: your-email@example.com
- *GitHub*: [your-username](https://github.com/your-username)