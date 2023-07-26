import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { NewsList } from "../src/Components/NewsList";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import testData from "./testData.json";
import { NewsSummary } from "../src/Components/NewsSummary";

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

  it("2 - should show the summary text of the news article when a headline is clicked", async () => {
    const routes = [
      {
        path: "/news-summary/:newsTitle",
        element: <NewsSummary news={testData.response.results} />,
      },
      {
        path: "/",
        element: <NewsList news={testData.response.results} />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: [`/`],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    for (let i; i < testData.response.results.length - 1; i++) {
      const headlineLink = screen.getByText(
        testData.response.results[i].fields.headline
      );

      await userEvent.click(headlineLink);

      expect(
        screen.getByText(testData.response.results[i].fields.bodyText)
      ).toBeInTheDocument();
    }
  });

  it("3 - should not show the headline for the news not clicked", async () => {
    const routes = [
      {
        path: "/news-summary/:newsTitle",
        element: <NewsSummary news={testData.response.results} />,
      },
      {
        path: "/",
        element: <NewsList news={testData.response.results} />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: [`/`],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    const headlineLink = screen.queryByText(
      testData.response.results[0].fields.headline
    );

    await userEvent.click(headlineLink);

    expect(
      screen.queryByText(testData.response.results[2].fields.headline)
    ).not.toBeInTheDocument();
  });

  it("4 - should navigate to the original news page in Guardian website", async () => {
    const routes = [
      {
        path: "/news-summary/:newsTitle",
        element: <NewsSummary news={testData.response.results} />,
      },
      {
        path: "/",
        element: <NewsList news={testData.response.results} />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: [
        `/news-summary/${testData.response.results[0].id.split("/")[5]}`,
      ],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    const links = screen.getAllByRole(`link`);

    expect(links[0]).toHaveAttribute(
      "href",
      testData.response.results[0].webUrl
    );
  });
});
