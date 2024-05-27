// LocationDataFetchService.ts
import { getLocationData } from "../models/LocationData";
import { Location } from "../types/LocationDataTypes";

async function getAllLocationData(): Promise<Location[]> {
  try {
    const countries = await getLocationData();
    return countries;
  } catch (err) {
    console.error("Error fetching countries:", err);
    throw err;
  }
}

export { getAllLocationData };
