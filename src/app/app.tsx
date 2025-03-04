import { IgrColumn, IgrGrid } from "@infragistics/igniteui-react-grids";
import "./app.css"; // Import the CSS file

const sampleData = [
  { id: 1, name: "John", country: "USA", age: 37 },
  { id: 2, name: "Alice", country: "India", age: 32 },
  { id: 3, name: "Bob", country: "Korea", age: 25 },
  { id: 4, name: "Doe", country: "Japan", age: 20 },
];

export const App = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "24px auto" }}>
      <IgrGrid data={sampleData} primaryKey="id" width="100%" style={{ "--ig-size": "var(--ig-size-small)" }}>
        <IgrColumn field="name" header="Name" dataType="String" />
        <IgrColumn field="country" header="Country" dataType="String" />
        <IgrColumn field="age" header="Age" />
      </IgrGrid>
    </div>
  );
};
