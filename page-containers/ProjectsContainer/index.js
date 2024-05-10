import Card from "@/components/Card.js";
import React from "react";
import styles from "./projectContainer.module.scss";

const ProjectsContainer = () => {
  const data = [
    {
      id: 1,
      name: "Supplier A",
      address: "123 Main St",
      date: "2024-04-29",
      type: "Type A",
      status: "Completed",
    },
    {
      id: 2,
      name: "Supplier B",
      address: "456 Elm St",
      date: "2024-04-30",
      type: "Type B",
      status: "Processing",
    },
    {
      id: 3,
      name: "Supplier C",
      address: "789 Oak St",
      date: "2024-05-01",
      type: "Type C",
      status: "Rejected",
    },
    {
      id: 4,
      name: "Supplier P",
      address: "789 Oak St",
      date: "2024-05-01",
      type: "Type C",
      status: "Completed",
    },
    {
      id: 5,
      name: "Supplier Y",
      address: "789 Oak St",
      date: "2024-05-01",
      type: "Type C",
      status: "Completed",
    },
    {
      id: 6,
      name: "Supplier C",
      address: "789 Oak St",
      date: "2024-05-01",
      type: "Type C",
      status: "Completed",
    },
    {
      id: 7,
      name: "Supplier F",
      address: "789 Oak St",
      date: "2024-05-01",
      type: "Type C",
      status: "Completed",
    },
    {
      id: 1,
      name: "Supplier A",
      address: "123 Main St",
      date: "2024-04-29",
      type: "Type A",
      status: "Completed",
    },
    {
      id: 1,
      name: "Supplier A",
      address: "123 Main St",
      date: "2024-04-29",
      type: "Type A",
      status: "Completed",
    },
    {
      id: 1,
      name: "Supplier A",
      address: "123 Main St",
      date: "2024-04-29",
      type: "Type A",
      status: "Completed",
    },
    {
      id: 1,
      name: "Supplier A",
      address: "123 Main St",
      date: "2024-04-29",
      type: "Type A",
      status: "Completed",
    },
    {
      id: 1,
      name: "Supplier A",
      address: "123 Main St",
      date: "2024-04-29",
      type: "Type A",
      status: "Completed",
    },
    {
      id: 1,
      name: "Supplier A",
      address: "123 Main St",
      date: "2024-04-29",
      type: "Type A",
      status: "Completed",
    },
  ];

  return (
    <>
      <div className={styles.projectContainer}>
        <p>Project Lists</p>
        <div>
          <span className={styles.filter}>Filter</span>
          <span className={styles.addNew}>Add New</span>
        </div>
      </div>
      <div className={styles.tableWrapper}>
        {/* <Card width="" height=""> */}
          <div>
            <table>
              <thead>
                <tr
                  style={{ borderBottom: "1px solid #D3D3D3", color: "green" }}
                >
                  <th>Project Reference No.</th>
                  <th>Project Package</th>
                  <th>Package Typology</th>
                  <th>Package Current Progress</th>
                  <th>Cumulative Manhour</th>
                  <th>Plot Area(m2)</th>
                  <th>GFA(m2)</th>
                  <th>Road Length(km)</th>
                  <th>Infrastructure(Ha)</th>
                  <th>Subscription Category</th>
                  <th>Subscription Tier</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((supplier) => (
                  <tr
                    key={supplier.id}
                    style={{ borderBottom: "1px solid #D3D3D3" }}
                  >
                    <td style={{ height: "50px", padding: "0px 60px" }}>
                      {supplier.id}
                    </td>
                    <td style={{ height: "50px", padding: "0px 60px" }}>
                      {supplier.name}
                    </td>
                    <td style={{ height: "50px", padding: "0px 60px" }}>
                      {supplier.address}
                    </td>
                    <td style={{ height: "50px", padding: "0px 60px" }}>
                      {supplier.date}
                    </td>
                    <td style={{ height: "50px", padding: "0px 60px" }}>
                      {supplier.type}
                    </td>
                    <td style={{ height: "50px", padding: "0px 60px" }}>
                      {supplier.status}
                    </td>
                    <td style={{ height: "50px", padding: "0px 60px" }}>
                      {supplier.status}
                    </td>
                    <td style={{ height: "50px", padding: "0px 60px" }}>
                      {supplier.status}
                    </td>
                    <td style={{ height: "50px", padding: "0px 60px" }}>
                      {supplier.status}
                    </td>
                    <td style={{ height: "50px", padding: "0px 60px" }}>
                      {supplier.status}
                    </td>
                    <td style={{ height: "50px", padding: "0px 60px" }}>
                      {supplier.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        {/* </Card> */}
      </div>
    </>
  );
};

export default ProjectsContainer;
