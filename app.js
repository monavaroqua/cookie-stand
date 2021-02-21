'use strict';
const seatle = {
  head : 'sales',
name: seatle,
hours :['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm',.]
miniNumber :23,
maxNumber :65,
average :6.3,
cookiePerHour :[],
totalCookiseSale : 0,
randomCookie : function (min,max,avg){
    return Math.ceil((math.random() *(max - min +1) + min)*avg);
}


render : function (){
    for let t = 0;t< this.hours.length;t++){
        this.cookiePerhour[t] = this.randomCookie (this.miniNumber,this.maxNumber,this.average);
    }

    const parentElement = document.getElementById('sales');
    const h1Element = document.createElement('h1');
    parentElement.appendChild(h1Element);
    h1Element.textContent= this.head;


const h2Element =document.createElement('h2');
parentElement.appendChild(h2Element);
h2Element.textcontent = this.name;

const ulElement = document.createElement('ul');
parentElement.appendChild(ulElement);


    for (let i=0 ;i< this.hours.length;i++){
        const liElement = document.createElement ('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `${this.hours[i]} : ${this.cookiePerHour[i]} cookies `;
      }
      const liTotalElement = document.createElement ('li');
      ulElement.appendChild(liTotalElement);
      liTotalElement.textContent = `total : ${this.totalCookiesSales} cookies`;
    }
  };
  Seattle.render();
}





