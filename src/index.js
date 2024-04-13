import express from "express";
import "dotenv/config.js"

const app = express();

// http://54.91.164.203:7002/health-check
app.get("/", (req, res) => {
  return res.status(200).json({
      success: true,
      message: "Welcome to Tushar's ultimate DEVOPS Journey, Hope Maa Kali will be happy with her children's progress 😊."
  });
});

app.get("/health-check", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Hello! 😊 Our Node.js server is running smoothly.",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Node.js Server is runnoing on PORT: ${process.env.PORT}`);
});
