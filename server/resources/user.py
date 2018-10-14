from flask_restful import Resource, reqparse
from models.user import UserModel

class UserRegister(Resource):

	parser = reqparse.RequestParser()
	parser.add_argument('username', type=str, required=True, help='username is required')
	parser.add_argument('password', type=str, required=True, help='password is required')


	def post(self):

		data = UserRegister.parser.parse_args()

		if UserModel.find_by_username(data['username']):
			return {'message':'username already taken'}

		user = UserModel(data['username'], data['password'])
		user.save_to_db()
		return {'message':'successfully created user'}


class UserAuthenticate(Resource):
	
	def get(self, username, password):

		user = UserModel.find_by_username(username)
		if not user:
			return {'message':'no user with this username found'}
		if password!=user.password:
			return {'message':'incorrect password'}

		return {'message':'successfully authenticated user'}



