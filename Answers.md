1. What problem does the context API help solve?

The context API lets you pass data only to the components that need it whilst helping to keep your state clean.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Components have events that when fired dispatch actions to the reducers and tells reducers how to update the state tree. The store is known as a 'single source of truth' in redux because the store contains all the data of the application. In this way, the store provides a single source of truth for our data.


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global; allowing State to be accessed by any components in the app. Component state lives inside the scope of itself and the only way to pass it to other components would be through props. This means that only the child components can access component state. If an application is going to need a lot of data that needs to be accessible to a lot of components everywhere in your app, then it would be most efficient to use application state to manage and give better structure to the app's data.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware library by Redux that helps us run asynchronous operations. Actions are dispatched from our action-creators and flow through every middleware function before arriving at the reducers. Without redux-thunk, action creators would dispatch actions straight to the reducers and then the cycle repeats. The action-creators change as they return a function and not an action object. 

5. What is your favorite state management system you've learned and this sprint? Please explain why!

I like using the Context API more so than Redux as Redux is more complicated in setting it up especially for a very simple application I was building. 