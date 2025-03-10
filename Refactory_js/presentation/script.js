// /*Css DOM manipulation
// 1.Changing CSS Styles
// 2.Adding and Removing Classes
// 3.Changing CSS Attributes
// 4.Changing CSS Attributes
// 5. Using CSS Selectors
// */
// const element = document.getElementById('myElement');

// // //1.You can change the CSS styles of an element using the style property.
// element.style.backgroundColor = 'red';  // Change the background color
// element.style.fontSize = '24px';   // Change the font size
// element.style.color = 'white';  // Change the text color



// // //2.Adding and Removing Classes
// element.classList.add('active');    // Add a class
// element.classList.remove('inactive');   // Remove a class
// element.classList.toggle('visible');    // Toggle a class


// // //3.Changing CSS Attributes
// element.setAttribute('width', '100%');  // Change the width attribute
// element.setAttribute('height', '500px');    // Change the height attribute


// // //4.Getting and Setting Inline Styles
// const styles = element.style.cssText;  // Get the inline styles
// element.style.cssText = 'background-color: red; color: white;'; // Set the inline styles

// // //5. Using CSS Selectors
// const activeElements = document.querySelectorAll('.active');    // Select all elements with the class 'active'
// activeElements.forEach((element) => {   // Change the background color of all active elements
//   element.style.backgroundColor = 'blue';
// });


/*Example 1*/
document.getElementById('hideButton').addEventListener('click', function() {
    let paragraph = document.getElementById('myParagraph');
    paragraph.classList.toggle('hidden');
    paragraph.classList.toggle('background');
    paragraph.classList.toggle('show');
});

// document.getElementById('hideButton').addEventListener('click', function() {
//     let paragraph = document.getElementById('myParagraph');    
//     paragraph.classList.add('background');  // Add background color to the paragraph
    
//     setTimeout(function() {
//         paragraph.classList.add('hidden');
//     }, 200); // Delay of 200ms (adjust as needed)
// });


/*Example @2 */

document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('username').value;
    document.getElementById('welcomeMessage').textContent = 'Hi ' + name + ',' + '\n' + 'Welcome to Karibu Groceries Ltd !';
    document.getElementById('shape').style.display = 'flex';
    document.body.style.backgroundColor = getRandomColor();
});

document.getElementById('shape').addEventListener('click', function () {
    let shape = this;
    if (shape.classList.contains('square')) {
        shape.className = 'shape circle';
    } else if (shape.classList.contains('circle')) {
        shape.className = 'shape triangle';
    } else if (shape.classList.contains('triangle')) {
        shape.className = 'shape rectangle';
    } else {
        shape.className = 'shape square';
    }
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}