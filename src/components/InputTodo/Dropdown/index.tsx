import React, { Fragment, useState } from 'react';
import * as S from './style';

type DropdownProps = {
  isDropdownOpen: boolean;
  inputText: string;
};

const AUTOCOMPLETE_TODOS = [
  'Maecenas in lorem sit amet felis volutpat dapibus vulputate at dui.',
  'Nam porta lorem ut turpis pellentesque, et efficitur felis ullamcorper.',
  'Duis fringilla turpis vel lorem eleifend, sit amet hendrerit velit gravida. sit amet hendrerit velit gravida.',
  'Cras in felis eget augue cursus placerat ac eget lorem.',
  'Sed id orci quis mi porttitor pulvinar cursus eget lorem.',
  'Fusce tincidunt lorem ac purus elementum, ut fermentum lacus mollis.',
  'Nam commodo lorem ac posuere dignissim.',
  'Etiam eu elit finibus enim consequat scelerisque aliquam vulputate lorem.',
  'Donec in lorem id eros ornare aliquam ut a nisi.',
  'Donec efficitur nulla eget lorem sollicitudin, in blandit massa dictum.',
];

const onClickAutocomplete = (event: React.MouseEvent<HTMLLIElement>) => {
  return event.currentTarget.innerText;
};

const Dropdown = ({ isDropdownOpen, inputText }: DropdownProps) => {
  const [isLoadingAutocomplete] = useState(false);
  const regex = new RegExp(inputText.replace(/\\/g, '\\\\'), 'gi');

  return (
    <S.Dropdown $isOpen={!!inputText && isDropdownOpen}>
      <S.AutocompleteList>
        {AUTOCOMPLETE_TODOS.map((todo, index) => (
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
