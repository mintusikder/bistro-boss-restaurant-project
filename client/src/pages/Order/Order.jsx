import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderCover from "../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import useMenu from "../../hooks/useMenu";
import OrderCard from "../Shared/OrderCard";
import OrderTab from "./OrderTab";
const Order = () => {
  const [menu] = useMenu();
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  return (
    <div>
      <Helmet>
        <title>Bistro | Order</title>
      </Helmet>
      <Cover
        img={orderCover}
        title={"OUR SHOP"}
        subTitle={"would you like to try a dish?"}
      ></Cover>
      <Tabs>
        <TabList className="uppercase mt-24">
          <Tab>Salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soups</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
        </TabList>


        <TabPanel>
          <OrderTab items={salad}></OrderTab>
          </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
          </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
          </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
          </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
          </TabPanel>
     
      </Tabs>
    </div>
  );
};

export default Order;
