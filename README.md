# litmovie-app
A Movie App themed _**lit-movie**_ provides a simple and intuitive single page web application of movies Database. Crafted with the state of the art **Single Page Application** technique using _**MEAN stack**_ in partial fulfillment of the requirements for MWA course (March, 2020) at Maharishi International University, USA

# Features
The app has the following features:
*   **Movies:** Fetches movie from the famous **MovieDB** website using their public API to render blockbuster movies to users. This serves as the entry point for the application and readily available to all users
*   **Movie:** Each movie is considered as a case and all information regarding the movie is further provided. Considering the importance of this component, it is only available to authenticated users. 
*	**Actors**: Actors of a particular movie are further provided to the users with their pictures and names
*	**Favorite:** Should in case a user is interested in a movie, we implemented a make a favorite feature which allows users to add movie to their favorite list. This feature is synonymous to bookmarking a movie. Coupled with the feature is another feature which allows the user to remove movie(s) from their favorite list.
*   **Likes/Dislike:**: Users of the system can like or dislike a movie. This is stored in the database and is readily fetched upon request
*	**Comment:** We implemented functionality that allows users to express their thoughts through comments as well as view other users comments about a specific movie
*	**Trailer:** We used the movie ID from the MovieDB API to yet communicate with Youtube API for the purpose of showing the users the trailer of the movie 

# Technologies Used 
1. MongoDB and Mongoose
1. Nodejs and Express
1. Angular and Angular Material with Angular Material Design Bootsrap 
1. Jwt
1. Heroku for deployment 
1. Movie API from [MovieDB](https://www.themoviedb.org/settings/api)
1. Trailer from Youtube API


# Challenges 
1. Integrating the client side application with server side 
1. Deployment on Heroku server


# Acknolwedgement 
We dedicate all of our efforts to our wonderful professor _**Asaad Saad**_. This course indeed changed our lives. 
