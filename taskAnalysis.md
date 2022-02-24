# Own thoughs and analysis of the given task

## Short description of how I understood the problem

At first, I believed I had to implement three methods in the class (for example, login, confirm and sign). Each method would request different parameters according to the instructions. I would call those methods in the main implementation one by one.

Then, and after reading again, I finally understood that method should return an action that corresponds with the path given in the URI. And according to it, it should return different parameter values. So, not three methods. I went with conditional statements as the safest approach.

## Challenges I had with the implementation

Parsing the URI gave me some troubles. It helped to console.log it during several steps during development. I also, tested the class component every step of the way in a separate file. I fixed console errors as I went during development.

## What would I improve further

My next step would be to parse arguments in the command line when running the app in development mode. Users could put the URI themselves as opposed to have to comment in/out the different URIs.

Example

```shell
node mainV2 visma-identity://login?source=severa
```

However, the pain point here would be that the user has to write the argument, since it is quite lengthy.
