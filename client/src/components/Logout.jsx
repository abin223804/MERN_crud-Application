import { useEffect } from "react";

import authStore from "../store/authStore";

export default function Logout() {
  const store = authStore();
  useEffect(() => {
    store.logout();
  }, []);
  return <h1>You are loggedOut successfully</h1>;
}
