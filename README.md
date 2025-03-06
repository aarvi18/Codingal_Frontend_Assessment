# Codingal Frontend Assessment

## Overview
This project is a frontend assessment for Codingal, built using ReactJS. It includes a responsive navbar with a countdown timer and a modal, as well as a paginated posts page with infinite scrolling.

## Tech Stack
- **ReactJS**: Core framework
- **CSS Flexbox**: Used for layout styling
- **TypeScript (Bonus)**: Provides type safety
- **TailwindCSS (Bonus)**: Utility-first CSS framework
- **React Router**: For navigation
- **React Query**: For API data fetching
- **Framer Motion (Bonus)**: For animations

## Features

### Part 1: Responsive Navbar
- **Normal and Mobile Views**: Adaptive design for different screen sizes
- **Countdown Timer**: Starts at 10 minutes and counts down
- **End Class Button**: Opens a modal with two actions:
  - "End Class": Closes modal and stops timer
  - "Cancel": Closes modal but keeps timer running
- **Hamburger Menu**: Expands into a dropdown on mobile view

### Part 2: Posts Page (`/posts`)
- **Fetch Posts from API**: Uses [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts)
- **Infinite Scrolling**: Loads 10 posts at a time
- **Loading Indicator**: Shows a loader while fetching data
- **Error Handling**: Handles API failures gracefully
- **Animations**: Smooth transitions for UI elements

## Installation & Setup
```sh
# Clone the repository
git clone https://github.com/aarvi18/Codingal_Frontend_Assessment.git
cd Codingal_Frontend_Assessment

# Install dependencies
npm install

# Start the development server
npm run dev
```

## File Structure
```
/src
  /assets                   # Logos
  /components               # Reusable UI components
      /base_components      # All small small components
      /modals               # All modals
        /EndClassModals     # EndClassModals
      /nav_bar              # Nav bar
  /pages                    # Page components
```

## How to Run
1. **Navbar**: Check responsive behavior, countdown, and modal functionality.
2. **Posts Page**: Scroll down to load more posts with infinite scrolling.

## Future Improvements
- Implement authentication for user-based interactions.
- Add unit tests using Jest and React Testing Library.

---
This project follows best practices in React development, ensuring scalability and maintainability.