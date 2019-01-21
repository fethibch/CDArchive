# Springboot2.0-Angular7-CDArchive with pipe filter
In this project we have created a web application that manage CDs.
For the BackEnd side ,this project contains simple CRUD Restful Web Services with Spring Boot to Creat,Read,Update and Delete
Cds.The FrontEnd Angular app is built using angular-cli and offers filtering for the Cds by name,gender and release_date.
## BackEnd side
* **SpringBootv2.0**
* **Maven3+**
* **Java8**
* **RestController**
* **Mysql Database**
## FrontEnd side
* **Angular7 Components**
* **Modal**
* **CRUD Functionality (Create, Read(view/display), Update, Delete)**
* **PIPE**
## How to Run
I used the IntelliJ IDE for running this project.
once unzipped the folder import the ``pom.xml`` file this will automatically install all the dependencies for the project.
```
create an Sql dataBase named "cdarchive"
 log in to MySQL to the database cdarchive and import the file cdTable.sql ,this will create a table named "cd" that
 contains some data examples.
```
**log to ``frontend`` folder and run :**
* ``npm install`` to install Node packages
* ``ng serve`` to run the Frontend
```
The application will be accessible at http://localhost:4200.
```
## Screenshots of Demo
**Home Page (CDs list)**
![cdlist](https://user-images.githubusercontent.com/40913019/51481681-b88b1a00-1d94-11e9-8d56-4d6db5427b7b.png)
**ADD CD**
![addcd](https://user-images.githubusercontent.com/40913019/51481676-b5902980-1d94-11e9-8e1f-12962976396d.png)
**UPDATE CD**
![updatecd](https://user-images.githubusercontent.com/40913019/51481707-c93b9000-1d94-11e9-9637-9bbfffafd7a1.png)
**Filter CDs by name**
![namefilter](https://user-images.githubusercontent.com/40913019/51481699-c5a80900-1d94-11e9-89e0-3985cf8a22b9.png)
**Filter CDs by gender**
![gender filter](https://user-images.githubusercontent.com/40913019/51481696-c2148200-1d94-11e9-999c-b2906d6b1e4b.png)
**Filter CDs by relaese_date**
![date filter](https://user-images.githubusercontent.com/40913019/51481689-bfb22800-1d94-11e9-944e-a14eb0f0f1bf.png)


## Authors
* **Fathi Benchaabene** ``mail:fathibch94@gmail.com``
