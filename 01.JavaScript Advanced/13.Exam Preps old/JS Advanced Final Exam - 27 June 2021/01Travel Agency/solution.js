window.addEventListener('load', solution);

function solution() {
  const fullNameField = document.getElementById('fname');
  const emailField = document.getElementById('email');
  const phoneNumberField = document.getElementById('phone');
  const addressField = document.getElementById('address');
  const postCodeField = document.getElementById('code');

  const submitBtn = document.getElementById('submitBTN');
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');

  let infoPreview = document.getElementById('infoPreview');
  let divBlock = document.getElementById('block');

  submitBtn.addEventListener('click', submit);

  function submit() {

    if (fullNameField.value == "" || emailField.value == "") {
      return;
    }

    infoPreview.innerHTML = `<li>Full Name: ${fullNameField.value}</li>
    <li>Email: ${emailField.value}</li>
    <li>Phone Number: ${phoneNumberField.value}</li>
    <li>Address: ${addressField.value}</li>
    <li>Postal Code: ${postCodeField.value}</li>`;

    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    fullNameField.value = "";
    emailField.value = "";
    phoneNumberField.value = "";
    addressField.value = "";
    postCodeField.value = "";

    editBtn.addEventListener('click', editEvent);
    continueBtn.addEventListener('click', continueEvent);

    function editEvent(event) {
      const liElArr = Array.from(infoPreview.children);
      fullNameField.value = liElArr[0].textContent.split(':')[1];
      emailField.value = liElArr[1].textContent.split(':')[1];
      phoneNumberField.value = liElArr[2].textContent.split(':')[1];
      addressField.value = liElArr[3].textContent.split(':')[1];
      postCodeField.value = liElArr[4].textContent.split(':')[1];

      submitBtn.disabled = false;
      editBtn.disabled = true;
      continueBtn.disabled = true;

      infoPreview.innerHTML = '';
    }

    function continueEvent() {
      divBlock.innerHTML = '<h3>Thank you for your reservation!</h3>';
    }
  }
}
