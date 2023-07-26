import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { NewsList } from "../src/Components/NewsList";

import testData from "./testData.json";

describe("NewsSummary tests", () => {
  it("1 - should link the right url with each news", () => {
    render(
      <MemoryRouter>
        <NewsList news={testData.response.results} />
      </MemoryRouter>
    );
    const links = screen.getAllByRole(`link`);

    for (let i; i < links.length - 1; i++) {
      const expectedTo = `/news-summary/${testData.response.results[i].id
        .split("/")
        .pop()}`;
      expect(links[i]).toHaveAttribute("href", expectedTo);
    }
  });
});
