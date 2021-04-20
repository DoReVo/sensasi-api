import axios from "axios";
import parser from "fast-xml-parser";
export default class NewsController {
  public async latest() {
    // Get latest news
    const { data } = await axios.get(
      "http://english.astroawani.com/rss/latest/public"
    );

    // Parsed from XML to json
    const parsed = parser.parse(data);

    return parsed;
  }
  public async malaysia() {
      // Get latest news
      const { data } = await axios.get(
        "http://english.astroawani.com/rss/national/public"
      );
  
      // Parsed from XML to json
      const parsed = parser.parse(data);
  
      return parsed;
  }

  public async world() {
      // Get latest news
      const { data } = await axios.get(
        "http://english.astroawani.com/rss/international/public"
      );
  
      // Parsed from XML to json
      const parsed = parser.parse(data);
  
      return parsed;
  }
}
