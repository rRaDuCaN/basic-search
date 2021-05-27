import React from "react";
import { Search } from "./pages";
import { SearchProvider } from "./providers";

function App() {
  return (
    <div>
      <SearchProvider>
        <Search />
      </SearchProvider>
    </div>
  );
}

export default App;
