# README
This app is deployed at https://ourcitymap-philly.herokuapp.com/

This app is for sharing points of interest in a city as photo content.  Photos are rendered in a photo stream on the site's homepage as well as through an interactive map as markers with popups.  Users can click on the photos in the stream to see them appear on the map as well as click the markers themselves to see popups.  Clicking on the popups brings users to a show page for the photo where they can comment on it.  Users can also toggle through various filters while looking at the map to see more targeted content.  

The backend is Ruby on Rails and the frontend is React.js.  The database is PostgreSQL.  The carrierwave and fog gems are used to store photos in an AWS S3 bucket.  The Mapbox-gl API was used to created the interactive map.  Bootstrap was used for styling.  

This app was created as a two-week immersive challenge but is now an on-going project.  Upcoming features include rspec/capybara testing, more validations and filters on locally uploaded content, user pages where users can see their own saved content, and in app photo editing.  
