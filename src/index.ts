import "dotenv/config";
import { buildExpress } from "./app";

const port = process.env.PORT;

const start = () => {
  const app = buildExpress();
  app.listen(port, () => {
    console.log(
      `Server is running on port ${port}, on ENV: ${process.env.ENVIRONMENT}`
    );
  });
  return app;
};

start();
