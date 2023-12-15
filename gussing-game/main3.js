var number=prompt("enter the secret number");
if (number < 7) {
    alert(`too low try again`)
  } else if (number == 7) {
    alert(`you gussed it`)
  } else {
    alert(`too high try again`)
  }