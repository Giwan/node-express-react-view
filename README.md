# Express React Views

uses [express-react-views](https://github.com/reactjs/express-react-views) to render html on the server and only then send it to the client. This is interesting because I need the application to behave like PHP or JSP. 
The client browser only receives HTML. This is somewhat like React server side rendering minus the Hydrating step that would take place on the client. Each new request is still another round trip to the server as would be the case on a static site. 

## Application Stack

- MySQL
Contains existing PROD customer data. Changing things would be too time consuming. 

- NodeJS
Uses for the server logic


- React Views
Used as a template engine to render the final HTML. Runs on the node server. The client never sees this. 

- HTML
The final html that the client browser receives. 

