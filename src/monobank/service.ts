import axios from "axios";

class MonobankService {
  async test() {
    const { data } = await axios.get("https://api.monobank.ua/personal/client-info", {
      headers: { "X-Token": "ufYVzv7ScuIyS_SGA3XEJnNVLo_8ie7WUg54bv3_h23c" },
    });
    return data;
  }
}

export const monobankService = new MonobankService();
