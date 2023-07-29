import axios from "axios";
import { getNews } from "../src/utils/newsDataService";
import testData from "./testData.json";

// eslint-disable-next-line no-undef
vi.mock(`axios`);

describe(`getNews tests - GEt request tests to /response`, () => {
  it("1 - should should actually make the external data call", async () => {
    // Arrange
    axios.get.mockResolvedValueOnce({ data: testData });
    // Act
    await getNews();
    // Assert
    expect(axios.get).toHaveBeenCalledWith(`http://localhost:3000/response`);
  });

  it("2 - should have successful request returning the right data", async () => {
    // Arrange
    axios.get.mockResolvedValueOnce({ data: testData });
    // Act
    const result = await getNews();
    // Assert
    expect(result).toEqual(testData.results);
  });

  it("3 - should have unsuccessful request returning the error object", async () => {
    // Arrange
    const error = { message: `Error` };
    axios.get.mockRejectedValueOnce(error);
    // Act
    const result = await getNews();
    // Assert
    expect(result).toBe(error);
  });
});
