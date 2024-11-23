import React, { ReactNode, createContext, useCallback, useState } from 'react';

import { authService } from '../services/auth-service';

const { getUserData } = authService;

interface User {
  id: string;
  name: string;
  role: string;
}

interface ProfileData {
  email: string;
  [key: string]: any;
}

interface ProfileContextProps {
  selectedUser: User | null;
  dynamicProfile: ProfileData | null;
  selectUser: (user: User) => void;
  loadDynamicProfile: () => Promise<void>;
}

const ProfileContext = createContext<ProfileContextProps | undefined>(
  undefined
);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [dynamicProfile, setDynamicProfile] = useState<ProfileData | null>(
    null
  );

  const selectUser = (user: User) => {
    setSelectedUser(user);
    setDynamicProfile(null); // Reset profile data when a new user is selected
  };

  const loadDynamicProfile = useCallback(async () => {
    if (!selectedUser) return;
    try {
      const { payload } = await getUserData(selectedUser.role, selectedUser.id);
      setDynamicProfile(payload);
    } catch (error) {
      console.error('Error loading dynamic profile:', error);
    }
  }, [selectedUser]);

  return (
    <ProfileContext.Provider
      value={{
        selectedUser,
        dynamicProfile,
        selectUser,
        loadDynamicProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = React.useContext(ProfileContext);
  if (!context) {
    throw new Error(
      'useProfile debe ser utilizado dentro de un ProfileProvider'
    );
  }
  return context;
};
