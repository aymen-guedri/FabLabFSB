import React, { Component, Fragment, useState } from "react";
import "./index.css";

class TagsAutocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "",
      tags: ["Java"],
    };
  }

  onChange = (e) => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value,
    });
  };

  onClick = (e) => {
    const { tags } = this.state;

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "",
      tags: [...tags, e.currentTarget.innerText],
    });
  };

  // TODO: Remove duplicate tags, can't use a tag that's already been used.
  // TODO: Delete tag when u press on delete button keyboard 46
  // TODO: 3 tags as maximum
  onKeyDown = (e) => {
    const { activeSuggestion, filteredSuggestions, tags } = this.state;
    console.log(activeSuggestion);

    if (filteredSuggestions.length != 0) {
      if (e.keyCode === 13) {
        this.setState({
          activeSuggestion: 0,
          showSuggestions: false,
          userInput: "",
          // Add the value to the tags array
          tags: [...tags, filteredSuggestions[activeSuggestion]],
        });
      } else if (e.keyCode === 38) {
        if (activeSuggestion === 0) {
          return;
        }
        this.setState({ activeSuggestion: activeSuggestion - 1 });
      } else if (e.keyCode === 40) {
        // User pressed the down arrow, increment the index

        if (activeSuggestion + 1 === filteredSuggestions.length) {
          return;
        }
        this.setState({ activeSuggestion: activeSuggestion + 1 });
      }
    }
  };

  removeTag = (index) => {
    const { tags } = this.state;
    this.setState({ tags: tags.filter((el, i) => i !== index) });
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      removeTag,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput,
        tags,
      },
    } = this;

    const { placeholder, dark } = this.props;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className={`bg-white border-solid border-black border-1 list-none mt-0 max-h-[143px] overflow-y-auto pl-0`}>
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }
              return (
                <li className={`p-2 cursor-pointer hover:text-black hover:bg-[#ececec] ${className}`} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="p-1">
            <span className="text-black">No suggestions available.</span>
          </div>
        );
      }
    }

    return (
      <div className="w-2/3 flex flex-col">
        <div
          className={`flex flex-row border-2xl border-1 border-solid p-2 rounded align-center flex-wrap gap-2 ${dark ? "bg-black border-white" : "bg-white border-black"}`}
        >
          {tags.map((tag, index) => (
            <div className={`inline-block p-2 rounded ${dark ? "bg-[#1e2022]" : "bg-[#dad8d8]"}`} key={index}>
              <span className={`${dark ? "text-white" : ""}`}>{tag}</span>
              <span className={`h-[20] w-[20] text-white rounded-xl inline-flex justify-center align-middle text-[12px] px-2 py-1 cursor-pointer ml-2 bg-[#303030] ${dark ? "border-1 border-pink border-solid" : ""}`} onClick={() => removeTag(index)}>
                &times;
              </span>
            </div>
          ))}
          <input
            type="text"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
            placeholder={placeholder}
            className={`w-1/3 required grow border-none outline outline-0 tags-input ${dark ? "bg-black text-white" : "bg-white"}`}
          />
        </div>
        {suggestionsListComponent}
      </div>
    );
  }
}

export default TagsAutocomplete;
