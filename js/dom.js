const bestPrice = document.getElementById('best-price');
const fixedMemory = document.getElementById('fix-memory');
const extraMemory = document.getElementById('extra-memory');
const fixedStorage = document.getElementById('fixed-storage');
const halfTbStorage = document.getElementById('half-tb-storage');
const fullTbStorage = document.getElementById('full-tb-storage');
const freeDelivery = document.getElementById('free-delivery');
const premiumDelivery = document.getElementById('premium-delivery');
const pomoInput = document.getElementById('pomo-input');
const pomoBtn = document.getElementById('pomo-btn');
const totalAmount = document.getElementById('total-amount');


const extraMemoryCharge = document.getElementById('extra-memor-charge');
const extraStorageCharge = document.getElementById('extra-storage-charge');
const extraDeliveryCharge = document.getElementById('delivery-charge');
const totalCharge = document.getElementById('total-charge');

function ubdateTotalPrice () {
    const bestPc = Number(bestPrice.innerText);
    const memoryCharge = Number(extraMemoryCharge.innerText);
    const storageCharge = Number(extraStorageCharge.innerText);
    const deliveryCharge = Number(extraDeliveryCharge.innerText);

    const totalPrice = bestPc + memoryCharge + storageCharge + deliveryCharge;
    totalCharge.innerText = totalPrice;
    return totalCharge;
}

function ubdateTotalAmount () {
    const total = ubdateTotalPrice ().innerText;
    const totalTaka = Number(total);
    totalAmount.innerText = totalTaka;
}

fixedMemory.addEventListener('click', function() {
    extraMemoryCharge.innerText = 0;
    ubdateTotalPrice ();
    ubdateTotalAmount ()
    
});

extraMemory.addEventListener('click', function () {
    extraMemoryCharge.innerText = 180;
    ubdateTotalPrice ();
    ubdateTotalAmount ()
});

fixedStorage.addEventListener('click', function () {
    extraStorageCharge.innerText = 0;
    ubdateTotalPrice ();
    ubdateTotalAmount ()
});

halfTbStorage.addEventListener('click', function () {
    extraStorageCharge.innerText = 100;
    ubdateTotalPrice ();
    ubdateTotalAmount ();
});

fullTbStorage.addEventListener('click', function () {
    extraStorageCharge.innerText = 180;
    ubdateTotalPrice ();
    ubdateTotalAmount ();
});

freeDelivery.addEventListener('click', function () {
    extraDeliveryCharge.innerText = 0;
    ubdateTotalPrice ();
    ubdateTotalAmount ();
});

premiumDelivery.addEventListener('click', function () {
    extraDeliveryCharge.innerText = 20;
    ubdateTotalPrice ();
    ubdateTotalAmount ();
})

// totalAmount.innerText = ubdateTotalAmount ();

// pomo code
pomoInput.addEventListener('keyup', function (event) {
    if(event.target.value == "stevkaku") {
        pomoBtn.removeAttribute('disabled', false)
    }
    else{
        pomoBtn.setAttribute('disabled', true)
    }
});
pomoBtn.addEventListener('click', function () {
    const totalPrice = Number(totalAmount.innerText);
    const offer = totalPrice / 20;
    const offerPrice = totalPrice - offer;
    totalAmount.innerText = offerPrice;
})