// !Extra Function For getting the total player list length Start...
// Declaring Max player Amount...


// TODO Negative value Error handle..
let maxPlayer = 0;
function alertFunction(alert1, alert2) {

    if (alert1 == true) {
        alert("Max player!!!");
        counter = 5;
    }

    else if (alert2 == true) {

        alert("Provide Valid Number!!!");
    }

    else {
        alert("Select Player!!!");
    }



}
// !Extra Function For getting the total player list length End...









// !Player Select Section Start...
// Getting Players by btn Class name...
const playerButtons = document.getElementsByClassName('playerBtn');
// player Counter Variable.
let counter = 0;

for (playerBtn of playerButtons) {


    {
        playerBtn.addEventListener('click', (Event) => {





            // storing parent Node
            const parentNode = Event.target.parentNode.parentNode;


            // getting Child Nodes of parent Node Name tag.
            const playerNameTag = parentNode.children[1];


            // Storing Player Name Text.
            const playerNameTagStringValue = playerNameTag.innerText;



            // Player Counter 
            counter += 1;




            //! Getting five player Section ol node and adding data into Node Start...

            //* player Alert System Condition Start...
            if (counter < 6) {


                // ol node...
                const selectedPlayerList = document.getElementById('selected-player-list');



                // *creating an element li and span for child node...
                let span = document.createElement('span');
                let li = document.createElement('li');



                // giving class attributes...
                span.setAttribute("class", "col-span-1 text-xl");
                li.setAttribute("class", "col-span-6 text-xl");



                span.innerText = counter + '.';
                li.innerText = playerNameTagStringValue;




                // Selected Five string span tag...
                let selectedFive = document.getElementById('selected-five');
                selectedFive.innerHTML = counter;





                // *Adding player into ol list...

                selectedPlayerList.appendChild(span);
                selectedPlayerList.appendChild(li);


                //! Getting five player Section ol node and adding data into Node End...



                //* Disable the button Start...
                Event.target.disabled = true;
                //* Disable the button End...



                // *Changing The background Color After One click...
                Event.target.style.backgroundColor = 'lightsteelblue';
                // *Changing The background Color After One Start...


            }

            else {
                alertFunction(true, 0);

            }

            //* player Alert System Condition End...







        })

    }






}
// !Player Select Section End...

















//! Budget Section Start

// getting Value from player input
const perPlayerInputValue = document.getElementById('per-player-input-field');





// Getting player Expenses String value by id...
const playerExpensesValue = document.getElementById('player-expense');




// * getting the Total Number of player...





// Calculate Button.
const calculateBtnPerPlayer = document.getElementById('calculate-btn-for-player');





// Calculate Event Button adding Event handler.
calculateBtnPerPlayer.addEventListener('click', (Event) => {











    // Getting per Player Value...
    const perPlayerValue = perPlayerInputValue.value;


    //* Setup player expenses Value into player Expenses. with NuN Condition
    if (counter > 0) {
        if (isNaN(perPlayerValue) || perPlayerValue < 0) {

            alertFunction(0, true);

            perPlayerInputValue.value = '';



        }

        else {

            //* Total Player Calling Function and storing the Total Player Value...


            // Calling Max player Start
            let maxPlayers = counter;
            const playerExpense = parseFloat(perPlayerValue) * parseFloat(maxPlayers);




            // Empty String NaN Handling!!!
            if (isNaN(playerExpense)) {
                alertFunction(0, true);

                perPlayerInputValue.value = '';
                // * Max player Multiplying Error Handled...
                maxPlayers = 0;
                playerExpensesValue.innerText = '00';

            }

            else {


                playerExpensesValue.innerText = playerExpense;


            }
        }
    }

    else {

        alertFunction();


    }






})

//! Budget Section End





// !Manager And Course Section Start
// Getting manager and coach value input field.
const managerInputField = document.getElementById('manager-input-field');
const coachInputField = document.getElementById('coach-input-field');


// Getting The Total string element.
const totalAmount = document.getElementById('total-value');



// Getting Total Calculate Button.
const totalCalculateBtn = document.getElementById('total-calculate-btn');



totalCalculateBtn.addEventListener('click', () => {






    // Storing Manager input filed Value...
    const managerInputFieldValue = managerInputField.value;





    // Storing coach input field Value...
    const coachInputFieldValue = coachInputField.value;

    if (coachInputFieldValue >= 0 && managerInputFieldValue >= 0) {



        // NaN Error Handling...
        if (isNaN(coachInputFieldValue) || isNaN(managerInputFieldValue)) {
            alertFunction(0, true);


        }


        else {
            // Sum Manager and Coach value and storing
            const playerManagerCoachSum = parseFloat(managerInputFieldValue) + parseFloat(coachInputFieldValue) + parseFloat(playerExpensesValue.innerText);


            // *Handling NaN Empty String.
            if (isNaN(playerManagerCoachSum)) {
                alertFunction(0, true);
                totalAmount.innerText = '00';

            }

            else {
                //Storing The total Value into total Amount String Section.
                totalAmount.innerText = playerManagerCoachSum;
            }





        }

    }

    else {
        alertFunction(0, true);

        if (isNaN(coachInputFieldValue)) {

            coachInputField.value = '';

        }
        else {
            managerInputField.value = '';
        }


    }










})
// !Manager And Course Section End