require("dotenv").config();
const app = require("./app");

const PORT = process.env.DB_PORT || 4407;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
