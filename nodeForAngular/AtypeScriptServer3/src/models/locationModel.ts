// locationModel.ts
import { poolPromise } from "../config/databaseConfig";
import { Location } from "../types/locationTypes";
async function fetchAllLocations(): Promise<Location[]> {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM dbo.Location");
    return result.recordset as Location[];
  } catch (err) {
    console.error("Error fetching locations data:", err);
    throw err;
  }
}
export { fetchAllLocations };
