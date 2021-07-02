import { BiSearch, BiCaretDown, BiCheck } from "react-icons/bi";
import { useState } from "react";

const DropDown = ({
  toggle,
  sortBy,
  onSortByChange,
  orderBy,
  onOrderByChange,
}) => {
  if (!toggle) {
    return null;
  }
  return (
    <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div
          onClick={() => onSortByChange("PetName")}
          className="flex justify-between px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          Pet Name {sortBy === "PetName" && <BiCheck />}
        </div>
        <div
          onClick={() => onSortByChange("ownerName")}
          className="flex justify-between px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          Owner Name {sortBy === "ownerName" && <BiCheck />}
        </div>
        <div
          onClick={() => onSortByChange("aptDate")}
          className="flex justify-between px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          Date {sortBy === "aptDate" && <BiCheck />}
        </div>
        <div
          onClick={() => onOrderByChange("asc")}
          className="flex justify-between px-4 py-2 text-sm text-gray-700 border-t-2 cursor-pointer hover:bg-gray-100 hover:text-gray-900 border-gray-1"
          role="menuitem"
        >
          Asc {orderBy === "asc" && <BiCheck />}
        </div>
        <div
          onClick={() => onOrderByChange("desc")}
          className="flex justify-between px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          Desc{orderBy === "desc" && <BiCheck />}
        </div>
      </div>
    </div>
  );
};

const Search = ({
  query,
  onQueryChange,
  orderBy,
  onOrderByChange,
  sortBy,
  onSortByChange,
}) => {
  let [toggleSort, setToggleSort] = useState(false);
  return (
    <div className="py-5">
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <BiSearch />
          <label htmlFor="query" className="sr-only" />
        </div>
        <input
          type="text"
          name="query"
          id="query"
          value={query}
          className="block w-full pl-8 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Search"
          onChange={(event) => {
            onQueryChange(event.target.value);
          }}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div>
            <button
              type="button"
              className="flex items-center justify-center px-4 py-2 text-sm text-white bg-blue-400 border-2 border-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
              onClick={() => {
                setToggleSort(!toggleSort);
              }}
            >
              Sort By <BiCaretDown className="ml-2" />
            </button>
            <DropDown
              toggle={toggleSort}
              sortBy={sortBy}
              onSortByChange={(mySort) => onSortByChange(mySort)}
              orderBy={orderBy}
              onOrderByChange={(myOrder) => onOrderByChange(myOrder)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
