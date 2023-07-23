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
    expect(newsRows.length).toBe(10);
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
});
