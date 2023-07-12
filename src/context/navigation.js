import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext({})

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    function handelClick() {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', handelClick)

    return () => {
      window.removeEventListener('popstate', handelClick)
    }
  })

  const navigate = (to) => {
    window.history.pushState({}, '', to)
    setCurrentPath(to)
  }

  const value = {
    navigate,
    currentPath
  }

  return <NavigationContext.Provider value={value}>
    {children}
  </NavigationContext.Provider>
}

export { NavigationProvider }
export default NavigationContext