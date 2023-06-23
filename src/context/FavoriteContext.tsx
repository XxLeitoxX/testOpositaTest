import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface FavoriteContextType {
  favorites: number[];
  toggleFavorite: (postId: number) => void;
}

interface FavoriteProviderProps {
  children: ReactNode;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(
  undefined,
);

// eslint-disable-next-line react-refresh/only-export-components
export const useFavoriteContext = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error(
      "useFavoriteContext must be used within a FavoriteProvider",
    );
  }
  return context;
};

export const FavoriteProvider: React.FC<FavoriteProviderProps> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (postId: number) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.includes(postId)
        ? prevFavorites.filter((id) => id !== postId)
        : [...prevFavorites, postId];

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  useEffect(() => {
    // Recuperar los favoritos del localStorage al cargar la página
    const storedFavorites = localStorage.getItem("favorites");

    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const contextValue: FavoriteContextType = {
    favorites,
    toggleFavorite,
  };

  return (
    <FavoriteContext.Provider value={contextValue}>
      {children}
    </FavoriteContext.Provider>
  );
};
