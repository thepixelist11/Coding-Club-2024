function calculate(num1, num2, op) {
  if(op == '+'){
    return num1 + num2
  } else if(op == '-') {
    return num1 - num2
  } else if (op == '*') {
    return num1 * num2
  } else if (op == '/') {
    if (num2 == 0) {
      return null
    } else {
      return num1 / num2
    }
  }
}
