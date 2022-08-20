import '../App.css';
import './ItemListContainer.css';

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
        <div className="divGreetingStyle"><p className="itemListContainerStyle">{props.greeting}{randomGreeting}</p></div>
    );
}

export default ItemListContainer;