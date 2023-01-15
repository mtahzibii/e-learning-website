import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { API_URL, NEXT_URL } from '../config';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 const [user, setUser] = useState(null);
 const [isLoading, setIsLoading] = useState(false);
 const [order, setOrder] = useState(null);
 const [error, setError] = useState(null);

 const router = useRouter();

 //  Check user logged in as page loads / user dependent
 useEffect(() => {
  () => checkUserLoggedIn;
 }, [user]);

 //  Register user
 const register = async (user) => {
  setIsLoading(true);
  const res = await fetch(`${NEXT_URL}/api/register`, {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify(user),
  });

  const data = await res.json();
  if (res.ok) {
   setUser(data.user);
   router.push('/courses');
   setIsLoading(false);
  } else {
   setError(data.message);
   //  setError(null);
  }
 };

 //  Login user
 const login = async (user) => {
  setIsLoading(true);
  const res = await fetch(`${NEXT_URL}/api/login`, {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify(user),
  });
  const data = await res.json();

  if (res.ok) {
   setUser(data.user);
   toast.success('Logged in successfuly');
   router.push('/courses');
   setIsLoading(false);
  } else {
   setError(data.message);
  }
 };

 //  Logout user
 const logout = async (user) => {
  const res = await fetch(`${NEXT_URL}/api/logout`, {
   method: 'POST',
  });
  if (res.ok) {
   setUser(null);
   router.push('/accounts/login');
   toast.success('Logged out successfuly');
  }
 };

 //  Check user is logged in
 const checkUserLoggedIn = async () => {
  const res = await fetch(`${API_URL}/api/user`);
  const data = await res.json();

  if (res.ok) {
   setUser(data.user);
  } else {
   setUser(null);
  }
 };

 //  Place order
 const placeOrder = async (order) => {
  const res = await fetch(`${NEXT_URL}/api/placeOrder`, {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify(order),
  });

  const { data } = await res.json();

  if (res.ok) {
   setOrder(data);
   router.push('/accounts/dashboard');
  } else {
   setError('data.message');
  }
 };

 return (
  <AuthContext.Provider
   value={{
    login,
    logout,
    register,
    checkUserLoggedIn,
    placeOrder,
    isLoading,
    user,
    error,
   }}
  >
   {children}
  </AuthContext.Provider>
 );
};

export default AuthContext;
