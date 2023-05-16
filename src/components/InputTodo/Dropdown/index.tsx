import React, { Fragment, useEffect, useRef, useState } from 'react';
import { getAutocompleteList } from '@/api/autocomplete';
import { Spinner } from '@/styles/common';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import * as S from './style';

type DropdownProps = {
  isDropdownOpen: boolean;
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (input: string) => Promise<void>;
};

const DEFAULT_PAGE_INDEX = 1;
const LIMIT = 10;

const Dropdown = ({
  isDropdownOpen,
  inputText,
  setInputText,
  handleSubmit,
}: DropdownProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [autocompleteList, setAutocompleteList] = useState<string[]>([]);
  const [pageIndex, setPageIndex] = useState(DEFAULT_PAGE_INDEX);
  const [isLastPage, setIsLastPage] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const regex = new RegExp(inputText.replace(/\\/g, '\\\\'), 'ig');

  const onClickAutocomplete = (event: React.MouseEvent<HTMLLIElement>) => {
    const input = event.currentTarget.innerText;
    setInputText(input);
    handleSubmit(input);
  };

  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (isLoading || isLastPage) return;
    if (isIntersecting) setPageIndex((prev) => prev + 1);
  };

  const { setTarget } = useIntersectionObserver(onIntersect);

  useEffect(() => {
    const searchAutocomplete = async () => {
      const trimmedInputText = inputText.trim();
      if (!trimmedInputText) return;

      setIsLoading(true);
      const response = await getAutocompleteList(trimmedInputText, pageIndex);
      const { page, qty, total, result } = response.data;

      setAutocompleteList((prev) =>
        pageIndex === DEFAULT_PAGE_INDEX ? result : [...prev, ...result],
      );

      setIsLoading(false);

      if ((page - DEFAULT_PAGE_INDEX) * LIMIT + qty === total)
        setIsLastPage(true);
    };

    searchAutocomplete();
  }, [inputText, pageIndex]);

  useEffect(() => {
    setPageIndex(DEFAULT_PAGE_INDEX);
    setIsLastPage(false);
    dropdownRef.current?.scrollTo({ top: 0 });
  }, [inputText]);

  return (
    <S.Dropdown
      ref={dropdownRef}
      $isOpen={!!inputText && isDropdownOpen && !!autocompleteList.length}
    >
      <S.AutocompleteList>
        {autocompleteList.map((todo, index) => (
          <S.AutocompleteItem
            key={index + todo}
            onMouseDown={onClickAutocomplete}
          >
            {todo.split(regex).map((todoSlice, sliceIndex) => {
              const matchSlices = todo.match(regex);
              return (
                <Fragment key={sliceIndex + todoSlice}>
                  {todoSlice}
                  {matchSlices && sliceIndex < matchSlices.length ? (
                    <S.ColoredText>{matchSlices[sliceIndex]}</S.ColoredText>
                  ) : null}
                </Fragment>
              );
            })}
          </S.AutocompleteItem>
        ))}
      </S.AutocompleteList>
      {isLastPage ? null : isLoading ? (
        <S.IconWrapper>
          <Spinner />
        </S.IconWrapper>
      ) : (
        <S.IconWrapper ref={setTarget}>
          <S.ViewMoreIcon />
        </S.IconWrapper>
      )}
    </S.Dropdown>
  );
};

export default Dropdown;
