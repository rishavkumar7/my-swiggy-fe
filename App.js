import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Title = () => {
    return <h1>This is Title</h1>;
}
const Heading = () => {
    return (<div>
        {Title()}
        <Title></Title>
        <Title />
        <h1 className="heading">Writing from JSX</h1>
    </div>);
}
root.render(<Heading />);