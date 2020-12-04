# Change detection strategy demo

Demonstrates the advantages of using OnPush change detection strategy wherever possible.

There are two pages, one where a child component uses the default CD strategy and another
where an otherwise-identical child component uses the OnPush CD strategy.

Clicking the buttons on each page will cause an event listener to emit and the change 
detector to be invoked.  Each child component displays the number of times the change
detector for itself has been invoked.

Using the default CD strategy, we see the change detector being invoked for every 
component for every click, even ones unrelated to the event.

Using the OnPush strategy, only changed components have their change detection invoked.
