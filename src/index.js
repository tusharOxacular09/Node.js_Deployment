import express from "express";
import "dotenv/config.js"

const app = express();

app.get("/health-check", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Hello! 😊 Our Node.js server is running smoothly.",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Node.js Server is runnoing on PORT: ${process.env.PORT}`);
});
