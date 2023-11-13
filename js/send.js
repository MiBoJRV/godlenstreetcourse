// document.addEventListener("DOMContentLoaded", () => {
//
//   const form = document.querySelector('form.dr-form');
//
//   function getFormElements(form) {
//
//     const firstNameField = form.querySelector('.form__input.first-name');
//     const lastNameField = form.querySelector('.form__input.last-name');
//     const emailField = form.querySelector('.form__input.email');
//     const phoneField = form.querySelector('.form__input.phone');
//
//     return {
//       firstNameField,
//       lastNameField,
//       emailField,
//       phoneField
//     };
//
//   }
//
//   function sendLeadData(event, form, formElements) {
//
//     event.preventDefault();
//     const firstName = formElements.firstNameField.value;
//     const lastName = formElements.lastNameField.value;
//     const email = formElements.emailField.value;
//     const phone = formElements.phoneField.value;
//     const countryCode = '420';
//     const fullNumber = `+${countryCode}${phone}`;
//
//     const data = {
//       ApiKey: 'TnpBNU4xODFNVEJmTnpBNU4xOD0=',
//       ApiPassword: 'JT87alNF6n',
//       CampaignID: '10774',
//       FirstName: firstName,
//       LastName: lastName,
//       Email: email,
//       PhoneNumber: fullNumber,
//       Page : 'godlenstreetcourse',
//     };
//
//     const apiUrl = 'https://tracker.pablo.partners/repost.php?act=register';
//
//     function encodeFormData(data) {
//       return Object.keys(data)
//           .map(function (key) {
//             return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
//           })
//           .join('&')
//     }
//
//     fetch(`${apiUrl}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       body: encodeFormData(data)
//     })
//         .then(response => {
//           if (response.ok) {
//             console.log('Lead data sent successfully!');
//             return response.json(); // Получаем JSON из ответа
//           } else {
//             throw new Error('Failed to send lead data');
//           }
//         })
//         .then(responseJson => {
//           if (responseJson.ret_code !== '404') {
//             const redirectUrl = responseJson.url;
//             window.location.href = redirectUrl; // Выполняем редирект
//           } else {
//             console.log('Невозможно выполнить редирект.');
//           }
//         })
//         .catch(error => {
//           console.error('An error occurred:', error.message);
//         });
//   }
//
//
//
//
//     const formElements = getFormElements(form);
//
//     form.addEventListener('submit', (event) => {
//       document.querySelector(".loader-sub").style.display = "flex";
//       console.log('click');
//       event.preventDefault();
//
//
//         sendLeadData(event, form, formElements);
//
//         // --------------
//         const urlParams = new URLSearchParams(window.location.search);
//         const access_token = urlParams.get('access_token');
//
//         const version = "fb";
//         const subDomainIndex = 1;
//         const createTime = Date.now() / 1000;
//
//         let fbp, fbc;
//
//         if (!urlParams.get('fbp')) {
//           const userHash = Math.floor(Math.random() * (Math.pow(2, 32) - 1));
//           fbp = `${version}.${subDomainIndex}.${createTime}.${userHash}`;
//         } else {
//           fbp = urlParams.get('fbp');
//         }
//
//         if (!urlParams.get('fbc')) {
//           const fbclid = urlParams.get('fbclid');
//           if (fbclid) {
//             fbc = `${version}.${subDomainIndex}.${createTime}.${fbclid}`;
//           } else {
//             fbc = "fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890";
//           }
//         } else {
//           fbc = urlParams.get('fbc');
//         }
//
//         // --------------
//
//     });
//
// });
//


document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector('form.dr-form');

  function getFormElements(form) {
    const firstNameField = form.querySelector('.form__input.first-name');
    const lastNameField = form.querySelector('.form__input.last-name');
    const emailField = form.querySelector('.form__input.email');
    const phoneField = form.querySelector('.form__input.phone');

    return {
      firstNameField,
      lastNameField,
      emailField,
      phoneField
    };
  }

  function sendLeadData(event, form, formElements) {
    event.preventDefault();
    const firstName = formElements.firstNameField.value;
    const lastName = formElements.lastNameField.value;
    const email = formElements.emailField.value;
    const phone = formElements.phoneField.value;
    const countryCode = '420';
    const fullNumber = `+${countryCode}${phone}`;

    const data = {
      ApiKey: 'TnpBNU4xODFNVEJmTnpBNU4xOD0=',
      ApiPassword: 'JT87alNF6n',
      CampaignID: '10774',
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      PhoneNumber: fullNumber,
      Page: 'godlenstreetcourse',
    };

    const apiUrl = 'https://tracker.pablo.partners/repost.php?act=register';

    function encodeFormData(data) {
      return Object.keys(data)
          .map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
          })
          .join('&')
    }

    fetch(`${apiUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: encodeFormData(data)
    })
        .then(response => {
          if (response.ok) {
            console.log('Lead data sent successfully!');
            return response.json();
          } else {
            throw new Error('Failed to send lead data');
          }
        })
        .then(responseJson => {
          if (responseJson.ret_code !== '404') {
            const redirectUrl = responseJson.url;
            window.location.href = redirectUrl;
          } else {
            console.log('Невозможно выполнить редирект.');
          }
        })
        .catch(error => {
          console.error('An error occurred:', error.message);
        });
  }

  const formElements = getFormElements(form);

  form.addEventListener('submit', (event) => {
    document.querySelector(".loader-sub").style.display = "flex";
    const countdownElement = document.getElementById('countdown');
    let seconds = 3;

    const updateCountdown = () => {
      countdownElement.textContent = seconds;
      if (seconds === 0) {
        document.getElementById('loader-sub').style.display = 'none';
      } else {
        seconds--;
        setTimeout(updateCountdown, 1000);
      }
    };

    setTimeout(updateCountdown, 1000);
    console.log('click');
    event.preventDefault();

    sendLeadData(event, form, formElements);

    // Решта коду для обробки кліку кнопки "Відправити форму"
    const urlParams = new URLSearchParams(window.location.search);
    const access_token = urlParams.get('access_token');

    const version = "fb";
    const subDomainIndex = 1;
    const createTime = Date.now() / 1000;

    let fbp, fbc;

    if (!urlParams.get('fbp')) {
      const userHash = Math.floor(Math.random() * (Math.pow(2, 32) - 1));
      fbp = `${version}.${subDomainIndex}.${createTime}.${userHash}`;
    } else {
      fbp = urlParams.get('fbp');
    }

    if (!urlParams.get('fbc')) {
      const fbclid = urlParams.get('fbclid');
      if (fbclid) {
        fbc = `${version}.${subDomainIndex}.${createTime}.${fbclid}`;
      } else {
        fbc = "fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890";
      }
    } else {
      fbc = urlParams.get('fbc');
    }
  });

});
