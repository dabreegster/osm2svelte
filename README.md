# osm2streets + Svelte

Stay tuned

## Design patterns

### Map and sidebar interactions

An example is the thicken tab -- after clicking a road on the map, we want to
display info in the sidebar, but also query the map rendered features. How to
plumb everything?

**Option 1**: Treat the map as a global variable, just sticking it in a store.
Generally assume it's loaded and available by the time something like the
thicken tab component becomes active.

**Option 2**: Nest everything under the Map component in the component tree.
Effectively the same, but feels more convoluted.

**Option 3**: Decouple stuff. First plumb an event "up" from the map. Higher up
in the App, have some kind of state. Then flow that down as a prop into the
sidebar, and maybe even to another component in the map. Sometimes this feels
like a nice solution (in SPC, it separates concerns). But it doesn't let us
query the map as part of an analysis.

**Option 4**: Keep it nested under the map, but have some magic Svelte trick
for mounting the component's DOM piece under some other part of the page?
