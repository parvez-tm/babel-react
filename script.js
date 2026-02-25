const root = document.querySelector('#root');
console.log(root);

// const h1 = React.createElement('h1', {}, 'LOL', 'LOL'); Normal

// For JSX:
// It will give error: Unexpected token '<' as we are not using babel
const h1 = <h1>LOL</h1>;

const ren = ReactDOM.createRoot(root);

ren.render(h1);
