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
});
