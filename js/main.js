// Animated Counters - counts up when in viewport
function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    let started = false;
    function runCounter() {
      if (!started && counter.offsetParent !== null) {
        started = true;
        const target = +counter.getAttribute('data-count');
        let count = 0;
        const step = Math.ceil(target / 60);
        function update() {
          if (count < target) {
            count += step;
            counter.innerText = count > target ? target : count;
            requestAnimationFrame(update);
          } else {
            counter.innerText = target;
          }
        }
        update();
      }
    }
    window.addEventListener('scroll', runCounter);
    runCounter(); // run in case already in viewport
  });
}

document.addEventListener('DOMContentLoaded', animateCounters);
