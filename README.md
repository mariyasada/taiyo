# COVID-19 Dashboard

A responsive React application to track COVID-19 data, including global statistics and country-specific information. The application features a sidebar with navigation to a Contact page and a Charts and Maps page.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

### Sidebar Navigation
- **Contact Page**: 
  - URL: `/`
  - Create, edit, view, and delete contact details using React-Redux for state management.
- **Charts and Maps Page**:
  - URL: `/charts-and-maps`
  - Charts displaying COVID-19 cases by date for all countries.
  - Interactive map with:
    - Gray icons: Display country-specific data including active cases, total cases, recovered cases, and deaths.
    - Red icons: Display global COVID-19 statistics.

### Responsive Design
- The application is fully responsive and works on various screen sizes.

## Technologies Used
- **React**: For building the user interface.
- **React Router**: For handling navigation.
- **React-Redux**: For state management.
- **React-Leaflet**: For displaying maps.
- **React-chartjs-2**: for displaying Chart
--**React-Query** :for handling api calls and data management 
- **Axios**: For making API requests.
- **UUID**: For generating unique identifiers.
- **Tailwind CSS**: For styling the application.
- **TypeScript** : for type checking

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/covid-dashboard.git
   cd covid-dashboard
2. Install Dependencies
    npm install



