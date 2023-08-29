from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

USER_DB = 'emiliano'
PASS_DB = '40321766'
URL_DB = 'localhost'
NAME_DB = 'prime'
FULL_URL_DB = f'postgresql://{USER_DB}:{PASS_DB}@{URL_DB}/{NAME_DB}'