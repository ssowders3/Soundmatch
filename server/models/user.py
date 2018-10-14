from db import db
from sqlalchemy import VARCHAR, TIMESTAMP, func


class UserModel(db.Model):

	__tablename__ = 'users'

	id = db.Column(db.Integer, primary_key=True)

	username = db.Column(db.String(80), nullable=False)
	password = db.Column(db.String(80), nullable=False)

	created_at = db.Column(TIMESTAMP(0), server_default=func.now())

	def __init__(self, username, password):

		self.username = username
		self.password = password

	def save_to_db(self):

		db.session.add(self)
		db.session.commit()


	def delete(self):

		db.session.delete(self)
		db.session.commit()

	@staticmethod
	def find_by_username(username):

		return UserModel.query.filter_by(username=username).first()

	@staticmethod
	def find_by_id(_id):

		return UserModel.query.filter_by(id=_id).first()





