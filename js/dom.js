const bestPrice = document.getElementById('best-price');
const fixedMemory = document.getElementById('fix-memory');
const extraMemory = document.getElementById('extra-memory');
const fixedStorage = document.getElementById('fixed-storage');
const halfTbStorage = document.getElementById('half-tb-storage');
const fullTbStorage = document.getElementById('full-tb-storage');
const freeDelivery = document.getElementById('free-delivery');
const premiumDelivery = document.getElementById('premium-delivery');


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

console.log(ubdateTotalPrice())

fixedMemory.addEventListener('click', function() {
    extraMemoryCharge.innerText = 0;
    ubdateTotalPrice ();
});

extraMemory.addEventListener('click', function () {
    extraMemoryCharge.innerText = 180;
    ubdateTotalPrice ();
});

fixedStorage.addEventListener('click', function () {
    extraStorageCharge.innerText = 0;
    ubdateTotalPrice ();
});

halfTbStorage.addEventListener('click', function () {
    extraStorageCharge.innerText = 100;
    ubdateTotalPrice ();
});

fullTbStorage.addEventListener('click', function () {
    extraStorageCharge.innerText = 180;
    ubdateTotalPrice ();
});

freeDelivery.addEventListener('click', function () {
    extraDeliveryCharge.innerText = 0;
    ubdateTotalPrice ();
});

premiumDelivery.addEventListener('click', function () {
    extraDeliveryCharge.innerText = 20;
    ubdateTotalPrice ();
})