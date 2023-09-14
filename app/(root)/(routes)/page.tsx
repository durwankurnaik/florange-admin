"use client";

import { useState, useEffect } from "react";

import { useStoreModal } from "@/hooks/use-store-modal";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  // This code was added because of the hydration error.
  // Remember, if ever hydration error occurs in any project of next js, just use this technique\
  // First finding out whether the component is mounted or not using states
  // Then when its mounted, change the state to true so that the return won't be null anymore
  
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //   return null;
  // }

  return null;
};

export default SetupPage;
