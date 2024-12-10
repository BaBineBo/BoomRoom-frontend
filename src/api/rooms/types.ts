// I'm not sure if this should be placed in models, or if rooms.ts should be placed here

import { Room } from "../../models/rooms";

export interface GetRoomsResponse {
  rooms: Room[];
}
