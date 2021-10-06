## To Run code

open your preferred terminal and cd to file

### npm start

This will run the app in the development mode.

Open http://localhost:3000 to view it in the browser.

## Brief
### Technical Decision:
This app was created with React, since React is flexible, and very suitable for changing data on a page without reloading the entire page.

### addition to wireframe 
Based on the mockup, it is assumed that clicking on the "Add new member" button will open up a form to allow for data to be inputed. 
This form is made to appear when clicked, and disappear when the member data has been submitted.
The current data is stored in a temporary array just to test for functionality. This system will need to be changed so data is saved, and retrieved from a database or API.

### Questions for design team
Will there be an option for image of household member, and preferred location?

Should there be an option to filter member at the top of the list, so it is easier to find members by name?

Should data duplication be allowed?

### Next Steps
add an id to each member data (I usually use UUID for random ids). For the initial mockup I dindn't add it since it wasn't necessary at the time.

add buttons (Delete & Update) to each card

Removing household member

To Delete => 


Temporary: add a function to the button onClick, that will filter the household array and set it's state to include everything but the member with selected id. 


Ideal: Search by Id in the database, and delete on click. e.g with Mongodb db.findOneAndDelete({id: id}, function())


Updating household member


To Edit =>
Modify add new member form and set a useState that allows button name to change from "submit" to "edit", and prefill input with selected data.


Temporary: add a function to the button onClick, that will filter the household array, and set it's state to include everything, but change the information with the id.
selected id accordingly.

Ideal: Search by Id in the database, and update on click. e.g with Mongodb db.findOneAndUpdate({id: id}, function())
