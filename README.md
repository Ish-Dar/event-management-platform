# Event Management Platform

This project is a basic Event Management Platform (EMP) designed using Node.js and TypeScript. It allows users to manage events with operations such as adding, updating, deleting, retrieving, and listing events.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add a new event
- Update an existing event
- Delete an event
- Retrieve an event by its ID
- List all events with optional filters

## Technologies Used

- Node.js
- TypeScript
- Express.js
- UUID for generating IDs
- Postman for API testing

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Ish-Dar/event-management-platform.git
   cd event-management-platform



### API Documentation

#### Base URL

The base URL for all endpoints is `http://localhost:3000` unless configured differently.

---

#### Add a New Event

- **Endpoint:** `POST /events`
- **Description:** Creates a new event with the provided details.
- **Request Body:**

  ```json
  {
      "eventName": "Event Name",
      "eventDate": "2024-07-10T12:00:00.000Z",
      "organizer": "Organizer Name",
      "email": "organizer@example.com",
      "phone": "+1234567890",
      "location": {
          "street": "123 Main St",
          "city": "City",
          "state": "State",
          "zip": "12345"
      }
  }
