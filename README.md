# blog-api
Building a Blog API with Node.js and MongoDB
In this project, I developed a Blog API using Node.js and MongoDB. Initially, my goal was to implement basic user functionalities such as registration, login, update, logout, and fetching user details. As the project evolved, I added features like blog creation, liking/unliking posts, tracking view counts, and saving blog posts.

What I Learned
Working with Hashed Passwords

I used bcrypt to hash and securely store user passwords.
I realized that hashed passwords cannot be reversed. Instead, during login, the entered password must be hashed again and compared with the stored hash.
Authentication and Authorization

Implemented JWT (JSON Web Token) authentication for secure access.
Allowed admin users to access all registered users.
Enhancing the Blog API

Enabled users to like and unlike blog posts.
Implemented a view count system to track blog post popularity.
Added a feature for users to save blog posts.
Next Steps
I plan to implement a followers system and a category system to make the API more interactive and structured.

Project Code
You can check out the full project here: [(https://github.com/kaderkaaya/blog-api)]

Feel free to leave suggestions or ask any questions in the comments! 🚀
