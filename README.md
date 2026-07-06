# ProjectKitFox
Kit Fox Project for Software Engineering Class

Project Name 
Denpoints: San Joaquin Kit Fox Tracker

Problem Statement

Denpoints is a web application that was build in order to help record adn review kit fox sightings in Bakersfield and the Kern County Area. Kit fox sightings can be useful for certain audiences like students, researchers, and conservatist groups. These observations can become easy to lose if only shared informally. This project allows users a simple way to submit sightings and view sighting records through a deployed web application.

Target Users

The intended user group for our web application is CSUB students or local community members, researchers, and conservation groups who would want reports or reviews of San Joaquin kit fox sightings. 

Final Implemented Features
- Users can open deployed React frontend in browser
- Users can navigate between the dashboard, submit sighting page, sightings list, and about page
- Users can view live sighting records loaded form the backend API
- Users can submit a new sighting record using name, sighting date, and location name
- The frontend can call the backend API
- The backend can connect to the MySQL database
- The backend can read, create, update, and delete sighting records through API routes
- The backend includes diagnostic routes for checking server health and connection to the database

Known limitations

- Frontend currently supporting viewing and creating sightings, but does not yet provide user interface buttons or forms for updating or deleting existing sightings. 
- Backend supports update and delete routes, but the routes are not fully exposed in the frontend UI.
- Submit form intentionally only uses the required fields such as observer name, sighting date, and location name. However, health status and notes are stored by the backend, but the final frontend does not ask users for those fields.
- Frontend allows for future sighting dates, such as 2030. The team noticed this during testing and would like to improve data validation at a future point. 
- The dashboard statistics are still prototype-style display values and not fully calculated from the live database.
- The map view was not implemented yet.
- Error messages are basic and could be improved to be more user-friendly.
- Some code structure still reflects earlier lab work, so some future cleanup could make the frontend and backend easier to maintain.

Tech Stack

- Frontend: React/Vite
- Backend: Node.js/Express
- Database: MySQL
- Server: bender.cs.csubak.edu
- Reverse Proxy: Nginx
- Process Manager: PM2
- Version Control: GitHub

Production URLs

- Frontend URL:
https://bender.cs.csubak.edu/team-6-s26/lab-f-emilio/

- Backend API URL:
https://bender.cs.csubak.edu/emilio/

- GitHub Repository:
https://github.com/Emilio0livas/Denpoints

- API Routes
The backend includes the following routes:
GET /health
GET /db-test
GET /sightings
POST /sightings
GET /sightings/:id
PUT /sightings/:id
DELETE /sightings/:id

The final frontend mainly uses:
GET /sightings
POST /sightings

The update and delete routes exist in the backend however were not connected to the frontend controls.

Database Summary
Main table: sightings
Important Fields
- id
- observer_name
- sighting_date
- location_name
- health_status
- notes
- created_at
- updated_at

The final frontend submits observer name, sighting date, and location name. The final backend stores the health status and notes apart of the sightings table, but those fields were removed from teh final frontend form.

Trace Table