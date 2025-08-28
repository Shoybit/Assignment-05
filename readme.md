1 . <!-- What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? -->

<!-- getElementById -->

    An ID is assigned to a single element, making it easy to select a div. If the same ID is used on multiple elements, getElementById will return only the first matching element from the DOM; the others will not be captured. Therefore, ID s must be kept unique.



<!-- getElementsByClassName -->

Using getElementsByClassName we can get all the elements of the same class from the DOM together. It returns an array-like HTMLCollection, through which each element can be accessed or manipulated using a loop.


<!-- querySelector  -->

Using querySelector, the first matching element is selected from the DOM. According to CSS selectors, # is used for IDs, . is used for classes, and the tag name is used directly for elements. The first matching element is returned.



<!-- querySelectorAll -->

querySelectorAll is used to get all matching elements from the DOM using CSS selectors. It returns an array-like NodeList



2 . <!-- .How do you create and insert a new element into the DOM? -->

    To create and insert a new element into the DOM, first create the new element using document.createElement() . It will not be displayed on the page yet. If you want to add text or other content to the element, you can use textContent or innerHTML .


3 .  <!-- What is Event Bubbling and how does it work?  -->

    An event that occurs on an HTML element, such as a click, propagates upward through its parent elements. When a user clicks on an element in the DOM, such as a button, the event is triggered. The event first happens on the target element and then gradually propagates to its parent elements



4 .  <!--  What is Event Delegation in JavaScript? Why is it useful? -->

    When there are many child elements, such as items in a list or multiple buttons, adding a separate event listener for each element can make the code much larger and the file size larger. Event Delegation solves this problem. It adds a single event listener to a parent element, which can handle events from its child elements. This saves memory, reduces the file size, and makes the code run faster.







5 .    <!-- What is the difference between preventDefault() and stopPropagation() methods?  -->

        preventDefault() stops the browser's default event re-lording, but does not prevent the event from going to parent elements.

        event.stopPropagation() prevents the event from bubbling up to parent elements, but it does not stop the browser’s default action.