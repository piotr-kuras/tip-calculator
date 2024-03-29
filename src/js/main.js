const resultTip = document.querySelector('.card__result--tip');
const resultTotal = document.querySelector('.card__result--total');
const inputBill = document.querySelector('#bill');
const inputPeople = document.querySelector('#people');
const inputCustom = document.querySelector('.card__input--tip');
const btnReset = document.querySelector('.btn__reset');
const btnTip = document.querySelectorAll('.btn__tip');
const errorBill = document.querySelector('.card__error--bill');
const errorPeople = document.querySelector('.card__error--people');

let tip = 0
const count = () => {
	if (inputBill.value > 0 && inputPeople.value > 0) {
		let bill = inputBill.value;
    let group = inputPeople.value
		let resultTipPerPerson = ((tip*bill)/group).toFixed(2);
    let resultBillPerPerson = (+resultTipPerPerson + +(bill/group)).toFixed(2);
    resultTip.textContent=`$${resultTipPerPerson}`;
    resultTotal.textContent=`$${(resultBillPerPerson)}`;
		btnReset.disabled = false;
		errorBill.classList.add('hide');
		errorPeople.classList.add('hide');
	} else {
		inputBill.value === ''
			? errorBill.classList.remove('hide')
			: errorBill.classList.add('hide');

		inputPeople.value === ''
			? errorPeople.classList.remove('hide')
			: errorPeople.classList.add('hide');
      reset(0);
	}
};
function reset (fullReset)  {
	if (fullReset) {
		inputBill.value = '';
		inputCustom.value = '';
		inputPeople.value = '';
		tip = 0
	}
	resultTip.textContent = '$0.00';
	resultTotal.textContent = '$0.00';
	btnReset.disabled = true
};
const check = (value) => {
	if(!(value.value >= 0)) 
	{
		value.value='';
	}
}
btnTip.forEach((item) => {
	item.addEventListener('click', () => {
		tip = item.value
		count();
	});
});
btnReset.addEventListener('click', () => reset(1));
inputCustom.addEventListener('input', () => {
	check(inputCustom)
	if(inputCustom.value>=0)
	{
		tip=(inputCustom.value / 100)
		count();
	}
	
});
inputBill.addEventListener('input', () => {
	check(inputBill)
	count()

});
inputPeople.addEventListener('input', () => {
	check(inputPeople)
	count()
})
