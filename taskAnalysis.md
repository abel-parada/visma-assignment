# Own thoughs and analysis of the given task

## Short description of how I understood the problem

What I understood is that the program should have a client that imports a class, passes the given URI as an argument and calls the class method to show it in the console.

At first, I had parsed the URI in the client.js and then passed it in the class as an object. Then, and after carefully reading again, I finally understood that I should pass the URI as a string and this should be parsed in the class.

Initially I had only included one method in the class (identifyAction ()) and I went with conditional statements as the safest approach. Later, I coded separate methods for each case and called them accordingly inside `switch`. I believe this approach makes cleaner implementation of new URIs/actions.

## Challenges I had with the implementation

- Parsing the URI. It helped to console.log it during several steps during development (console.logs have been removed in the final code). I also, tested the class component every step of the way in a separate file. I fixed errors as I went during development.

- Adding a UUID identification was a bit of a challenge. I solved it by using an extra dependency with npm.

## What would I improve further

My next step would be to pass arguments in the command line when running the app. Users could put the URI themselves as opposed to have to comment in/out the different cases.

Example

```shell
node client visma-identity://login?source=severa
```

However, the pain point here would be that the user has to write the argument, since it can be quite lengthy.
