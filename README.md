# Origin of the project

This project idea is based on the Module 3 of the Scrimba Tutorial "Learn Javascript" : https://scrimba.com/learn/learnjavascript/module-3-final-solo-project-invoice-creator-cVbPpRhD

# Requirements

- Array to hold services requested
- Buttons to add service to array
- Place to display data from array - updated every time the array changes
- Don't charge > once for same service
- Total cost stays uptated
- Button to "send invoice" (reset)
- Stretech: remove items after adding

# Issue

Everything seems to work except the remove item (last requirement for this project).
I use "onclick = "function()"" method to dynamicaly add the parameter inside the template. I could delete one item and price to the array / render, but only the first element added. 

For example, if I add "Wash Car" and "Mow Lawn" in that order: it's doesn't matter if I delete Mow or Wash, the app gonna delete only the Wash Car. Only if a reclick a second time Mow gonna disappear. Beside, the total amount render is broke.

I tried AddEventListener but I don't know how to get the price and the item next to the remove button. Each remove button should I have a affiliation with a particular task and price, but i don't know how for the moment.

A obvious fix should be create a single remove button to delete everything. But it's kind of against the exercice.

Neverthless, everything else work fine and the remove button is a bonus.