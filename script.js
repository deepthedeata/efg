

// Update slider value display
const slider = document.getElementById('duration');
const output = document.getElementById('durationValue');
slider.oninput = function() {
  output.innerText = this.value;
};
const aboutSection = document.querySelector('.about-content');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 1.1;
  const boxTop = aboutSection.getBoundingClientRect().top;

  if (boxTop < triggerBottom) {
    aboutSection.classList.add('visible');
  }
});

const aboutContent = document.querySelector('.about-content');

window.addEventListener('scroll', () => {
  const triggerPoint = window.innerHeight * 0.85;
  const boxTop = aboutContent.getBoundingClientRect().top;

  if (boxTop < triggerPoint) {
    aboutContent.classList.add('visible');
  }
});
function calculateEMI() {
  let amount = parseFloat(document.getElementById('amount').value);
  let rate = parseFloat(document.getElementById('interest').value) / 12 / 100;
  let tenure = parseInt(document.getElementById('tenure').value);
  let emi = (amount * rate * Math.pow(1+rate, tenure)) / (Math.pow(1+rate, tenure)-1);
  document.getElementById('result').innerText = `Your Monthly EMI: ₹${emi.toFixed(2)}`;
}


function calculateEMI() {
  const amount = parseFloat(document.getElementById('amount').value);
  const rate = parseFloat(document.getElementById('interest').value) / 12 / 100;
  const tenure = parseInt(document.getElementById('tenure').value);

  if (isNaN(amount) || isNaN(rate) || isNaN(tenure) || amount <= 0) {
    document.getElementById('emi-result').innerText = "Please enter valid values!";
    return;
  }

  const emi = (amount * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
  document.getElementById('emi-result').innerText = `Your Monthly EMI is: ₹${emi.toFixed(2)}`;
}



  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(q => {
    q.addEventListener('click', () => {
      q.classList.toggle('active');
      const answer = q.nextElementSibling;
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.style.padding = "0 20px";
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.padding = "20px";
      }
    });
  });
window.addEventListener('scroll', () => {
  if (!aboutContent.classList.contains('visible')) {
    const triggerPoint = window.innerHeight * 0.85;
    const boxTop = aboutContent.getBoundingClientRect().top;

    if (boxTop < triggerPoint) {
      aboutContent.classList.add('visible');
    }
  }
});
