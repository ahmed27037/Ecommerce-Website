# Ecommerce-Website

(    Coming soon: the ability to post and update your item on the website itself instead of post man   )

### steps to copy this on your own machine

make a .env file in the backend with the vairables MONGODB_URI = and PORT = 

set the PORT to 4000 and the MONGODB_URI to whatever your database is and then just follow the schema for the mongodb databse as shown in the models folder in mongooseModels.js in the backend 

Make sure your database or collection is in this format:
[
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: { 
    type: String,
  required: true,
  },
  image: {
    type: String,
    required: true,
  }

]


database make sure you get the Connected to the database and Listening for requests on port 4000 in your console 
also when you make the collection always make a post request first to see if it works if you can make a post request and you can see your item in the get request or the website then it works first  just start a 
and if you want to add items make a post request like this : 
![Screenshot (156)](https://github.com/ahmed27037/Ecommerce-Website/assets/145661706/f22d6a87-0274-46f3-9077-230c4959299a)


App should look like this
![Screenshot (154)](https://github.com/ahmed27037/Ecommerce-Website/assets/145661706/5052f56e-bdfc-4cef-82f1-7aa5bdf69d62)
I changed the description of macbook before sending it thats why its different


