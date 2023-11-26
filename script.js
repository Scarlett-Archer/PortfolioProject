const randomActsOfKindness = [
  "Call a friend that you haven’t spoken to for a while...",
  "Send flowers to a friend...",
  "Tell your family members how much you love and appreciate them...",
  "Help your parents with household chores...",
  "Tell someone you know that you are proud of them...",
  "Tell your family members how much you love and appreciate them...",
  "Have a clear out and take your items to a charity shop...",
  "Compliment a stranger or someone you know...",
];

const motivationalMessage = [
  "When you give joy to other people, you get more joy in return.",
  "Learn as if you will live forever, live like you will die tomorrow.",
  "Live life to the fullest, and focus on the positive.",
  "You'll never do a whole lot unless you're brave enough to try",
  "Always turn a negative situation into a positive situation.",
  "Great things never come from comfort zones.",
];

const positivePhrase = [
  "Make someone's day! It'll make you smile.",
  "Have a great day!",
  "You've got this!",
  "You're doing great!",
];

const getRandomPhrase = (array) => {
  let randomInd = Math.floor(Math.random() * array.length);
  return array[randomInd];
};

console.log(
  `Today, your random act of kindness is: ${getRandomPhrase(
    randomActsOfKindness
  )}`
);
