
        const heading1 = React.createElement(
          "h1",
          {id : "heading-1"},
          "Namaste React"
        ); // What i want on Browser
  
        const heading2 = React.createElement(
          "h2",
          {id : "heading-2"},
          "Namaste React"
        );

        const container = React.createElement(
          "div",
          {id : "container"},
          [heading1, heading2]
        );
        const root = ReactDOM.createRoot(document.getElementById("root")); // Which location i want
  
        root.render(container); // How to display on Browser
