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
    const fullName = fullNameField.value;
    const email = emailField.value;
    const phone = phoneNumberField.value;
    const address = addressField.value;
    const postCode = postCodeField.value;

    if (fullName == "" || email == "") {
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
      submitBtn.disabled = false;
      editBtn.disabled = true;
      continueBtn.disabled = true;

      fullNameField.value = fullName;
      emailField.value = email;
      phoneNumberField.value = phone;
      addressField.value = address;
      postCodeField.value = postCode;
      let liElementsArr = Array.from(event.target.parentElement.parentElement.querySelectorAll('li'));
      //let liElementsArr = document.querySelectorAll('li');
      liElementsArr.forEach(li => li.remove());

    }

    function continueEvent() {
      while (divBlock.firstChild) {
        divBlock.firstChild.remove();
      }
      divBlock.innerHTML = '<h3>Thank you for your reservation!</h3>';
    }
  }
}
