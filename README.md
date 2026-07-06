# ProjectKitFox
Kit Fox Project for Software Engineering Class

Project Name 
Denpoints: San Joaquin Kit Fox Tracker

Problem Statement

Denpoints is a web application that was built in order to help record and review kit fox sightings in Bakersfield and the Kern County Area. Kit fox sightings can be useful for certain audiences like students, researchers, and conservatist groups. These observations can become easy to lose if only shared informally. This project allows users a simple way to submit sightings and view sighting records through a deployed web application.

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

## Trace Table

| Planned Feature or User Story | Status | Evidence | Notes |
|--------------------------------|--------|----------|-------|
| User can open the deployed application in a browser. | Yes | https://bender.cs.csubak.edu/team-6-s26/lab-f-emilio | The React app is successfully deployed at the team Bender URL. |
| User can navigate between main pages. | Yes | Frontend URL / demo video | Navigation includes dashboard, submit sighting, sightings, and about pages. |
| User can view sighting records. | Yes | <img width="1517" height="935" alt="sightings" src="https://github.com/user-attachments/assets/f4f8cd3a-04d3-4851-9235-3d818b75b349" /> | The sightings page correctly loads live records from Emilio’s backend API. |
| User can submit a new kit fox sighting. | Yes | <img width="552" height="485" alt="form completion" src="https://github.com/user-attachments/assets/9a8a719d-e762-4fac-a01b-fc91e1c31138" /> <img width="747" height="89" alt="form submission" src="https://github.com/user-attachments/assets/8c1268a2-5f3a-490c-ae8f-3337defd7f44" /> | The form sends observer name, sighting date, and location name to the API and successfully creates records. |
| Backend can connect to the database. | Yes | <img width="391" height="192" alt="db-test" src="https://github.com/user-attachments/assets/313b336c-40ca-488f-98d7-4be320ac901d" /> | Backend includes a database test route confirming a successful MySQL connection. |
| Backend can create and read records. | Yes | <img width="1528" height="758" alt="Backend Read Records" src="https://github.com/user-attachments/assets/2689f011-5632-4485-899e-3554795d7d0d" /> <img width="783" height="202" alt="backend new sighting" src="https://github.com/user-attachments/assets/4befaad1-22db-47e2-9538-224cdb2ee2f2" /> | These screenshots show successful creation and retrieval of sighting records through backend routes used by the frontend. |
| User can update an existing sighting from the frontend. | No | Backend route exists; frontend UI missing | `PUT /sightings/:id` exists, but there is no edit interface in the frontend yet. |
| User can delete an existing sighting from the frontend. | No | Backend route exists; frontend UI missing | `DELETE /sightings/:id` exists, but there is no delete button or confirmation flow yet. |
| User can enter health status or notes from the frontend. | No | Submit form | The team limited the form to required fields for simplicity; optional fields were deferred. |
| Form prevents future sighting dates. | No | Submit form testing | Future dates are currently not validated and this is listed as a planned improvement. |
| User can view sightings on a map. | No | Dashboard placeholder | Map visualization is planned for a future milestone but is not yet implemented. |
## How to Run or Redeploy

### 1. Clone the repository
 
```bash
git clone <your-repo-url>
cd <project-folder>
```
 
### 2. Install dependencies
 
**Backend**
 
```bash
cd backend
npm install
```
 
**Frontend**
 
```bash
cd frontend
npm install
```
 
### 3. Run the project locally
 
**Start backend server**
 
```bash
cd backend
npm run dev
```
 
**Start frontend server**
 
```bash
cd frontend
npm start
```
 
### 4. Build the frontend (for deployment)
 
```bash
cd frontend
npm run build
```
 
This creates a production-ready build folder.
 
### 5. Deploy / restart backend (production server)
 
If using PM2:
 
```bash
pm2 list
pm2 restart all
```
 
Or restart a specific process:
 
```bash
pm2 restart <process-name>
```
 
### 6. Pull latest updates on server (redeploy process)
 
```bash
git pull origin main
npm install
npm run build
pm2 restart all
```
 
### Notes
 
- Ensure environment variables (`.env`) are configured correctly on the server.
- Make sure MySQL is running before starting the backend.
- Do not upload or expose sensitive credentials (database passwords, API keys, etc.).
  
## Team Contribution Summary

- **Andrew**: Backend development (API routes, server logic, core backend functionality), contributed to individual lab work and backend testing, and helped with the final README and team development support.

- **Emilio**: Frontend development (UI, routing, forms, client-side functionality), finalized MVP implementation and quality/evidence submission, and served as the backend MVP owner responsible for API routes, database connection, and the deployed backend used by the team.

- **Arvin**: Assisted with backend development and debugging, worked on frontend/backend integration labs, supported testing workflows, contributed to documentation and reflections, helped identify final product limitations, contributed to the final README, and created the demo video.

- **Jose**: Assisted with frontend development and UI structure, contributed to project planning and general team development support.

## Final Demo Video
A screen recording of the deployed application demonstrating:

- Opening the live application
- Navigating main pages
- Submitting and viewing sightings
- Showing the GitHub repository
- One known limitation
- One planned improvement

Video Link: 

## Final Team Reflection

The final application successfully meets its core goal of allowing users to view and submit San Joaquin kit fox sightings through a full-stack web application. The frontend is fully deployed and provides working navigation between pages, including a dashboard, sightings list, submission form, and about page. The backend is stable and correctly handles API requests, including creating and retrieving sightings from a MySQL database. The system also includes health and database test routes, which confirm that the server and database connection are functioning properly.

However, some features are still incomplete. Although the backend supports update and delete operations, these actions are not yet implemented in the frontend interface. In addition, optional data fields such as health status and notes are stored in the database but are not collected through the frontend form. The application also lacks a map visualization and has limited input validation, allowing issues such as future sighting dates.

The hardest technical challenge was ensuring smooth communication between the frontend, backend, and database across a deployed environment. Debugging API requests and deployment issues on the server required coordination between team members and careful testing. From a teamwork perspective, aligning frontend and backend integration while working in parallel was also a key challenge.

If more time were available, the next sprint would focus on completing full CRUD functionality in the frontend, improving form validation, and implementing the map visualization feature. Additional work would also include improving dashboard statistics and refining error handling for a more user-friendly experience.

Overall, the team learned how important clear API design, consistent communication, and deployment awareness are when building and handing off a full-stack software project.
