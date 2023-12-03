import { useState, useEffect } from 'react';
import { ApiClient } from '../Api/ApiClient.js';

// Function for GET requests
function useGet(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Prevent state update if component is unmounted
    let isMounted = true;
    const fetchData = async () => {
      try {
        const result = await ApiClient.get(endpoint);
        console;
        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [endpoint]);

  return { data, loading, error };
}

// Function for POST requests
function usePost(endpoint, body) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const result = await ApiClient.post(endpoint, body);

        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [endpoint, body]);

  return { data, loading, error };
}

// Function for PUT requests
function usePut(endpoint, body) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const result = await ApiClient.put(endpoint, body);

        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [endpoint, body]);

  return { data, loading, error };
}

// Function for DELETE requests
function useDelete(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const result = await ApiClient.delete(endpoint);

        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [endpoint]);

  return { data, loading, error };
}

export const useApiClient = {
  useGet,
  usePost,
  usePut,
  useDelete,
};
