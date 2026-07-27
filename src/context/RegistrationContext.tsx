'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, Suspense, useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import RegistrationClosedModal from '@/components/common/RegistrationClosedModal';

interface RegistrationContextType {
  isClosedModalOpen: boolean;
  openClosedModal: () => void;
  closeClosedModal: () => void;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

function SearchParamHandler({ openClosedModal }: { openClosedModal: () => void }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (searchParams.get('closed') === 'true') {
      openClosedModal();
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.delete('closed');
      const queryStr = newParams.toString();
      const newUrl = queryStr ? `${pathname}?${queryStr}` : pathname;
      router.replace(newUrl, { scroll: false });
    }
  }, [searchParams, pathname, router, openClosedModal]);

  return null;
}

export function RegistrationProvider({ children }: { children: ReactNode }) {
  const [isClosedModalOpen, setIsClosedModalOpen] = useState(false);

  const openClosedModal = useCallback(() => {
    setIsClosedModalOpen(true);
  }, []);

  const closeClosedModal = useCallback(() => {
    setIsClosedModalOpen(false);
  }, []);

  return (
    <RegistrationContext.Provider value={{ isClosedModalOpen, openClosedModal, closeClosedModal }}>
      <Suspense fallback={null}>
        <SearchParamHandler openClosedModal={openClosedModal} />
      </Suspense>
      {children}
      <RegistrationClosedModal isOpen={isClosedModalOpen} onClose={closeClosedModal} />
    </RegistrationContext.Provider>
  );
}

export function useRegistrationModal() {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error('useRegistrationModal must be used within a RegistrationProvider');
  }
  return context;
}
