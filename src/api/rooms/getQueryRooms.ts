import { queryOptions } from "@tanstack/react-query";
import { QK_ROOMS } from "./queryKeys";
import { GetRoomsResponse } from "./types";

export const getQueryRooms = queryOptions({
  queryKey: QK_ROOMS.getRooms,
  queryFn: async () => {
    await setTimeout(() => [], 3000);
    return mockData;
  },
});

const mockData: GetRoomsResponse = {
  rooms: [
    {
      id: "0",
      name: "vardagsrum",
      furniture: [
        {
          id: "0",
          name: "Karmstol Jolina 2-pack",
          price: 2499,
          currency: "SEK",
          imageLink:
            "https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$ed$&n=ell_1054872-01_Fm_M0069673&mw=1500&fmt=webp",
          productLink:
            "https://www.ellos.se/ellos-home/karmstol-jolina-2-pack/1054872-01",
          roomId: "0",
        },
        {
          id: "1",
          name: "Ellos Home Multibandslängd Malva Wide extra bred, 1 st i 100% lin",
          price: 1499,
          currency: "SEK",
          imageLink:
            "https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$ed$&n=ell_1698346-08_Fm_M0081971&mw=1500&fmt=webp",
          productLink:
            "https://www.ellos.se/ellos-home/multibandslangd-malva-wide-extra-bred-1-st-i-100-lin/1698346-08",
          roomId: "0",
        },
      ],
      order: 0,
    },
    {
      id: "1",
      name: "sovrum",
      furniture: [
        {
          id: "2",
          name: "Karmstol Jolina 2-pack",
          price: 2499,
          currency: "SEK",
          imageLink:
            "https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$ed$&n=ell_1054872-01_Fm_M0069673&mw=1500&fmt=webp",
          productLink:
            "https://www.ellos.se/ellos-home/karmstol-jolina-2-pack/1054872-01",
          roomId: "1",
        },
        {
          id: "3",
          name: "Ellos Home Multibandslängd Malva Wide extra bred, 1 st i 100% lin",
          price: 1499,
          currency: "SEK",
          imageLink:
            "https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$ed$&n=ell_1698346-08_Fm_M0081971&mw=1500&fmt=webp",
          productLink:
            "https://www.ellos.se/ellos-home/multibandslangd-malva-wide-extra-bred-1-st-i-100-lin/1698346-08",
          roomId: "1",
        },
      ],
      order: 1,
    },
  ],
};
