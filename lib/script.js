const root = document.getElementById('root');
console.log(root);

// const h1 = React.createElement('h1', {}, 'LOL', 'LOL'); Normal

// For JSX:
// It will give error: Unexpected token '<' as we are not using babel
const h1 = /*#__PURE__*/React.createElement("h1", null, "LOL");
const ren = ReactDOM.createRoot(root);
ren.render(h1);
//# sourceMappingURL=script.js.map