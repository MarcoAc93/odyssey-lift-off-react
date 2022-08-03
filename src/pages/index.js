import React, { Fragment } from 'react';
import { Router } from '@reach/router';

/** importing our pages */
import Tracks from './Tracks';
import Track from './Track';
import Module from './Module';

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <Tracks path="/" />
      <Track path="/track/:trackId" />
      <Module path="/track/:trackId/module/:moduleId" />
    </Router>
  );
}
