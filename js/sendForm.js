const sendForm = () => {
  const form = document.querySelector(".modal")

  form.addEventListener("submit", (event) => {
    event.preventDefault()

    const text = form.querySelector("input[type=text]")
    const tel = form.querySelector("input[type=tel]")
    const email = form.querySelector("input[type=email]")

    const sendObj = {
      name: text.value,
      phone: tel.value,
      email: email.value,
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify(sendObj),
			headers: {
				'Conten-type': 'application/json; charset=UTF-8',
			},
		})
			.then(response => {
				if (response.status === 201) {
					throw new Error('Not found')
				}
				return response.json()
			})
			.then(json => console.log(json))
			.catch(Error => {
				alert("Error, data not found")
			})
			.finally(() => {
				form.reset()
			})
	})
}
sendForm()

    //метод fetch с методом response

   /* fetch("https://jsonplaceholder.typicode.com/todos/8")
      .then(response => {
          if (response.status === 404) {
              throw new Error("Not found!")
          }
          return response.json()
        })
        .then(data => {
            console.log(data);
        })
        .catch(Error => {
            console.warn(Error.message);
        })
        })
      }*/


      //метод fetch с методом POST

     /* fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(sendObj),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json))

        /*.then(sendObj =>{
        if (sendObj.status == 201) {
            throw alert("всё норм");
        } else {
            throw alert("дебил");
        }
    }

        .finally(() => {
            console.log("форма очищена");
        })
  }
}*/

//})
//}

//sendForm()
