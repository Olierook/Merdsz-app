
import { useState, useEffect, createContext, useContext } from 'react'
import { createFirebaseApp } from '../firebase/clientApp'
import { getDatabase, ref, set, onValue } from "firebase/database";

export const DbContext = createContext()

export default function DbContextComp({ children }) {
  const app = createFirebaseApp();
  const db = getDatabase(app);


  return (
    <DbContext.Provider value={{db, ref, set, onValue}}>
      {children}
    </DbContext.Provider>
  )
}

// Custom hook that shorthands the context!
export const useDb = () => useContext(DbContext)
