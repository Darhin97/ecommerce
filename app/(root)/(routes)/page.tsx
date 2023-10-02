"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

//page triggers modal
export default function SetupPage() {
  //for useEffect
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
}
