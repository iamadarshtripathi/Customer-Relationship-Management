import mysql.connector

database = mysql.connector.connect(
    host = 'localhost',
    user = 'root',
    passwd = '12345'
)
cursorObj = database.cursor()

cursorObj.execute("CREATE DATABASE Addesco")

print('All Done!!!')