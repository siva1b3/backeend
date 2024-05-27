// LocationData.ts
import { sql, poolPromise } from "../config/dbConfig";
import { Location } from "../types/LocationDataTypes";

async function getLocationData(): Promise<Location[]> {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM dbo.Location");
    return result.recordset as Location[];
  } catch (err) {
    console.error("Error fetching countries data:", err);
    throw err;
  }
}

export { getLocationData };
