# ecommerce_sql database management server 

## ABOUT 

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

This database does just that.

## INSTALLATION 

PLEASE NOTE YOU MUST HAVE MYSQL SERVER INSTALLED AND RUNNING ON YOUR MACHINE TO USE THIS APP. FOR DOCUMENTATION AND HOW TO INSTALL THAT PLEASE VISIT THIS LINK https://dev.mysql.com/downloads/mysql/  

CLONE THE REPO from https://github.com/alexh3422/ecommerce_sql , and navigate to that repo folder on your local machine using your terminal of choice. 

Run the command ' npm i ' to install the required dependencies

Run the command ' mysql -u root -p ' and put in your local sql server password to run the following mysql command. (you can use whatever username/password you have for your local mysql server)

Run the command SOURCE ./db/schema.sql to create the database which by default is called eccomerce_db

type ' quit ' to switch back to exit out of your sql terminal capabilities and back to your normal terminal functionality 

open up the project in your IDE of choice and create a file called .env in the root folder (this is what will give the app access to your local sql server)

in the .env file insert the following three lines :

DB_NAME=eccomerce_db
DB_USER=root
DB_PW=password 

(you should replace the user and pw with whatever your local sql username and password is) 

SAVE THE CHANGES and you can exit out of your IDE and go back to your terminal window which should still be navigated towards the root folder of the repo

type the command ' npm run seed ' which will seed the database with demo data (you can skip this step and just use the post routes to add to the server from scratch (please refer to the video demo below to see the structure of that. 

run the command 'npm start ' - this will start the server and create the tables PRODUCTS, CATEGORIES, and TAGS. 

The server is now up and running by default on http://localhost:3001 and you can use the routes /api/products, /api/categories and /api/tags to do whatever you want with your data on the server. ( note you can also change the routes / server port to your specific liking by navigating through the repo in your IDE and updating the files to your preferences) 

VIDEO DEMO : https://drive.google.com/file/d/1UApm_peEHlJwTSJByuX1R9SP8CR01kWZ/view?usp=share_link 

## Questions 

if you have any questions please visit me at my github page https://github.com/alexh3422 

Below is an example photo of the end result once your server is up and running 

<img width="1073" alt="Screenshot 2023-02-07 at 11 11 16 PM" src="https://user-images.githubusercontent.com/115325648/217463195-703c7ec6-e292-4de3-ac6f-a1e45d0fa425.png">



