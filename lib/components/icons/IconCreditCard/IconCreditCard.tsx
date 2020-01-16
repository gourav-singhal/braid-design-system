import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconCreditCardSvg } from './IconCreditCardSvg';

export type IconCreditCardProps = UseIconProps;

export const IconCreditCard = (props: IconCreditCardProps) => {
  const iconProps = useIcon(props);

  return <IconCreditCardSvg {...iconProps} />;
};
