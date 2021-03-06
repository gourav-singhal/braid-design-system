import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconLink } from './IconLink';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconLink />,
    },
  ],
};

export default docs;
