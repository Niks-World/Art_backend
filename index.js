// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const userModel = require("./models/User.model");
// require("dotenv").config();

// const app = express();

// app.use(express.json());
// app.use(cors());
// const PORT = process.env.PORT || 8000;

// const mongoURI = process.env.mongoDBUrl;

// mongoose
//   .connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB: " + err);
//   });

// app.get("/", (req, res) => {
//   res.send("Welcome to home");
// });

// // for gallery
// app.get("/gallery", async (req, res) => {
//   try {
//     const displayPaint = await userModel.find();
//     res.send(displayPaint);
//   } catch (error) {
//     console.error("Error while loading Get Method", error);
//     res.status(500).json({ message: "Error while loading gallery" });
//   }
// });

// app.get("/gallery/:id", async (req, res) => {
//   try {
//     const productId = req.params.id;
//     const product = await userModel.findOne({ _id: productId });

//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     res.json(product);
//   } catch (error) {
//     console.error("Error while loading product", error);
//     res.status(500).json({ message: "Error while loading product" });
//   }
// });

// app.post("/post", async (req, res) => {
//   try {
//     const payload = req.body;
//     console.log(payload);
//     const newNotes = new userModel(payload);
//     await newNotes.save();
//     res.send({ Msg: "Created New Notes", newNotes });
//   } catch (error) {
//     console.error("Error while posting", error);
//     res.status(500).json({ message: "Error while posting" });
//   }
// });

// app.delete("/gallery/:notesId", async (req, res) => {
//   const notesId = req.params.notesId;
//   try {
//     const deletedNote = await userModel.findByIdAndRemove(notesId);
//     if (!deletedNote) {
//       return res.status(404).json({ message: "Note not found" });
//     }
//     res.json({ message: "Note deleted successfully" });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });



const express = require('express')
const mongoose = require('mongoose')
const {userModel}= require("./models/User.model")
 require("dotenv").config()
 const cors = require("cors");
const app = express()
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongoDBUrl);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

//Routes go here

app.get("/", (req, res) => {
      res.send("Welcome to home");
    });
    
    // for gallery
    app.get("/gallery", async (req, res) => {
      try {
        const displayPaint = await userModel.find();
        res.send(displayPaint);
      } catch (error) {
        console.error("Error while loading Get Method", error);
        res.status(500).json({ message: "Error while loading gallery" });
      }
    });
    
    app.get("/gallery/:id", async (req, res) => {
      try {
        const productId = req.params.id;
        const product = await userModel.findOne({ _id: productId });
    
        if (!product) {
          return res.status(404).json({ message: "Product not found" });
        }
    
        res.json(product);
      } catch (error) {
        console.error("Error while loading product", error);
        res.status(500).json({ message: "Error while loading product" });
      }
    });
    
    app.post("/post", async (req, res) => {
      try {
        const payload = req.body;
        console.log(payload);
        const newNotes = new userModel(payload);
        await newNotes.save();
        res.send({ Msg: "Created New Notes", newNotes });
      } catch (error) {
        console.error("Error while posting", error);
        res.status(500).json({ message: "Error while posting" });
      }
    });
    
    app.delete("/gallery/:notesId", async (req, res) => {
      const notesId = req.params.notesId;
      try {
        const deletedNote = await userModel.findByIdAndRemove(notesId);
        if (!deletedNote) {
          return res.status(404).json({ message: "Note not found" });
        }
        res.json({ message: "Note deleted successfully" });
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    });

//Connect to the database before listening
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})