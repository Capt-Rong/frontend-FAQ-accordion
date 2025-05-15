const questions = document.querySelectorAll('.faq-accordion__question-wrapper');
const answers = document.querySelectorAll('.faq-accordion__answer');

questions.forEach((question, index) => {
  question.addEventListener('click', () => {
    toggleIcon(index);
    toggleAnswer(index);
  });
});

function toggleAnswer(index) {
  const ans = answers[index];
  console.log(index, ans);
  if (ans.classList.contains('active')) {
    ans.classList.remove('active');
    ans.style.maxHeight = null;
  } else {
    ans.classList.remove('hidden');
    ans.classList.add('active');
    ans.style.maxHeight = ans.scrollHeight + 'px';
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
