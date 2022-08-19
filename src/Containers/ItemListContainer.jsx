import '../App.css';

const itemListContainerStyle = {
    right: "0",
    margin: "0 auto",
    fontFamily: "Gruppo",
    fontWeight: "600",
    fontSize: "small",
    width: "0",
    overflow: "hidden",
    whiteSpace: "nowrap",
    animation: "typewriter 10s steps(500) 0.5s 1 forwards"
};

const ItemListContainer = (props) => {
    let someGreetings = [
        "We are glad you are here",
        "Welcome to our website",
        "What can I do for you today?",
        "Hope I can be useful",
        "Have a great day !",
        "We look forward to serve you"
    ];
    let randomGreeting = someGreetings[Math.floor(someGreetings.length * Math.random())];
    return (
        <p style={itemListContainerStyle}>{props.greeting}{randomGreeting}</p>
    );
}

export default ItemListContainer;