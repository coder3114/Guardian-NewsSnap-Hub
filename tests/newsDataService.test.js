import axios from "axios";
import { getNews } from "../utils/newsDataService";
import testData from "./testData.json";

vi.mock(`axios`);

describe(`getNews tests - GEt request tests to /response`, () => {
  it("should should actually make the external data call", async () => {
    // Arrange
    axios.get.mockResolvedValueOnce({ data: testData });
    // Act
    await getNews();
    // Assert
    expect(axios.get).toHaveBeenCalledWith(`http://localhost:3000/response`);
  });

  it("should have successful request returning the right data", async () => {
    // Arrange
    axios.get.mockResolvedValueOnce({ data: testData });
    // Act
    const result = await getNews();
    // Assert
    expect(result).toEqual(testData.results);
  });

  it("should have unsuccessful request returning the error object", async () => {
    // Arrange
    const error = { message: `Error` };
    axios.get.mockRejectedValueOnce(error);
    // Act
    const result = await getNews();
    // Assert
    expect(result).toBe(error);
  });
});
