import { useState } from 'react';

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void, () => T] {
  // Get from local storage then
  // parse stored json or if none return initialValue
  const [storedValue, setStoredValue] = useState<T>(() => {
    return getItemFromLocalStorage(key, initialValue);
  });

  // Function to get item from localStorage
  const getItemFromLocalStorage = (key: string, initialValue: T): T => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  };

  // Function to set value in localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      setStoredValue(valueToStore);
    } catch (error) {
      console.error(error);
    }
  };

  return [
    storedValue,
    setValue,
    () => getItemFromLocalStorage(key, initialValue),
  ];
}

export default useLocalStorage;
