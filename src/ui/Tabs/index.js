import React, { forwardRef } from 'react';

import { StyledTabs } from './style';

export const Tabs = forwardRef((props, ref) => (
  <StyledTabs ref={ref} {...props}>
    {props.children}
  </StyledTabs>
));
