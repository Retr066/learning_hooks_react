import { useEffect, useRef, useState } from "react";
import { getData } from "../utils/getData";

export default function useFetch(API) {
  const initialState = {
    data: [],
    loading: true,
    error: null,
  };
  const [value, setValue] = useState(initialState);
  const isMounted = useRef(true);
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setValue(initialState);
    getData(API)
      .then((data) => {
        if (isMounted.current) {
          setValue({
            data,
            loading: false,
            error: null,
          });
        }
      })
      .catch(() =>
        setValue({
          ...initialState,
          error: "Algo ha pasado sulca medica",
        })
      );
  }, [API]);

  return value;
}
