import {
  createContext,
  useState,
  useMemo,
  useContext,
  Dispatch,
  SetStateAction,
  ReactChild,
} from "react";

interface SearchStateType {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

const initialState = {
  filter: "",
  setFilter: () => {},
};

const SearchContext = createContext<SearchStateType>(initialState);

interface Props {
  children: ReactChild | ReactChild[];
}

export function SearchProvider({ children }: Props) {
  const [filter, setFilter] = useState<string>("");

  const value = useMemo(
    () => ({
      filter,
      setFilter,
    }),
    [filter]
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
