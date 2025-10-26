# Lab Activity: Building Your First Secure API Endpoint for "SecurePH"

## Course: DCIT 26

This repository contains the code and instructions for the lab activity focused on building a secure API endpoint for the "SecurePH" project.

### Technologies Used

- Node.js
- Express
- JavaScript
- Postman (for testing)

### How to Run

1. Clone this repository
2. Install dependencies with `npm install`
3. Run the server using `node index.js`
4. Test the API endpoints using Postman or curl

### API Endpoints

- `GET /api/citizens` — Retrieve all citizens
- `POST /api/citizens` — Add a new citizen (requires name, sss_id, philhealth_id)

### Notes

- This project uses an in-memory database for demonstration purposes.
- API key authentication middleware is used to secure the POST endpoint (`X-API-Key` header required).
- Basic validation checks for required fields when adding a new citizen.
