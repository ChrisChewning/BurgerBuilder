//wrapper for Layout.js and others. It is an auxillary, higher order component.  functional (stateless). props as input, return props.children. since there's no jsx you don't have to import react from react.

const aux = (props) => props.children;

export default aux;
