async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');

    const response = await fetch('http://localhost:9001/counter');

    const result = await response.json();
    
    let countValue = result.value;

    async function increment() {
        const response = await fetch('http://localhost:9001/counter', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            value: countValue + 1,
          }),
        });
        let responseObject = await response.json();
        console.log(responseObject);
        countValue = responseObject.value;
        countContainer.textContent = countValue;
      }
      
    async function decrement(){
        const response = await fetch('http://localhost:9001/counter', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              value: countValue - 1,
            }),
          });
          let responseObject = await response.json();
          console.log(responseObject);
          countValue = responseObject.value;
        countContainer.textContent = countValue;
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}
main()