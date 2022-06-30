/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useRef, useState } from 'react';

import DropBox from '@/components/DropBox';
import Filter from '@/components/Filter';
import useMouse from '@/hooks/useMouse';

import * as S from './style';

export interface Item {
  title: string;
  keyword: string;
}

interface DropDownProps {
  dropDownWidth: string;
  dropDownHeight: string;
  dropBoxWidth?: string | undefined;
  dropDownTitle: string;
  itemsTitle: string;
  items: Item[];
  isStartFromRight?: boolean;
  handleClickDropDown: (keyword: string) => void;
}

export default function DropDown({
  dropDownWidth,
  dropDownHeight,
  dropDownTitle,
  dropBoxWidth = '100%',
  isStartFromRight,
  itemsTitle,
  items,
  handleClickDropDown,
}: DropDownProps) {
  const {
    isMouseOvered,
    isActive,
    isClicked,
    handleMouseOver,
    handleMouseOut,
    handleMouseDown,
    handleMouseUp,
    handleClick,
  } = useMouse(false);

  const [isClickAway, setIsClickAway] = useState(false);
  const drop = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickAway = (event: MouseEvent) => {
      setIsClickAway(!drop.current?.contains(event.target as Node));
    };

    document.addEventListener('click', handleClickAway);
  }, []);

  useEffect(() => {
    if (isClickAway && isClicked) {
      handleClick();
    }
  }, [isClickAway, isClicked]);

  return (
    <S.Container width={dropDownWidth} height={dropDownHeight} ref={drop}>
      <Filter
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
        handleMouseDown={handleMouseDown}
        handleMouseUp={handleMouseUp}
        dropDownTitle={dropDownTitle}
        isMouseOvered={isMouseOvered}
        isActive={isActive}
        handleClick={handleClick}
      />
      <S.Content
        isClicked={isClicked}
        className={dropDownTitle}
        width={dropBoxWidth}
        isStartFromRight={isStartFromRight}
      >
        <DropBox
          itemsTitle={itemsTitle}
          items={items}
          handleClickDropDown={handleClickDropDown}
        />
      </S.Content>
    </S.Container>
  );
}
