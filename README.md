# Developer Resources
This app provides a place for developers to post and share their favorite resources and to learn about resources that other developers are using. The app is a collaborative effort among Robert Norwood, Danielle Scaturro and Spencer Watson. 

## To access the App
  * Post Heroku link once deployed
  
## Wireframes
  * https://www.figma.com/file/MkA8YDeeFdd1OgJM90qdSa/Wireframes?node-id=0%3A1
  
## User Story
 * To use the app, the user accesses it from their browser at the above link, which will open to the homepage.
 * The homepage displays "Home" and "Login or Register" buttons at the top of the screen. It also displays the full collection of resources entered by all the users in a card format. The user can click through to a resource or view embedded videos directly in a card.
 * The user can register, if they are new to the site, or login via the button at the top of the screen.
 * Once logged in, the user is directed to "My Resource Page." From there: 
    * The user can toggle to "View All Resources" through a button near the top-left of the screen. 
    * They can also enter a new resource through the "Upload Resource" form in the center of the screen.
    * Under this form, is a listing of the user's personal resources, which they can edit or delete to keep the list fresh and relevant.
    * Just as with the All Resources view, the user can click through links in the display cards to access a resource and also view videos directly in the app.
    * The user can logout via the link in the upper right corner of the app.
    
 ## Technical Specifications
 This app was created using Flask, React and Semantic UI React. It is deployed on Heroku and requires no installation. 
 
## Challenges
The development team ran into a number of challenges with this project, the largest of which were:
  * Toggling back and forth between the "all resources" and "my page" views and getting the correct data to populate each of those pathways
  * Creating a navigation bar in React
 
## Potential Forthcoming Features
There are a number of features the development team would like to add:
 * To add another model that enables users to track workshops and pull location information from an API and displays a map of the workshop location. Similar to the resource model we created, a user could view all workshops that have been entered by all users and the workshops they have entered in separate views. 
 * The ability to "like" resource and workshops and to create associated "favorities" views from the likes
 * A delete modal that asks a user if they are sure they want to delete
