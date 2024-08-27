import { useContext } from "react";
import { X, Search } from "react-feather";
import { AppContext } from "./AppContext";

const SearchContainer = () => {
  const { setShowSearch } = useContext(AppContext);
  return (
    <div>
      <form className="bg-black-shade h-[50%] absolute top-0 right-0 w-full flex items-center footer-md:px-[20%] p-[5%] gap-[5%] transition-all duration-1000">
        <div className="w-full flex items-center gap-[5%]">
          <input
            type="search"
            name="search"
            placeholder="Search for Keywords..."
            id="search"
            className="form-input w-full bg-transparent border-royalblue border-2 text-white focus:outline-none focus:border-1 focus:outline-0 focus:border-white"
          />

          <button>
            <Search className="text-white" role="button" type="submit" />
          </button>
        </div>

        <X
          className="text-white size-8"
          role="button"
          onClick={() => setShowSearch(false)}
        />
      </form>
    </div>
  );
};

export default SearchContainer;
