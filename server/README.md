# SoundMatch

REST API server for Soundmatch


# Running Locally
* Make sure you have python installed
* Run `pip install -r requirements.txt` from the root of the project
* Run `python app.py` 
* Server is now running on `localhost:5000`


# Available Endpoints

* A live version is available at `https://sound-match.herokuapp.com/`
  * To run example commands, install `HTTPIE`

* POST `/register` -- register new user
  * example - `http -v POST https://sound-match.herokuapp.com/register username="KarlMarx" password="lala"`

* GET `/authenticate/username/password -- authenticate a user
  * example - `http -v GET https://sound-match.herokuapp.com/authenticate/KarlMarx/lala`

* POST `/createpost` -- create a new post
  * example - `http -v POST https://sound-match.herokuapp.com/createpost username="KarlMarx" message="My first post"`

* GET `/getposts/username` -- get all posts for a user
  * example - `http -v GET https://sound-match.herokuapp.com/getposts/KarlMarx`

