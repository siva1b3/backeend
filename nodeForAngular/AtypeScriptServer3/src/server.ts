// server.ts
import app from "./app";
const PORT: number = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
