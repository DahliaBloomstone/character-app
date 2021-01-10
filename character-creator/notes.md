import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0
    };

render() {
    return (
        <div>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
        </div>
    );
}
}

const {count} = this.state;
formatCount() {
    return count === 0 ? <h1>Zero</h1> : count; 
}
}

export default Counter; 


NOTES: 
in between curly braces valid javascript expressions
expressions produce values 
could put {2+2}

DESTRUCTURING:
 BEFORE: 
return this.state.count === 0 ? 'Zero' : this.state.count; 

AFTER: 
return count === 0 ? 'Zero' : count; 

picking count property and storing it in a separate constant called count 

JSX expressions are like normal javascript objects. 

What is the difference between props and state? 
Props includes data that we give to a componenent
state includes data that is local or private to that component so other components cannot access that state 
components can have local state, invisible to other components
My components get all the data they need via props and not state, they are stateless components. 

You should default to using stateless components. Since they use no state, it's very easy to tell when a component should be re-rendered, since they will display the same thing if their props do not change. You should use stateful components when you need to use setState or when you need to use lifecycle hooks
lifecycle hooks: componentdidmount or componentdidupdate 


more on destructuring arguments: 
 
