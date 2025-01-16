# HotelBookingDemo_ReactNextjs
A demo single-page website built with React.js and Next.js for the frontend, styled using Tailwind CSS and written in TypeScript. The backend is powered by Node.js and Express.js


link of the website :
https://hotelbookingdemo-shane.netlify.app/

you can access the live backend [here](https://hotel-booking-backend-b5ace9f6f162.herokuapp.com/) !

<b>Features</b>
- Simple `GET` endpoint returning hotels' data and images.
- Server hosted on Heroku.
- Built using Node.js and Express.js.

<img src="https://github.com/user-attachments/assets/dcd9c08c-dab1-4047-8809-8ebf5efecc0b" width=900>
<p align="center"><img src = "https://github.com/user-attachments/assets/f491bc29-924c-4c1c-a125-511063463f01"></p>


<p> </p>
<p> </p>

<b>Tools used</b>

  	typescript 5.7.2 , react 9.0.0 , next.js 15.1.2 ,  Node.js v22.12.0 , npm 10.9.0,  express.js 4.21.2 , tailwindcss 3.4.17 



<h2> Setting up instructions for testing the demo</h2>

<b>Setting Up the Backend</b>

  clone and navigate to the backend directory:
		
	git clone https://github.com/ShaneChaneShane/HotelBookingDemo_ReactNextjs.git
 	cd ./HotelBookingDemo_ReactNextjs.git/backend

  Create a .env file in the backend directory specifying the backend port

 	#example
	PORT=5000

  Restore dependencies:

 	npm install

  run the backend

	npm run start
 


<b>Setting Up the Frontend</b>

  navigate to the frontend directory:

	cd ../frontend

  Create a .env file in the frontend directory by copying .env.example.

  Set the REACT_APP_BACKEND_URL to point to the backend server.
	
  Set the REACT_APP_MODE=mock if frontend-only or  REACT_APP_MODE=production if backend-connected

		#example
	REACT_APP_MODE=mock
	REACT_APP_BACKEND_URL=http://localhost:5000

 Restore dependencies:

 	npm install

run the frontend

	npm run dev
