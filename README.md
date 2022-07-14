# API-For-Your-Social-Network


# About this API

This API was developed in Nodejs and allows you to save social network data in a NoSQL database. This API use MongoDB to save all your data and It also use an ODM which is mongoose.

# Functionality
The API has 3 basic CRUD functionalities.

1- Create, Update and Delete a User.

* To create a user the user must provide a username and a valid email address.
* Users can add friends and have a list of friends, as well a record of all the friends that she or he has.
* User model has a reference to all Thoughts created by the same user.
    
2- Create, Updated and Delete Thoughts.
* To create a Thought must provide the thoughtText, username and the userId.

3- React to others thoughts.
* Each user can react to the thoughts of other users by adding a comment to that thought.
       
    

was developed in Nodejs using a MVC arquitecture Pattern. 
