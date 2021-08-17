import React, { useState, useEffect } from 'react';

function UseFetch(query, params) {
  let [data, setData] = useState();
  let [fetchMoreResult, setFetchMoreResult] = useState();
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState();
  let [status, setStatus] = useState();

  let refetch = async () => {
    let result;
    if (params) {
      result = await query(params.variables);
    } else {
      result = await query();
    }
    // setResult(result);
    setLoading(false);
    setData(result.data);
    setError(result.data.error);
    setStatus(result.status);
  };

  useEffect(() => {
    refetch();
  }, []);

  let fetchMore = async params => {
    let result;
    if (params) {
      result = await query(params.variables);
    } else {
      result = await query();
    }
    // setResult(result);
    setLoading(false);
    setFetchMoreResult(result.data);
    setError(result.data.error);
    setStatus(result.status);
  };
  return { data, error, loading, status, fetchMore, fetchMoreResult, refetch };
}

export default UseFetch;
