import dotenv from "dotenv";
// config methodni execute qilyabmz integration
dotenv.config();
import mongoose from "mongoose";
import server from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connection succed");
    const PORT = process.env.PORT ?? 3003;
    server.listen(PORT, function () {
      console.info(
        `The server is successfully running on port: ${PORT} http://localhost:${PORT}`
      );
      console.info(`Admin project on http://localhost:${PORT}/admin \n`);
    });
  })
  .catch((err) => {
    console.log("Error on connection MongoDB", err);
  });

