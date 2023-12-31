import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { NewsList } from "../src/Components/NewsList";

import testData from "./testData.json";

describe("NewsList tests", () => {
  it("1 - should render all headline of the news in one page", () => {
    // Arrange
    render(
      <MemoryRouter>
        <NewsList news={testData.response.results} />
      </MemoryRouter>
    );
    // Act
    // Assert
    const newsRows = screen.getAllByRole(`heading`);
    // 10 news headings + 3 greeting headings
    expect(newsRows.length).toBe(13);
  });

  it("2 - should show the headline of the news", () => {
    // Arrange
    render(
      <MemoryRouter>
        <NewsList news={testData.response.results} />
      </MemoryRouter>
    );
    const newsTitle = screen.getByText(testData.response.results[0].webTitle);
    // Act
    // Assert
    expect(newsTitle).toBeInTheDocument();
  });

  it("3 - should show the picture of the news", () => {
    // Arrange
    render(
      <MemoryRouter>
        <NewsList news={testData.response.results} />
      </MemoryRouter>
    );
    const newsPic = screen.getByAltText(
      testData.response.results[0].fields.headline
    );
    // Act
    // Assert
    expect(newsPic.src).toContain(
      testData.response.results[0].fields.thumbnail
    );
  });

  it("4 - should link the right url with each news", () => {
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
