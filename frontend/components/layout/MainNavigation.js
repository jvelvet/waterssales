import { useState } from 'react';

import Link from "next/link";

function MainNavigation() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const navClickHandler = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  return (
    <h1>Header</h1>
  );
}


export default MainNavigation;