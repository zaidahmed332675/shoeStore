import React, { createContext } from "react";

import Shoe1 from "../images/shoeImages/shoe002.png";
import Shoe2 from "../images/shoeImages/shoe003.png";
import Shoe3 from "../images/shoeImages/shoe004.png";
import Shoe4 from "../images/shoeImages/shoe005.png";
import Shoe5 from "../images/shoeImages/shoe006.png";
import Shoe6 from "../images/shoeImages/shoe007.png";
import Shoe7 from "../images/shoeImages/shoe008.png";
import Shoe8 from "../images/shoeImages/shoe009.png";

import blackshoe from "../images/shoeImages/blackshoe1.png";
import redshoe from "../images/shoeImages/redshoe1.png";
import greenshoe from "../images/shoeImages/greenshoe1.png";
import orangeshoe from "../images/shoeImages/orangeshoe1.png";

const productList = {
  shoes: [
    {
      id: 1,
      shoeName: "Nike Original 1",
      slug: "Nike-Original-1",
      price: 150,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: Shoe5,
      count: 1,
    },
    {
      id: 2,
      shoeName: "Nike Original 2",
      slug: "Nike-Original-2",
      price: 100,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: Shoe6,
      count: 1,
    },
    {
      id: 3,
      shoeName: "Nike Original 3",
      slug: "Nike-Original-3",
      price: 250,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: Shoe7,
      count: 1,
    },
    {
      id: 4,
      shoeName: "Nike Original 4",
      slug: "Nike-Original-4",
      price: 300,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: Shoe8,
      count: 1,
    },
    {
      id: 5,
      shoeName: "Nike Original 5",
      slug: "Nike-Original-5",
      price: 100,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: Shoe1,
      count: 1,
    },
    {
      id: 6,
      shoeName: "Nike Original 6",
      slug: "Nike-Original-6",
      price: 200,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: Shoe2,
      count: 1,
    },
    {
      id: 7,
      shoeName: "Nike Original 7",
      slug: "Nike-Original-7",
      price: 220,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: Shoe3,
      count: 1,
    },
    {
      id: 8,
      shoeName: "Nike Original 8",
      slug: "Nike-Original-8",
      price: 200,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: Shoe4,
      count: 1,
    },
  ],
  featuredShoes:[
    {
      id: 9,
      shoeName: "Nike Original 9",
      slug: "Nike-Original-9",
      price: 100,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: blackshoe,
      count: 1,
    },
    {
      id: 10,
      shoeName: "Nike Original 10",
      slug: "Nike-Original-10",
      price: 100,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: redshoe,
      count: 1,
    },
    {
      id: 11,
      shoeName: "Nike Original 12",
      slug: "Nike-Original-12",
      price: 100,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: greenshoe,
      count: 1,
    },
    {
      id: 12,
      shoeName: "Nike Original 13",
      slug: "Nike-Original-13",
      price: 100,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: orangeshoe,
      count: 1,
    },

  ]
};

export const GlobalData = createContext(productList);

export const GlobalContextProvider = ({children}) => {
  return (
    <GlobalData.Provider
      value={{
        shoes: productList.shoes,
        featuredShoes: productList.featuredShoes,
      }}
    >
      {children}
    </GlobalData.Provider>
  );
};