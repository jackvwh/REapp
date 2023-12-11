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

// Function for POST requests. Returns a function that can be called with the endpoint and body
function usePost() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const executePost = async (endpoint, body) => {
    setLoading(true);
    try {
      const result = await ApiClient.post(endpoint, body);
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { executePost, data, loading, error };
}

// Function for PUT requests. Returns a function that can be called with the endpoint and body
function usePut() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const executePut = async (endpoint, body) => {
    setLoading(true);
    try {
      const result = await ApiClient.put(endpoint, body);
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { executePut, data, loading, error };
}

// Function for DELETE requests. Returns a function that can be called with the endpoint
function useDelete() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const executeDelete = async endpoint => {
    setLoading(true);
    try {
      const result = await ApiClient.delete(endpoint);
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { executeDelete, data, loading, error };
}
function useGetAuth(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const result = await ApiClient.getAuth(endpoint);
        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
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
  useGetAuth,
  usePost,
  usePut,
  useDelete,
};
