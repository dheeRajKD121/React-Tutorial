import React from "react";

const List = () => {
  let emp_id = [
    {
      name: "John",
      age: 27,
      email: "singhdheeraj055@gmail.com",
      gender: "male",
    },

    {
      name: "Dheeraj",
      age: 27,
      email: "singhdheeraj055@gmail.com",
      gender: "male",
    },
    {
      name: "Kumar",
      age: 27,
      email: "singhdheeraj055@gmail.com",
      gender: "male",
    },
    {
      name: "singh",
      age: 27,
      email: "singhdheeraj055@gmail.com",
      gender: "male",
    },
    {
      name: "Kumar",
      age: 27,
      email: "singhdheeraj055@gmail.com",
      gender: "male",
    },
    {
      name: "Kumar",
      age: 27,
      email: "singhdheeraj055@gmail.com",
      gender: "male",
    },
    {
      name: "Kumar",
      age: 27,
      email: "singhdheeraj055@gmail.com",
      gender: "male",
    },
    {
      name: "Kumar",
      age: 27,
      email: "singhdheeraj055@gmail.com",
      gender: "male",
    },
    {
      name: "Kumar",
      age: 27,
      email: "singhdheeraj055@gmail.com",
      gender: "male",
    },
  ];
  return (
    <div>
      {emp_id.map((data, index) => {
        // console.log(index)
        // console.log(data)
        return (
          <div className="list">
            <div>{data.name}</div>
            <div>{data.email}</div>
            <div>{data.age}</div>
            <div>{data.gender}</div>
          </div>
        );
      })}
    </div>
  );
};
export default List;
