export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export interface NavigationProps {
  navigation?: any;
  route?: any;
}

export interface ScreenProps extends NavigationProps {
  [key: string]: any;
}
