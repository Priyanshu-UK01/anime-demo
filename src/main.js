import { animate, stagger, random } from 'animejs';

const container = document.querySelector('.container');
for (let i = 0; i <= 100; i++) {
  const blocks = document.createElement('div');
  blocks.classList.add('block');
  container.appendChild(blocks);
}

document.querySelectorAll('.block').forEach((block) => {
  block.style.left = random(0, 100) + '%';
  block.style.top = random(0, 100) + '%';
});

function animateBlocks() {
  const blocks = document.querySelectorAll('.block');

  animate(blocks, {
    x: () => random(-700, 700) + 'px',
    y: () => random(-500, 500) + 'px',
    scale: () => random(1, 5),
    easing: 'linear',
    duration: 3000,
    delay: stagger(10),
  });
}

animateBlocks();