# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
u1 = User.create( display_name: 'Joe Schmoe', email: 'js@mailboys.com', password: 'phillyphilly' )
u1.confirm
u2 = User.create( display_name: 'Jane Doe', email: 'jd@mailgirlz.gov', password: 'phillyphilly', admin: true )
u2.confirm
u3 = User.create( display_name: 'Ron Burgundy', email: 'ronman@mailgirlz.gov', password: 'phillyphilly', admin: true )
u3.confirm
u4 = User.create( display_name: 'Veronica Corningstone', email: 'bestanchor@mailgirlz.gov', password: 'phillyphilly', admin: true )
u4.confirm
u5 = User.create( display_name: 'Kelly Smith', email: 'ksmith1234@mailservice233232.com', password: 'phillyphilly' )
u5.confirm
u6 = User.create( display_name: 'Bob Jones', email: 'randomemail23410@anotheremailservice23x.com', password: 'phillyphilly' )
u6.confirm
u7 = User.create( display_name: 'Liz Johnson', email: 'randomemail23d410@anotheremailservice23x.com', password: 'phillyphilly' )
u7.confirm
