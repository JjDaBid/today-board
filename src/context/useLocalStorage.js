import React from 'react'

function useLocalStorage (itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error1, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

      setItem(parsedItem);
      setLoading(false);

      } catch (error) {
        setError(error1)
      }
    }, 1000);
  })  

  const saveItem = (newItem) => {
    try {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newItem);
    } catch (error) {
      setError(error1)
    }
  };

  return {
    item, saveItem, loading,
  };

}

export { useLocalStorage };