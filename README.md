# Coding Challenge
### by Nael Khan
This coding challenge required building a reusable form component. The form component is implemented via a Javascript script, CSS styles, and some classes and id attributes to add to your HTML tags.

To start off, add the following files to your working directory and add the following lines to your index.html:
```html
<link rel="stylesheet" href="form_list.css">
<script src="form_list.js"></script>
```

To use the form, use the class `form_list` on your form element, as such `<form class="form_list">`. The form element and class will use the width of the container you nest it in.

Add the following classes and elements to utilize the functionality of the form. All elements should be nested within the `<form>` element. You have the flexibility to place these elements in an order you'd like!
##### Form Input Area
```html
<input type="text" id="input_text" />
```
##### Form Add Button
```html
<input type="button" id="add" value="Add" onclick="addToList()" />
```
##### Form List Area
```html
<ul id="form_list_ul">
</ul>
```
##### Form Submit Button
```html
<button id="form_list_submit" onclick="submitToList()">Enter Button Text Here</button>
```

The reusable form adds to a list by appending array elements into the unordered list. Deleting elements splices elements in the array and displays the spliced array. On form submit, the form returns an array of all the elements in the list, which can be altered to POST this information to your needs, or manipulate in other ways.

Happy Coding!
