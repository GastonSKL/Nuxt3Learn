export const useCart = () => useState(() => []);

export const useAuth = () =>
  useState(() => ({
    isAuthenticated: false,
  }));

export const useIdProducto = () => useState(()=>null);

export const useUser = () => useState(()=>null);

