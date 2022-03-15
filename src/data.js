import { v4 as uuidv4 } from "uuid";

export const itemsFromBackend = [
  {
    id: uuidv4(),
    content: {
      index: 1,
      orderNo: "17",
      items:
        "Paratha Side Dish (2Nos), Plain Dosa, Podi Ghee Dosa (1Nos), Butter Roti (5Nos), 2 Chicken Gravy",
      dueDate: "MAY 31, 2019 3:39pm",
    },
  },
  {
    id: uuidv4(),
    content: {
      index: 2,
      orderNo: "20",
      items:
        "Paratha Side Dish (2Nos), Plain Dosa, Podi Ghee Dosa (1Nos), Butter Roti (5Nos), 2 Chicken Gravy",
      dueDate: "MAY 31, 2019 3:39pm",
    },
  },
  {
    id: uuidv4(),
    content: {
      index: 3,
      orderNo: "35",
      items:
        "Paratha Side Dish (2Nos), Plain Dosa, Podi Ghee Dosa (1Nos), Butter Roti (5Nos), 2 Chicken Gravy",
      dueDate: "MAY 31, 2019 3:39pm",
    },
  },
  {
    id: uuidv4(),
    content: {
      index: 4,
      orderNo: "40",
      items:
        "Paratha Side Dish (2Nos), Plain Dosa, Podi Ghee Dosa (1Nos), Butter Roti (5Nos), 2 Chicken Gravy",
      dueDate: "MAY 31, 2019 3:39pm",
    },
  },
  {
    id: uuidv4(),
    content: {
      index: 5,
      orderNo: "52",
      items:
        "Paratha Side Dish (2Nos), Plain Dosa, Podi Ghee Dosa (1Nos), Butter Roti (5Nos), 2 Chicken Gravy",
      dueDate: "MAY 31, 2019 3:39pm",
    },
  },
  {
    id: uuidv4(),
    content: {
      index: 6,
      orderNo: "60",
      items:
        "Paratha Side Dish (2Nos), Plain Dosa, Podi Ghee Dosa (1Nos), Butter Roti (5Nos), 2 Chicken Gravy",
      dueDate: "MAY 31, 2019 3:39pm",
    },
  },
  {
    id: uuidv4(),
    content: {
      index: 7,
      orderNo: "06",
      items:
        "Paratha Side Dish (2Nos), Plain Dosa, Podi Ghee Dosa (1Nos), Butter Roti (5Nos), 2 Chicken Gravy",
      dueDate: "MAY 31, 2019 3:39pm",
    },
  },
  {
    id: uuidv4(),
    content: {
      index: 8,
      orderNo: "22",
      items:
        "Paratha Side Dish (2Nos), Plain Dosa, Podi Ghee Dosa (1Nos), Butter Roti (5Nos), 2 Chicken Gravy",
      dueDate: "MAY 31, 2019 3:39pm",
    },
  },
  {
    id: uuidv4(),
    content: {
      index: 9,
      orderNo: "23",
      items:
        "Paratha Side Dish (2Nos), Plain Dosa, Podi Ghee Dosa (1Nos), Butter Roti (5Nos), 2 Chicken Gravy",
      dueDate: "MAY 31, 2019 3:39pm",
    },
  },
  {
    id: uuidv4(),
    content: {
      index: 10,
      orderNo: "07",
      items:
        "Paratha Side Dish (2Nos), Plain Dosa, Podi Ghee Dosa (1Nos), Butter Roti (5Nos), 2 Chicken Gravy",
      dueDate: "MAY 31, 2019 3:39pm",
    },
  },
];

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
