/**@jsxRuntime classic */
/**@jsx jsx */
import ResultsDialogWrapper from "./ResultsDialogWrapper";
import { jsx, css } from "@emotion/react";

const styledUl = css`
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  font-size: 1.2em;
  li {
    padding: 8px 0px;
  }
`;

interface Props {
  data: string[];
}

export default function ResultsDialog({ data }: Props) {
  return (
    <ResultsDialogWrapper>
      {/* @ts-ignore */}
      <ul css={styledUl}>
        {data.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </ResultsDialogWrapper>
  );
}
