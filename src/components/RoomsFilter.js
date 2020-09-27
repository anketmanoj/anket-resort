import React from "react";
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "./Title";
// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    // console.log(context);
    const {
        handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
    } = context;

    // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

    return (
        <section className="filter-container">
            <Title title="Search rooms"/>
            <form className="filter-form">
                {/*select type */}
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/*end of select type */}
            </form>
        </section>
    )
}
