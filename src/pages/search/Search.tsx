import { useState, useEffect, useCallback } from "react";
import CustomizedInput from "./components/CustomizedInput";
import SearchWrapper from "./components/SearchWrapper";
import ResultsDialog from "./components/ResultsDialog";
import { useSearch } from "../../providers";
import { getFilteredData } from "../../api";

export function Search() {
  const [open, toggleOpen] = useState<boolean>(false);
  const [data, setData] = useState<string[]>([]);
  const [error, setError] = useState<string>("");
  const { filter } = useSearch();

  const handleToggle = useCallback(() => {
    toggleOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (filter !== "") {
      getFilteredData(filter)
        .then((res) => {
          // const t = setTimeout(() => setData(res), 200);
          setData(res);
          setError("");
          toggleOpen(true);
        })
        .catch((_) => setError("Unable to find a value"));
      // return () => clearTimeout(t);
    }
  }, [filter]);

  return (
    <SearchWrapper>
      <CustomizedInput toggleDialog={handleToggle} />
      {open && <ResultsDialog data={error ? [error] : filter ? data : []} />}
    </SearchWrapper>
  );
}
