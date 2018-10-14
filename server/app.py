import os
from flask import Flask 
from flask_restful import Api
from resources.posts import CreatePost, GetAllPosts
from resources.user import UserRegister,UserAuthenticate

app = Flask(__name__)
api = Api(app)
app.secretkey = 'trenton alphanso miriam trotsky'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL','sqlite:///data.db')


api.add_resource(UserRegister,'/register')
api.add_resource(UserAuthenticate, '/authenticate/<string:username>/<string:password>')
api.add_resource(CreatePost, '/createpost')
api.add_resource(GetAllPosts,'/getposts/<string:username>')



if __name__ == '__main__':


	from db import db 
	@app.before_first_request
	def create_tables():
		db.create_all()
	db.init_app(app)
	app.run(port=5000,debug=True)
