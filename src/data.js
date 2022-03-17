import { v4 as uuidv4 } from "uuid";

export const itemsFromBackend = [
  { id: uuidv4(), content: { orderNo: "17" } },
  { id: uuidv4(), content: { orderNo: "20" } },
  { id: uuidv4(), content: { orderNo: "35" } },
  { id: uuidv4(), content: { orderNo: "40" } },
  { id: uuidv4(), content: { orderNo: "52" } },
  { id: uuidv4(), content: { orderNo: "60" } },
];

export const contents = {
  orders:
    "Paratha Side Dish (2Nos), Plain Dosa, Podi Ghee Dosa (1Nos), 2 Chicken Gravy",
  dueDate: "MAY 31, 2019 3:39pm",
};
export const columnsFromBackend = {
  [uuidv4()]: {
    name: "RECIEVED ORDERS",
    items: itemsFromBackend,
  },
  [uuidv4()]: {
    name: "ORDER IN PROGRESS",
    items: [],
  },
  [uuidv4()]: {
    name: "ORDER IS READY FOR DELIVERY",
    items: [],
  },
  [uuidv4()]: {
    name: "ORDER PICKED UP",
    items: [],
  },
};
