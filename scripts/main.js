/**
 * @name shuffleCards
 * @param {*} cards
 * @description The function is used to shuffle the items
 * @returns shuffledItems
 */
const shuffleCards = (cards) => {
  let shuffledCards = cards.slice(0);
  let temp;
  let i = shuffledCards.length;
  let rand;
  while (--i) {
    rand = Math.floor(i * Math.random());
    temp = shuffledCards[rand];
    shuffledCards[rand] = shuffledCards[i];
    shuffledCards[i] = temp;
  }
  return shuffledCards;
};

window.onload = () => {
  let list = document.getElementById("shuffleAndSort");

  /**
   * @name shuffle
   * @param none
   * @description Shuffles the HTML nodes and updates the DOM
   * @returns none
   */
  const shuffle = () => {
    let nodes = list.children,
      i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffleCards(nodes);

    // Mutating the DOM properly
    const fragment = document.createDocumentFragment();
    while (i < nodes.length) {
      fragment.appendChild(nodes[i]);
      ++i;
    }
    list.appendChild(fragment);
  };

  /**
   * @name sort
   * @param none
   * @description Sorts the HTML nodes and updates the DOM
   * @returns none
   */
  const sort = () => {
    let items = list.childNodes;
    let itemsArr = [];
    for (let i in items) {
      if (items[i].nodeType == 1) {
        // get rid of the whitespace text nodes
        itemsArr.push(items[i]);
      }
    }

    itemsArr.sort((a, b) => {
      return a.innerHTML == b.innerHTML
        ? 0
        : a.innerHTML > b.innerHTML
        ? 1
        : -1;
    });

    // Mutating the DOM properly
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < itemsArr.length; ++i) {
      fragment.appendChild(itemsArr[i]);
    }
    list.appendChild(fragment);
  };

  // Binding the JS Utility Functions with the onClick Event
  document.getElementById("sort").onclick = sort;
  document.getElementById("shuffle").onclick = shuffle;
};
