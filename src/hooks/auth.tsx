import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { database } from "../database";
import { User as ModelUser } from '../database/model/User';
import { Alert } from "react-native";

interface User {
  id: string;
  user_id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
  token: string;
}
interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  loading: boolean;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signedOut: () => Promise<void>;
  updateUser: (user: User) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps){
  const [data, setData] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);

  async function signIn({ email, password }: SignInCredentials){
    try {
      const response = await api.post('/sessions', {
        email,
        password
      });
  
      const { token, user } = response.data;
  
      api.defaults.headers.authorization = `Bearer ${token}`;

      const userCollection = database.get<ModelUser>('users');
      await database.write(async () => {
        await userCollection.create(( newUser ) => {
          newUser.user_id = user.id,
          newUser.name = user.name,
          newUser.email = user.email,
          newUser.driver_license = user.driver_license,
          newUser.avatar = user.avatar,
          newUser.token = token
        });
      });
      
      setData({ ...user, token });
    } catch (error) {
      throw new Error(JSON.stringify(error));
    } 
  }

  async function signedOut(){
    try {
      const userCollection = database.get<ModelUser>('users');
      await database.write(async () => {
        const userSelected = await userCollection.find(data.id);
        await userSelected.destroyPermanently();
      });
      
      setData({} as User);

    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  }

  async function updateUser(user: User){
    try {
      const userCollection = database.get<ModelUser>('users');
      await database.write(async () => {
        const userSelected = await userCollection.find(user.id);
        await userSelected.update(( userData ) => {
          userData.name = user.name,
          userData.driver_license = user.driver_license,
          userData.avatar = user.avatar
        });
      });

      setData(user);

    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  }

  async function loadUserData(){
    const userCollection = database.get<ModelUser>('users');
    const response = await userCollection.query().fetch();
    
    if(response.length>0){
      const userData = response[0]._raw as unknown as User;
      api.defaults.headers.authorization = `Bearer ${userData.token}`;
      setData(userData);
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUserData();
  },[]);

  return (
    <AuthContext.Provider
      value={{
        user: data,
        signIn,
        loading,
        signedOut,
        updateUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };