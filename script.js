const randomActsOfKindness = [
  "Call a friend that you haven’t spoken to for a while!",
  "Send flowers to a friend!",
  "Tell your family members how much you love and appreciate them!",
  "Help your parents with household chores!",
  "Tell someone you know that you are proud of them!",
  "Tell your family members how much you love and appreciate them!",
  "Have a clear out and take your items to a charity shop!",
  "Compliment a stranger or someone you know!",
];

const motivationalMessage = [
  "When you give joy to other people, you get more joy in return.",
  "Learn as if you will live forever, live like you will die tomorrow.",
  "Live life to the fullest, and focus on the positive.",
  "You'll never do a whole lot unless you're brave enough to try.",
  "Always turn a negative situation into a positive situation.",
  "Great things never come from comfort zones.",
];

const positivePhrase = [
  "Enjoy your day!",
  "Have a great day!",
  "You've got this!",
  "You're doing great!",
];

//function returning a random element from the above arrays.
const getRandomPhrase = (array) => {
  let randomInd = Math.floor(Math.random() * array.length);
  let phrase = array[randomInd];

  switch (array) {
    case randomActsOfKindness:
      return `Today, your random act of kindness is: "${phrase}"`;
      break;
    case motivationalMessage:
      return `Your motivational message for the day is: "${phrase}"`;
      break;
    case positivePhrase:
      return `Finally, don't forget...${phrase}👍`;
      break;
    default:
      return "Not enough information, please try again.";
      break;
  }
};

//Calling the function with the different arguments.
console.log(getRandomPhrase(randomActsOfKindness));
console.log(getRandomPhrase(motivationalMessage));
console.log(getRandomPhrase(positivePhrase));
