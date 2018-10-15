from db import db
from sqlalchemy import VARCHAR, TIMESTAMP, func

class PostModel(db.Model):

	__tablename__ = 'posts'

	id = db.Column(db.Integer, primary_key=True)
	created_at = db.Column(TIMESTAMP(0), server_default=func.now())
	
	message = db.Column(db.Text, nullable=False)

	owner_name = db.Column(db.String(80), nullable=False)

	def __init__(self, owner_name, message):

		self.owner_name = owner_name
		self.message = message


	def save_to_db(self):

		db.session.add(self)
		db.session.commit()

	def delete(self):

		db.session.delete(self)
		db.session.commit()

	def json(self):
		return {'created_at':str(self.created_at), 'message':self.message}


	@staticmethod
	def find_by_ownername(owner_name):
		posts = PostModel.query.filter_by(owner_name=owner_name).all()
		ret = [post.json() for post in posts]
		return ret



