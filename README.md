# Kenton King - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview
Users can fill out the Credit Card form and see values update in real time. 
Form values should be validated and if values are invalid the form should not be submitted.
Upon a successful submission, the user should see the success message and be able to click a
continue button which will clear the fields allowing the user to start over.

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./desktop-design.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- React CSS Modules
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

One new thing I learned was how to show validation errors on a field once it loses focus.
I am not sure you can do this with just CSS because there is not a blur selector in CSS.
But there is a onBlur event that is available in Javascript/React.  So I used that with a touch of 
CSS to show or hide error messages and error styling.

Code snippets, see below:

```jsx
   <input
        onBlur={() => setFocused(true)}
        data-focused={focused.toString()}
        value={value}
        className={styles.input}
        id={id}
        {...rest}
    />
    <span className={styles.errorMessage}>{handleErrorMsg({ formatMessage, requiredMessage, value })}</span>
```
```css
    .errorMessage {
      display: none;
      color: var(--input-error);
      margin-top: .75rem;
      font-size: .90rem;
    }
    
    .input[data-focused="true"]:invalid {
      border-color: var(--input-error);
    }
    
    .input[data-focused="true"]:invalid ~ .errorMessage {
      display: block;
    }
```

### Continued development

I would like to add some testing scripts to this application.
Testing is often overlooked in tutorial applications like this but that is sad because testing is
crucial for stable application development.

### Useful resources

- [Lama Dev](https://www.youtube.com/watch?v=tIdNeoHniEY) - This is a great tutorial on how to create a form with react and add validation to it with out using any libraries.

## Author

- Website - [Kenton King](https://www.your-site.com)
- Frontend Mentor - [contact@kentonking.tech](https://www.frontendmentor.io/profile/yourusername)
