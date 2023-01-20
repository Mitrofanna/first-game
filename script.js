const tree = document.querySelector('.tree');
const rider = document.querySelector('.rider');

document.addEventListener('keydown', function(event) {
  jump();
})

function jump() {
  if(rider.classList != 'jump') {
    rider.classList.add('jump');
  }

  setTimeout (function() {
    rider.classList.remove('jump');
  }, 300)
}

let isAlive = setInterval (function() {
  let riderTop = parseInt(window.getComputedStyle(rider).getPropertyValue('top'));
  let treeLeft = parseInt(window.getComputedStyle(tree).getPropertyValue('left'));
  if(treeLeft < 40 && treeLeft > 0 && riderTop >= 140) {
    alert ('over');
  }
}, 10)
