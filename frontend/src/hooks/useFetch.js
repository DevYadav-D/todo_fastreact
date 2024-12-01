import { useState, useEffect } from "react";
import ApiService from "../services/apiServices";

function useFetch(endpoint) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ApiService.get(endpoint);
                setData(response);
            } catch (error) {
                setError("Error fetching data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return { data, error, loading };
}

export default useFetch;
