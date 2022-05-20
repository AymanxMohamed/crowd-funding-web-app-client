import React, { useState } from 'react';

type Props = {
  options: any[],
  onSelectionChange: Function,
}

const Multitags: React.FC<Props> = ({ options, onSelectionChange }): JSX.Element => {
  const [selected, setSelected] = useState([] as any);
  const [suggestions, setSuggestions] = useState([] as any);
  const [userInput, setUserInput] = useState("");

  const updateSuggestions = (query: any) => {
    let optionsWithAdd = [...options];
    if (!options.find((item: any) => item.name === query)) {
      optionsWithAdd.unshift({ id: null, name: query });
    }
    setSuggestions(
      query
        ? optionsWithAdd.filter(
          (option: any) =>
            option.name.includes(query) &&
            !selected.find((item: any) => item.name === option.name)
        ).slice(0, 4)
        : []
    );
    setUserInput(query);
  }

  const selectTag = (suggestion: any = { id: null, name: userInput }) => {
    if (canAddTag(suggestion)) {
      let newSelected = [...selected, suggestion];
      setSelected(newSelected);
      updateSuggestions("");
      onSelectionChange(newSelected)
    }
  }

  const removeTag = (tag: any) => {
    let newSelected = selected.filter((item: any) => item.name !== tag.name)
    setSelected(newSelected);
    onSelectionChange(newSelected)
  }

  const canAddTag = (tag: any) => {
    return tag.name && !selected.find((item: any) => item.name === tag.name);
  }


  return (
    <div className="border-solid">
      <div className="flex flex-wrap">
        {selected.map((item: any, index: number) => (
          <span
            key={`sel-key-${index}`}
            onClick={() => removeTag(item)}
            className="px-2 py-1 m-1 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
            {item.name}
            <span className="bg-transparent hover focus:outline-none">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times"
                className="w-3 ml-1" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512">
                <path fill="currentColor" color="#bb1111"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
                </path>
              </svg>
            </span>
          </span>
        ))}

      </div>

      <div className="relative">
        <input
          className="mt-1 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add tags"
          type="text"
          value={userInput}
          onChange={(e) => updateSuggestions(e.target.value)}
          onKeyUp={(e) => { e.nativeEvent.preventDefault(); e.code === "Enter" && selectTag(); }}
        />
        {
          suggestions.length > 0 &&
          <div className="text-left absolute rounded-md border border-gray-300 bg-gray-50 w-full">
            {
              suggestions.map((suggested: any, index: number) =>
                <div className="px-1 py-2 rounded-md cursor-pointer select-none hover:bg-gray-200" key={`sug-key-${index}`}
                  onClick={() => selectTag(suggested)}>
                  {suggested.name}
                </div>)
            }
          </div>
        }
      </div>
    </div>
  );
};

export default Multitags;