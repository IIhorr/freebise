export default class Forms {
  constructor(forms) {
    this.forms = document.querySelectorAll(forms);
    this.inputs = document.querySelectorAll('input');
    this.message = {
      loading: 'Loading ...',
      error: 'Something went wrong',
      success: 'Thank you! We will contact you shortly',
    };
    this.path = 'resources/question.php';
  }

  clearInputs() {
    this.inputs.forEach((input) => {
      input.value = '';
    });
  }

  postData(url, data) {
    let res = fetch(url, {
      method: 'POST',
      body: data,
    });

    return res;
  }

  init() {
    this.forms.forEach((item) => {
      item.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusMessage = document.createElement('div');
        statusMessage.classList.add('form__message');
        item.appendChild(statusMessage);
        statusMessage.textContent = this.message.loading;

        const formData = new FormData(item);

        this.postData(this.path, formData)
          .then((res) => {
            res.text();
            statusMessage.textContent = this.message.success;
          })
          .catch((er) => {
            statusMessage.textContent = this.message.error;
          })
          .finally(() => {
            this.clearInputs();
            setTimeout(() => {
              statusMessage.remove();
            }, 5000);
          });
      });
    });
  }
}
