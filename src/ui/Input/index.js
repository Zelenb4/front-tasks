import React, { forwardRef } from 'react';

import { InputWrapper } from './style';

export const Input = forwardRef((props, ref) => <InputWrapper ref={ref} {...props} />);
