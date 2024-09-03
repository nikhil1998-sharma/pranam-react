import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = React.createElement("h1", {id: "heading"}, "Hello from React!")

const root = ReactDOM.createRoot(document.getElementById("root"))

console.log(heading)

root.render(heading)