import { useEffect, useState } from "react";
import axios from "axios";
import { useDebounce } from "./useDebounce";

const API_URL = "http://localhost:4001/trips";

export function useTrips() {
  const [trips, setTrips] = useState([]);
  const [searchText, setSearchText] = useState("");

  const debouncedSearch = useDebounce(searchText, 500);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const keywords = debouncedSearch.trim() || " ";

        const result = await axios.get(API_URL, {
          params: { keywords },
        });

        setTrips(result.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrips();
  }, [debouncedSearch]);

  return {
    trips,
    searchText,
    setSearchText,
  };
}
