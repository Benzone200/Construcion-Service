# Construction Service React App

This is a React-based web application for a construction service company. The app showcases various services offered, customer reviews, and project information with a modern, responsive design and smooth animations.

## Features

- Home page with an overview of services including Electrical, Plumbing, Renovation, Repairs, Cleaning, Carpentry, and Pest Control.
- Customer reviews section with ratings from platforms like Google, Edinburgh, and Trustpilot.
- Animated UI components using Framer Motion for smooth transitions and effects.
- Responsive design optimized for desktop and mobile devices.
- Navigation bar and footer components for easy site navigation.
- Carousel component to highlight featured content or promotions.

## Technology Stack

- React 19
- Vite for build tooling and development server
- Tailwind CSS for styling
- Framer Motion for animations
- ESLint for code linting and quality

## Project Structure

- `src/` - Source code directory
  - `components/` - Reusable UI components like Navbar, Footer, Carousel
  - `Pages/` - Page components such as Home, About, Services, Projects, Pricing
  - `assets/` - Images and other static assets
  - `animations/` - Animation variants for Framer Motion
- `index.html` - Main HTML file
- `package.json` - Project metadata and dependencies
- `vite.config.js` - Vite configuration

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/construction-service.git
   ```
2. Navigate to the project directory:
   ```
   cd construction-service
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Running the App

Start the development server with hot module replacement:
```
npm run dev
```
Open your browser and go to `http://localhost:5173` (or the URL shown in the terminal).

### Building for Production

To build the app for production deployment:
```
npm run build
```
The output will be in the `dist` directory.

### Preview Production Build

To locally preview the production build:
```
npm run preview
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.
