const questions = document.querySelectorAll('.faq-accordion__question-wrapper');
const answer = document.querySelectorAll('.faq-accordion__answer');

questions.forEach((question, index) => {
  question.addEventListener('click', () => {
    toggleIcon(index);
    toggleAnswer(index);
  });
});

function toggleAnswer(index) {
  // if the answer is hidden, remove the hidden class
  if (answer[index].classList.contains('hidden')) {
    answer[index].classList.remove('hidden');
  } else {
    answer[index].classList.add('hidden');
  }
}

function toggleIcon(index) {
  // Toggle the icon between collapsed and expanded
  const collapsedIcon = document.querySelectorAll(
    '.faq-accordion__toggle-icon-collapsed'
  );
  const expandedIcon = document.querySelectorAll(
    '.faq-accordion__toggle-icon-expanded'
  );

  collapsedIcon[index].classList.toggle('hidden');
  expandedIcon[index].classList.toggle('hidden');
}
