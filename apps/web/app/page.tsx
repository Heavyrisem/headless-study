'use client';

import { useState } from 'react';
import { Button, Header, Switch } from 'ui';

export default function Page() {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      {/* <Header text="Web" />
      <Button /> */}
      <Switch onChange={setEnabled}>{String(enabled)}</Switch>
    </>
  );
}
