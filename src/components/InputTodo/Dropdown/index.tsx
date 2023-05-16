import React, { Fragment, useEffect, useState } from 'react';
import { getAutocompleteList } from '@/api/autocomplete';
import * as S from './style';

type DropdownProps = {
  isDropdownOpen: boolean;
  inputText: string;
};

const Dropdown = ({ isDropdownOpen, inputText }: DropdownProps) => {
  const [isLoadingAutocomplete, setIsLoadingAutocomplete] = useState(false);
  const [autocompleteList, setAutocompleteList] = useState<string[]>([]);

  const regex = new RegExp(inputText.replace(/\\/g, '\\\\'), 'gi');

  const onClickAutocomplete = (event: React.MouseEvent<HTMLLIElement>) => {
    return event.currentTarget.innerText;
  };

  useEffect(() => {
    const searchAutocomplete = async () => {
      const trimmedInputText = inputText.trim();
      if (!trimmedInputText) return;

      setIsLoadingAutocomplete(true);
      const response = await getAutocompleteList(trimmedInputText);

      setAutocompleteList(response.data.result);
      setIsLoadingAutocomplete(false);
    };

    searchAutocomplete();
  }, [inputText]);

  return (
    <S.Dropdown
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
      {isLoadingAutocomplete ? <S.ScrollSpinner /> : <S.ViewMoreIcon />}
    </S.Dropdown>
  );
};

export default Dropdown;
