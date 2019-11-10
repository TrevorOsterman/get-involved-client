# getInvolved

Live app: https://get-involved.now.sh

## Summary

getInvolved is an organization platform for volunteer
opportunities in your community. Our aim is to take the trouble out of
trying to find how you can make a difference, and rather
where you can take action immediately.

explore, post, search, organize, and share volunteer opportunities all
from one central location with getInvolved.

![Screen Shot 2019-11-10 at 9 21 06 AM](https://user-images.githubusercontent.com/50758006/68547224-41af2400-039c-11ea-8eb7-b174fe5a8230.png)

![Screen Shot 2019-11-10 at 9 30 14 AM](https://user-images.githubusercontent.com/50758006/68547263-ac605f80-039c-11ea-80d0-c2396a9bd10e.png)

## API

Base API URL: https://rocky-depths-99123.herokuapp.com/api/

getInvolved's API uses the base API and a couple endpoints to operate.

### /events

#### Methods:

GET: these requests will return a list of events in the database sorted by date ascending.

POST: requests will need to include a json-formatted body which includes the required keys and values for "title", "event_date", "city", "state", and "description". The return response should be the new event added to the database along with it's unique id.

### /events/:eventid

#### Methods:

GET: returns the event details of a specific event when unique event id is provided

PATCH: updates the event details of a specific event. request body must only include key/value for updated field(s).

DELETE: deletes specified event when supplied with unique ID

## Technologies:

The getInvolved client was created using React, with the server constructed using Node.js and Express. getInvolved's database was created using Postgres.
