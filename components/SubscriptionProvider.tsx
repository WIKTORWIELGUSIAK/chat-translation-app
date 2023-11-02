"use client";

import { subscriptionRef } from "@/lib/converters/Subscription";
import { useSubscriptionStore } from "@/store/store";
import { onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const setSubscription = useSubscriptionStore(
    (state) => state.setSubscription
  );

  useEffect(() => {
    const auth = getAuth();

    const authUnsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const snapshotUnsubscribe = onSnapshot(
          subscriptionRef(user.uid),
          (snapshot) => {
            if (snapshot.empty) {
              setSubscription(null);
              return;
            } else {
              setSubscription(snapshot.docs[0].data());
            }
          },
          (error) => {
            console.error("Error fetching snapshot:", error);
          }
        );

        return snapshotUnsubscribe;
      } else {
        setSubscription(null);
      }
    });

    return () => {
      authUnsubscribe();
    };
  }, [setSubscription]);

  return <>{children}</>;
}

export default SubscriptionProvider;
