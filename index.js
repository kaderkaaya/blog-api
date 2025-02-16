const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/user");
const blogRoutes = require('./routes/blog');
const likeRoutes = require('./routes/like');
const viewRoutes = require('./routes/views'); 
const bookmarkRoutes = require('./routes/bookmark'); 
const port = 3000;
const app = express();
const connectDB = require('./config/env');

connectDB(); 
app.use(cors({
    origin: '*',
}));

app.use(express.json());

app.use('/user', userRoutes);
app.use('/blog',blogRoutes);
app.use('/like',likeRoutes);
app.use('/view',viewRoutes);
app.use('/bookmark',bookmarkRoutes);
const PORT = process.env.PORT || port;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
