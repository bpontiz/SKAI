import '../App.css';

const itemListContainerStyle = {
    padding: "0.2rem",
    margin: "0.1rem",
    fontFamily: "Gruppo",
    fontWeight: "600",
    fontSize: "small"
};

const ItemListContainer = (props) => {
    let someGreetings = [
        "We are glad you are here",
        "Welcome",
        "What can I do for you today?"
    ];
    let randomGreeting = someGreetings[Math.floor(someGreetings.length * Math.random())];
    return (
        <p style={itemListContainerStyle}>{props.greeting}{randomGreeting}</p>
    );
}

export default ItemListContainer;