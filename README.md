# LOREBUILDER
**This is a Proof of Concept for TypeScript study.**

## Introduction

As an avid TTRPG player, I'm always looking for ways to optimize my time and my experience with several games. I find that the available tools online for organizing the bureaucratic aspects of a TTRPG group and session are either too complicated or too expensive. Because of that, I've decided to create a simpler tool to manage and create character sheets, worldbuilding notes, items and other aspects of lore.

This first prototype will consist of an API with a rudimentary CRUD of lineages (formerly known as races in D&D), using `PostgreSQL` and `node-postgres`.


## How to run Lorebuilder
1. Clone this repository
2. Install the required dependencies using `npm install`
3. Create a PostgreSQL database and a table called `lineages`
4. Configure your .env file with the appropriate credentials
5. Run the project with `npm run dev` to start the server


## API Documentation
### Lineage Routes
<details>
    <summary><code>POST</code> <code>/lineages/create</code></summary>
    Body

```json
{
    "name": "Minions",
    "maxAge": 5000,
    "adultAge": 0,
    "isPlayable": false,
    "description": "The Minions are small, yellow, oval shaped creatures. They tend to have little self-control."
}
```

</details>


## Features

- [x] Create a lineage
- [ ] Find all lineages and lineage by ID
- [ ] Edit a lineage
- [ ] Delete a lineage