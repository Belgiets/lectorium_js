let testInputs = [
  [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1],
  [-1, -8, -2],
  [1, 7, 3],
  [1, undefined, 3, 5, -3],
  [1, NaN, 3, 5, -3]
]

function handle (inputArr) {
  let max
  let min
  let sum = 0
  let i

  for (i = 0; i < inputArr.length; i++) {
    if (isNaN(inputArr[i]) || typeof inputArr[i] === 'undefined') {
      continue
    }

    max = typeof max === 'undefined' ? inputArr[i] : max

    if (inputArr[i] > max) {
      max = inputArr[i]
    }

    min = typeof min === 'undefined' ? inputArr[i] : min

    if (inputArr[i] < min) {
      min = inputArr[i]
    }

    sum += inputArr[i]
  }

  console.log('max', max)
  console.log('min', min)
  console.log('sum', sum)

  return {
    array: inputArr.join(', '),
    max: max,
    min: min,
    sum: sum
  }
}

function showResult(result) {
  let body = document.querySelector('body');
  let div = document.createElement('div')

  Object.keys(result).forEach(function (key) {
    let header = document.createElement('h2')
    let p = document.createElement('p')

    header.innerHTML = key + ':'
    p.innerHTML = result[key]

    div.appendChild(header)
    div.appendChild(p)
    body.appendChild(div)
  });
}

testInputs.forEach(function(item, index) {
  let result = handle(item)

  showResult(result)
})
