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

/**
 * Сервис формирования даты платежа
 * 
 * @param {obj Date} shippingDate // дата отгрузки
 * @param {int} deferPeriod // период отсрочки
 * 
 * @return {int} // Дата платежа в секундах или милисекундах 
 */
function getDateForPay (shippingDate, deferPeriod = 1) {
  return (shippingDate.setDate(shippingDate.getDate() + deferPeriod));
}

/**
 * Логирует поставщика, сумму платежа и таду платежа
 * 
 * @param {obj custom} producer // поставщик 
 * @param {int} shippingSum // сумма отгрузки
 * @param {obj Date} shippingDate // дата отгрузки
 * 
 * @return {null}
 */
function deferPay (producer, shippingSum = 0, shippingDate = new Date()) {
  
  deferedPayments[0]={};
  deferedPayments[0].name = producer.name;
  deferedPayments[0].amount = shippingSum;
  deferedPayments[0].paymentDate = new Date (
      getDateForPay(shippingDate, producer.deferPeriod)
    ).toString();
}

// формируем объект поставщика
const producer = {
  name: 'Рязанский телепортостроительный завод',
  deferPeriod: 10 // срок отсрочки
};

// вызываем
deferPay(producer, 7200, new Date(2030, 4 - 1, 10));

// печатаем результат
console.log(deferedPayments.length);
console.log(deferedPayments[0].name);
console.log(deferedPayments[0].amount);
console.log(deferedPayments[0].paymentDate);

// Задача 3

function loadCurrencyJSON() {
  return '{"AUD":44.95,"AZN":33.73,"GBP":73.42,"AMD":0.12,"BYN":30.96,"BGN":32.01,"BRL":18.8,"HUF":0.2,"DKK":8.42,"USD":58.85,"EUR":62.68,"INR":0.88,"KZT":0.18,"CAD":44.74,"KGS":0.85,"CNY":8.55,"MDL":2.94,"NOK":7.02,"PLN":14.55,"RON":13.92,"ZZZ":79.91,"SGD":41.36,"TJS":7.43,"TRY":15.97,"TMT":16.84,"UZS":0.02,"UAH":2.16,"CZK":2.32,"SEK":6.6,"CHF":58.69,"ZAR":4.4,"KRW":0.05,"JPY":0.52}';
}

function convertCurrency (amount = 1000, from = 'EUR', to = 'USD') {
  let currency;
  let result;

  if (amount) {
    try {
      currency = JSON.parse(loadCurrencyJSON());

      result = (currency[from] / currency[to]) * amount;
      
      console.log(result.toFixed(2));
    } catch(e) {
      console.error(`кажется JSON не корректный : ${e.name}, ${e.message}`);
    }
    // console.log(currency);
  }
}

// "USD":58.85
// "JPY":0.52
convertCurrency(200, 'USD', 'JPY');
