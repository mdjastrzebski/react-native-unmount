import * as React from 'react';

export const UnmountContext = React.createContext<boolean>(true);

export const useIsActive = () => {
  return React.useContext(UnmountContext);
};

export interface UnmountProviderProps {
  children: React.ReactNode;
  isActive: boolean;
}

export function UnmountProvider({ isActive, children }: UnmountProviderProps) {
  return (
    <UnmountContext.Provider value={isActive}>
      {children}
    </UnmountContext.Provider>
  );
}
