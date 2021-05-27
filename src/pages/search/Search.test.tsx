import { Search } from "./Search";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useSearch } from "../../providers";
import { useEffect } from "react";

interface Props {
  filter: string;
}

function SearchWrapper({ filter }: Props) {
  const { setFilter } = useSearch();
  useEffect(() => {
    setFilter(filter);
  }, [filter, setFilter]);

  return <Search />;
}

// Aayla Secura
// Evaan Verlaine
// Klaatu
// Orn Free Taa
// Rune Haako
// Shaak Ti
// Tee Watt Kaa
// Tiaan Jerjerrod

describe("<Search />", () => {
  it("Renders without errors.", () => {
    const { getByLabelText } = render(<SearchWrapper filter="aa" />);

    expect(getByLabelText("Search:")).toBeInTheDocument();
  });

  it("No dialog box is shown.", () => {
    const { getByLabelText, queryByRole } = render(<SearchWrapper filter="" />);

    expect(getByLabelText("Search:")).toBeInTheDocument();
    expect(queryByRole("list")).not.toBeInTheDocument();
  });
});
