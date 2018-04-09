# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Photo.delete_all
Comment.delete_all
Category.delete_all

u1 = User.create( display_name: 'Joe Schmoe', email: 'js@mailboys.com', password: 'phillyphilly' )

u2 = User.create( display_name: 'Jane Doe', email: 'jd@mailgirlz.gov', password: 'phillyphilly')

u3 = User.create( display_name: 'Robert Haynes', email: 'robhay@mailgirlz.gov', password: 'phillyphilly')

u4 = User.create( display_name: 'Pat Condon', email: 'PCondon@mailgirlz.gov', password: 'phillyphilly')

u5 = User.create( display_name: 'Kelly Smith', email: 'ksmith1234@mailservice233232.com', password: 'phillyphilly' )

u6 = User.create( display_name: 'Bob Jones', email: 'randomemail23410@anotheremailservice23x.com', password: 'phillyphilly' )

u7 = User.create( display_name: 'Liz Johnson', email: 'randomemail23d410@anotheremailservice23x.com', password: 'phillyphilly' )

c1= Category.create( name: 'Art')
c2= Category.create( name: 'Food')
c3= Category.create( name: 'History')
c4= Category.create( name: 'Green Space')
c4= Category.create( name: 'Misc')
