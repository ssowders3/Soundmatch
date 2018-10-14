from flask_restful import Resource, reqparse
from models.posts import PostModel
from models.user import UserModel

class CreatePost(Resource):

	parser = reqparse.RequestParser()
	parser.add_argument('username', type=str, required=True, help='username is required')
	parser.add_argument('message', type=str, required=True, help='message is required')


	def post(self):

		data = CreatePost.parser.parse_args()

		if not UserModel.find_by_username(data['username']):
			return {'message':'incorrect username'}
		user = PostModel(data['username'], data['message'])
		user.save_to_db()
		return {'message':'successfully created post'}



class GetAllPosts(Resource):
	
	def get(self, username):

		user = UserModel.find_by_username(username)
		if not user:
			return {'message':'no user with this username found'}

		return {'username':username,'posts':PostModel.find_by_ownername(username)}





