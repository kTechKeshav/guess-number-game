# Number Guess Game

## Project Overview
The **Number Guess Game** is an interactive, fun-filled application where players must guess a randomly generated number between 1 and 50. With each guess, the app provides feedback on whether to guess higher or lower. Players have a limited number of attempts, and the game tracks their current score and high score. The game also features dynamic UI updates, such as color changes to indicate win, loss, or ongoing status.

---
### Live Demo => https://random-number-guessgame.netlify.app/

## Features

- **Random Number Generation:** Generates a random number between 1 and 50 for every new game.
- **Dynamic Feedback:** Provides hints on whether the next guess should be higher or lower.
- **Score Tracking:** Tracks the player’s score based on remaining attempts.
- **High Score Storage:** Retains the highest score achieved during the session.
- **Dynamic UI Updates:** Changes background color and visibility of controls based on game progress.
- **Recoil State Management:** Manages global states like attempts, score, random number, and user input.
- **Responsive Design:** Ensures compatibility across devices and screen sizes.

---

## Tech Stack

### Frontend:
- **React.js:** Component-based architecture for building the user interface.
- **Tailwind CSS:** Utility-first CSS framework for styling and responsiveness.
- **Recoil:** State management library for efficient handling of application states.

---

## How to Run Locally

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/kTechKeshav/guess-number-game.git
    cd guess-number-game
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Start the Development Server:**
    ```bash
    npm run dev
    ```

4. **Open in Browser:**
    Navigate to `http://localhost:5173` to play the game.

---

## File Structure

```plaintext
guess-number-game/
├── public/
├── src/
│   ├── components/
│   │   └── NumberGuessGame.jsx   # Main game component
│   ├── context/
│   │   └── numberState.js       # Recoil atoms for state management
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── package.json
├── tailwind.config.js
├── README.md
└── vite.config.js
```

---

## Future Enhancements

- Add difficulty levels (Easy, Medium, Hard) with varying ranges and attempts.
- Implement persistent high score storage using local storage or a backend API.
- Add sound effects and animations for enhanced user experience.
- Introduce a timer mode for added challenge.

---

## Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests.

---

## Acknowledgments
Special thanks to the developers of **React**, **Recoil**, and **Tailwind CSS** for their excellent tools that made this project possible.
