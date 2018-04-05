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

u3 = User.create( display_name: 'Ron Burgundy', email: 'ronman@mailgirlz.gov', password: 'phillyphilly')

u4 = User.create( display_name: 'Veronica Corningstone', email: 'bestanchor@mailgirlz.gov', password: 'phillyphilly')

u5 = User.create( display_name: 'Kelly Smith', email: 'ksmith1234@mailservice233232.com', password: 'phillyphilly' )

u6 = User.create( display_name: 'Bob Jones', email: 'randomemail23410@anotheremailservice23x.com', password: 'phillyphilly' )

u7 = User.create( display_name: 'Liz Johnson', email: 'randomemail23d410@anotheremailservice23x.com', password: 'phillyphilly' )

c1= Category.create( name: 'Art')
c2= Category.create( name: 'Food')
c3= Category.create( name: 'History')
c4= Category.create( name: 'Misc')

p1 = Photo.create( image: 'https://travel.usnews.com/static-travel/images/destinations/45/liberty_bell_-2015.jpg', description: 'This is very historical and stuff', user_id: u1.id, coordinates: [-75.15223503112793, 39.9495231126148])
p2 = Photo.create( image: 'https://www.muralarts.org/wp-content/uploads/2016/01/shep.jpg', description: 'Very cool art!', user_id: u1.id, coordinates: [-75.17746925354004, 39.95100356737394])
p3 = Photo.create( image: 'https://www.muralarts.org/wp-content/uploads/2016/03/2014-045-Aspire-No-Limits-4.jpg', description: 'love this mural', user_id: u2.id, coordinates: [-75.17000198364258, 39.94577248382194])
p4 = Photo.create( image: 'http://midtownlunch.com/philadelphia/files/2016/04/IMG_7322.jpg', description: 'I love Cleavers cheesesteaks, best in philly!', user_id: u2.id, coordinates: [-75.15953063964844, 39.9473846213956])
p5 = Photo.create( image: 'https://www.seriouseats.com/images/2014/11/20141111-philadelphia-dalessandros-steaks-hoagies-vicky-wasik-22.jpg', description: 'Genos is definitely this place for cheesesteaks', user_id: u3.id, coordinates: [-75.16472339630127, 39.95685927437669])
p6 = Photo.create( image: 'https://a.spirited.media/wp-content/uploads/sites/2/2016/06/fednuts-credit-danyahenninger-donuts.jpg', description: 'Federal Donuts is the BEST.  Super famous and a philly classic', user_id: u4.id, coordinates: [-75.1571273803711, 39.93343343839839])
p7 = Photo.create( image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/7/1/1/FN_Philadelphia-Cheesesteak-Restaurants-Jims-Steaks-exterior_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1435780800248.jpeg', description: 'Home of the cheesesteak for the South Street Challenge!  Wrap one of these in a jumbo slice of pizza and youve got a philly taco!', user_id: u4.id, coordinates: [-75.16236305236816, 39.93639501221593])
p8 = Photo.create( image: 'http://www.hotelpalomar-philadelphia.com/images/1700-960/rittenhouse-square-c6133fbc.jpg', description: 'Rittenhouse Square is a perfect summer spot', user_id: u4.id, coordinates: [-75.1819324493408, 39.9309982705885])
p9 = Photo.create( image: 'http://edtrayes.com/files/2012/02/DSC_8540-Montage-of-signs-Reading-Terminal-Market-Signage-Philadelphia-Pennsylvania-USA.jpg', description: 'Reading Terminal Market (pronounced redding) is a must see.  All the best philly food in one spot!', user_id: u5.id, coordinates: [-75.16974449157715, 39.939093223452986])
p10 = Photo.create( image: 'https://www.metro.us/sites/default/files/main/articles/urban-axes.jpg', description: 'You should definitely try out urban axes!  fun for the whole family!', user_id: u6.id, coordinates: [-75.16931533813477, 39.93369669459385])
p11 = Photo.create( image: 'http://activerain.com/image_store/uploads/agents/beaniehunter/files/philadelphiamuseumofart.jpg', description: 'PMA home of the famous Rocky Steps!', user_id: u7.id, coordinates: [-75.15060424804688, 39.941199070498385])
p12 = Photo.create( image: 'https://www.uwishunu.com/wp-content/uploads/2017/02/Rodin-Museum-Exterior-1280uw.jpg', description: 'Rodin Museum, just down the road from the PMA and hint: its pay what you want!', user_id: u7.id, coordinates: [-75.17824172973633, 39.94093584316186])
