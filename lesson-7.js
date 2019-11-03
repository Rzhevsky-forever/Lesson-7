'use strict';

// Задача 1
let positions = [
    {
      title: 'Телепорт бытовой VZHIH-101',
      producer: {
        name: 'Рязанский телепортостроительный завод',
        deferPeriod: 10,
        lot: 3
      },
      price: 10000
    },
    {
      title: 'Ховерборд Mattel 2016',
      producer: {
        name: 'Волжский Ховерборд Завод',
        deferPeriod: 24,
        lot: 14
      },
      price: 9200
    },
    {
      title: 'Меч световой FORCE (синий луч)',
      producer: {
        name: 'Тульский оружейный комбинат',
        deferPeriod: 5,
        lot: 1
      },
      price: 57000
    }
  ];

function lotCalculator(positions, amount = 1) {
    // Заказ у поставщика
    let supplierOrder = {
        lots : 0, 
        total : 0
    };

    // Требуемое кол-во / заказыв. кол-во
    supplierOrder.lots = Math.ceil(amount / positions.producer.lot); 
    // Кол-вл партий * цена партии
    supplierOrder.total = (supplierOrder.lots * positions.producer.lot) * positions.price;
    
    console.log(`${positions.title} ${amount} штук: заказать партий ${supplierOrder.lots}, стоимость ${supplierOrder.total} Q`);
}

lotCalculator(positions[0], 29);

// Задача 2

const deferedPayments = [];

// Сервис формирования даты платежа
function getDateForPay (shippingDate, deferPeriod) {
  return (shippingDate + ((24*60*60) * deferPeriod)).toString();
}

// поставщик, суммаОтргрузки, датаОтгрузки
function deferPay (producer, shippingSum = 0, shippingDate = new Date() + (24*60*60) ) {
  
  deferedPayments[0]=[];
  deferedPayments[0].push(producer);
  deferedPayments[0].push(shippingSum);
  deferedPayments[0].push(getDateForPay(shippingDate, producer.deferPeriod));
}

const producer = {
  name: 'Рязанский телепортостроительный завод',
  deferPeriod: 10 // срок отсрочки
};

// вызываем
deferPay(producer);

console.log(deferedPayments.length);
console.log(deferedPayments[0][0].name);
console.log(deferedPayments[0][1]);
console.log(deferedPayments[0][2]);

// console.log(deferedPayments[0].name);
// console.log(deferedPayments[0].amount);
// console.log(deferedPayments[0].paymentDate);


// console.log(deferedPayments.length); // 1
// console.log(deferedPayments[0], deferedPayments[1], deferedPayments[2]); // 1

