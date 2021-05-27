/**@jsxRuntime classic */
/**@jsx jsx */
import { ChangeEvent, useCallback } from "react";
import { jsx, css } from "@emotion/react";
import { useSearch } from "../../../providers";

const customizedInput = css`
  border: 1px solid #f2f2f2;
  border-radius: 6px;
  padding: 16px;
  background: #fff;

  &:focus,
  &:hover {
    border-color: #f3f3f3;
  }

  form {
    display: inline-flex;
    min-width: 400px;
    align-items: center;
    color: #9a9da0;

    label,
    input {
      font-family: "Roboto", sans-serif;
      font-size: 1.2em;
    }

    label {
      margin-right: 16px;
    }

    input:empty {
      width: 100%;
      outline: none;
      border: none;
      color: #9a9da0;
    }
  }
`;

interface Props {
  toggleDialog: () => void;
}

export default function CustomizedInput({ toggleDialog }: Props) {
  const { setFilter, filter } = useSearch();

  const handleUpdateFilter = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (filter !== event.currentTarget.value) {
        setFilter(event.currentTarget.value);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filter]
  );

  return (
    // @ts-ignore
    <div css={customizedInput} onClick={toggleDialog}>
      <form>
        <label htmlFor="search-input" id="search-label">
          Search:
        </label>
        <input
          type="search"
          id="search-input"
          aria-labelledby="search-label"
          placeholder="Search for something..."
          value={filter}
          onChange={handleUpdateFilter}
        />
      </form>
    </div>
  );
}
