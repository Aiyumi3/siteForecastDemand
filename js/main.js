const  btn1 = document.getElementById("btn1");
const  input1 = document.getElementById("1");
const  input2 = document.getElementById("2");
const  input3 = document.getElementById("3");
const  input4 = document.getElementById("4");
const  input5 = document.getElementById("5");
const  input6 = document.getElementById("6");
const  input7 = document.getElementById("7");
const  input8 = document.getElementById("8");
const  input9 = document.getElementById("9");
const  input10 = document.getElementById("10");
const  input11 = document.getElementById("11");
const  input12 = document.getElementById("12");
const  td1 = document.getElementById("td1");
const  td2 = document.getElementById("td2");
const  td3 = document.getElementById("td3");
const  td4 = document.getElementById("td4");
const  td5 = document.getElementById("td5");
const  td6 = document.getElementById("td6");
const  td7 = document.getElementById("td7");
const  td8 = document.getElementById("td8");
const  td9 = document.getElementById("td9");
const  td10 = document.getElementById("td10");
const  td11 = document.getElementById("td11");
const  td12 = document.getElementById("td12");

const price = document.getElementById("ціна");
const priceLess = document.getElementById("акційна");
const priceBought = document.getElementById("закупочна");
const price2 = document.getElementById("ціна2");
const priceTd = document.getElementById("td_ціна");
const priceLessTd = document.getElementById("td_2");
const priceBoughtTd = document.getElementById("td_3");
const price2Td = document.getElementById("td_1");

btn1.addEventListener("click", display);
function display() {
    const inputVal1 = input1.value;
    const inputVal2 = input2.value;
    const inputVal3 = input3.value;
    const inputVal4 = input4.value;
    const inputVal5 = input5.value;
    const inputVal6 = input6.value;
    const inputVal7 = input7.value;
    const inputVal8 = input8.value;
    const inputVal9 = input9.value;
    const inputVal10 = input10.value;
    const inputVal11 = input11.value;
    const inputVal12 = input12.value;

    const priceVal = price.value;
    const priceLessVal = priceLess.value;
    const priceBoughtVal = priceBought.value;
    const price2Val = price2.value;

    td1.innerHTML = inputVal1;
    td2.innerHTML = inputVal2;
    td3.innerHTML = inputVal3;
    td4.innerHTML = inputVal4;
    td5.innerHTML = inputVal5;
    td6.innerHTML = inputVal6;
    td7.innerHTML = inputVal7;
    td8.innerHTML = inputVal8;
    td9.innerHTML = inputVal9;
    td10.innerHTML = inputVal10;
    td11.innerHTML = inputVal11;
    td12.innerHTML = inputVal12;

    input1.remove();
    input2.remove();
    input3.remove();
    input4.remove();
    input5.remove();
    input6.remove();
    input7.remove();
    input8.remove();
    input9.remove();
    input10.remove();
    input11.remove();
    input12.remove();
    btn1.remove();

    priceTd.innerHTML = priceVal;
    priceLessTd.innerHTML = priceLessVal;
    priceBoughtTd.innerHTML = priceBoughtVal;
    price2Td.innerHTML = price2Val;

    price.remove();
    priceLess.remove();
    priceBought.remove();
    price2.remove();

    const sum3n_1 = Number(inputVal1) + Number(inputVal2) + Number(inputVal3);
    const sum3n_2 = Number(inputVal2) + Number(inputVal3) + Number(inputVal4);
    const sum3n_3 = Number(inputVal3) + Number(inputVal4) + Number(inputVal5);
    const sum3n_4 = Number(inputVal4) + Number(inputVal5) + Number(inputVal6);
    const sum3n_5 = Number(inputVal5) + Number(inputVal6) + Number(inputVal7);
    const sum3n_6 = Number(inputVal6) + Number(inputVal7) + Number(inputVal8);
    const sum3n_7 = Number(inputVal7) + Number(inputVal8) + Number(inputVal9);
    const sum3n_8 = Number(inputVal8) + Number(inputVal9) + Number(inputVal10);
    const sum3n_9 = Number(inputVal9) + Number(inputVal10) + Number(inputVal11);
    const sum3n_10 = Number(inputVal10) + Number(inputVal11) + Number(inputVal12);

    const average3n_1 = Math.round(sum3n_1/3);
    const average3n_2 = Math.round(sum3n_2/3);
    const average3n_3 = Math.round(sum3n_3/3);
    const average3n_4 = Math.round(sum3n_4/3);
    const average3n_5 = Math.round(sum3n_5/3);
    const average3n_6 = Math.round(sum3n_6/3);
    const average3n_7 = Math.round(sum3n_7/3);
    const average3n_8 = Math.round(sum3n_8/3);
    const average3n_9 = Math.round(sum3n_9/3);
    const average3n_10 = Math.round(sum3n_10/3);

    const sum4n_1 = Number(inputVal1) + Number(inputVal2) + Number(inputVal3) + Number(inputVal4);
    const sum4n_2 = Number(inputVal2) + Number(inputVal3) + Number(inputVal4) + Number(inputVal5);
    const sum4n_3 = Number(inputVal3) + Number(inputVal4) + Number(inputVal5) + Number(inputVal6);
    const sum4n_4 = Number(inputVal4) + Number(inputVal5) + Number(inputVal6) + Number(inputVal7);
    const sum4n_5 = Number(inputVal5) + Number(inputVal6) + Number(inputVal7) + Number(inputVal8);
    const sum4n_6 = Number(inputVal6) + Number(inputVal7) + Number(inputVal8) + Number(inputVal9);
    const sum4n_7 = Number(inputVal7) + Number(inputVal8) + Number(inputVal9) + Number(inputVal10);
    const sum4n_8 = Number(inputVal8) + Number(inputVal9) + Number(inputVal10) + Number(inputVal11);
    const sum4n_9 = Number(inputVal9) + Number(inputVal10) + Number(inputVal11) + Number(inputVal12);

    const average4n_1 = Math.round(sum4n_1/4);
    const average4n_2 = Math.round(sum4n_2/4);
    const average4n_3 = Math.round(sum4n_3/4);
    const average4n_4 = Math.round(sum4n_4/4);
    const average4n_5 = Math.round(sum4n_5/4);
    const average4n_6 = Math.round(sum4n_6/4);
    const average4n_7 = Math.round(sum4n_7/4);
    const average4n_8 = Math.round(sum4n_8/4);
    const average4n_9 = Math.round(sum4n_9/4);

    const averCenter4n_1 = Math.round((average4n_1 + average4n_2)/2);
    const averCenter4n_2 = Math.round((average4n_2 + average4n_3)/2);
    const averCenter4n_3 = Math.round((average4n_3 + average4n_4)/2);
    const averCenter4n_4 = Math.round((average4n_4 + average4n_5)/2);
    const averCenter4n_5 = Math.round((average4n_5 + average4n_6)/2);
    const averCenter4n_6 = Math.round((average4n_6 + average4n_7)/2);
    const averCenter4n_7 = Math.round((average4n_7 + average4n_8)/2);
    const averCenter4n_8 = Math.round((average4n_8 + average4n_9)/2);

    const t2 = `
    <div id="t2" style="background-position: inherit; position: relative">
        <p> Виявлення основної тенденції часового ряду та визначення прогнозних значень </p>
        <br/>
        <p>Ковзне середнє. Механічне вирівнювання часового ряду</p>
        <table>
            <thead><tr>
                <th>місяць</th> <th>об'єм продажу</th> <th>ковзні суми 3х значень</th>
                <th>ковзні середні 3х значень</th> <th>ковзні суми 4х значень</th> <th>ковзні середні 4х значень (нецентричні)</th>
                <th>ковзні середні 4х значень (центричні)</th>
            </tr></thead>
            <tbody><tr class="tb_tr1">
                <td class="td1">1</td> <td class="td2">${inputVal1}</td> <td class="td3"></td>
                <td class="td4"></td> <td class="td5"></td> <td class="td6"></td>
                <td class="td7"></td>
            </tr>
            <tr class="tb_tr2">
                <td class="td1">2</td> <td class="td2">${inputVal2}</td> <td class="td3">${sum3n_1}</td>
                <td class="td4">${average3n_1}</td> <td class="td5"></td> <td class="td6"></td>
                <td class="td7"></td>
            </tr>
            <tr class="tb_tr3">
                <td class="td1">3</td> <td class="td2">${inputVal3}</td> <td class="td3">${sum3n_2}</td>
                <td class="td4">${average3n_2}</td> <td class="td5">${sum4n_1}</td> <td class="td6">${average4n_1}</td>
                <td class="td7"></td>
            </tr>
            <tr class="tb_tr4">
                <td class="td1">4</td> <td class="td2">${inputVal4}</td> <td class="td3">${sum3n_3}</td>
                <td class="td4">${average3n_3}</td> <td class="td5">${sum4n_2}</td> <td class="td6">${average4n_2}</td>
                <td class="td7">${averCenter4n_1}</td>
            </tr>
            <tr class="tb_tr5">
                <td class="td1">5</td> <td class="td2">${inputVal5}</td> <td class="td3">${sum3n_4}</td>
                <td class="td4">${average3n_4}</td> <td class="td5">${sum4n_3}</td> <td class="td6">${average4n_3}</td>
                <td class="td7">${averCenter4n_2}</td>
            </tr>
            <tr class="tb_tr6">
                <td class="td1">6</td> <td class="td2">${inputVal6}</td> <td class="td3">${sum3n_5}</td>
                <td class="td4">${average3n_5}</td> <td class="td5">${sum4n_4}</td> <td class="td6">${average4n_4}</td>
                <td class="td7">${averCenter4n_3}</td>
            </tr>
            <tr class="tb_tr7">
                <td class="td1">7</td> <td class="td2">${inputVal7}</td> <td class="td3">${sum3n_6}</td>
                <td class="td4">${average3n_6}</td> <td class="td5">${sum4n_5}</td> <td class="td6">${average4n_5}</td>
                <td class="td7">${averCenter4n_4}</td>
            </tr>
            <tr class="tb_tr8">
                <td class="td1">8</td> <td class="td2">${inputVal8}</td> <td class="td3">${sum3n_7}</td>
                <td class="td4">${average3n_7}</td> <td class="td5">${sum4n_6}</td> <td class="td6">${average4n_6}</td>
                <td class="td7">${averCenter4n_5}</td>
            </tr>
            <tr class="tb_tr9">
                <td class="td1">9</td> <td class="td2">${inputVal9}</td> <td class="td3">${sum3n_8}</td>
                <td class="td4">${average3n_8}</td> <td class="td5">${sum4n_7}</td> <td class="td6">${average4n_7}</td>
                <td class="td7">${averCenter4n_6}</td>
            </tr>
            <tr class="tb_tr10">
                <td class="td1">10</td> <td class="td2">${inputVal10}</td> <td class="td3">${sum3n_9}</td>
                <td class="td4">${average3n_9}</td> <td class="td5">${sum4n_8}</td> <td class="td6">${average4n_8}</td>
                <td class="td7">${averCenter4n_7}</td>
            </tr>
            <tr class="tb_tr11">
                <td class="td1">11</td> <td class="td2">${inputVal11}</td> <td class="td3">${sum3n_10}</td>
                <td class="td4">${average3n_10}</td> <td class="td5">${sum4n_9}</td> <td class="td6">${average4n_9}</td>
                <td class="td7">${averCenter4n_8}</td>
            </tr>
            <tr class="tb_tr12">
                <td class="td1">12</td> <td class="td2">${inputVal12}</td> <td class="td3"></td>
                <td class="td4"></td> <td class="td5"></td> <td class="td6"></td>
                <td class="td7"></td>
            </tr>
            </tbody>
        </table>
        <br/><br/>
        <canvas id="Chart1" style="width:100%;"></canvas>
        <br/><br/>
    </div>
    
    `;
    const contT2 = document.getElementById('t1');
    contT2.insertAdjacentHTML('beforeend', t2);

    const xVal1 = [1,2,3,4,5,6,7,8,9,10,11,12];
    new Chart("Chart1", {
        type: "line",
        data: {
            labels: xVal1,
            datasets: [{
                label:['об\'єм продажу'],
                data: [inputVal1,inputVal2,inputVal3,inputVal4,inputVal5,inputVal6,inputVal7,inputVal8,inputVal9,inputVal10,
                    inputVal11,inputVal12],
                backgroundColor: "coral",
                borderColor: "rgba(68,3,50,0.4)",
                pointBorderColor: "#fff",
                lineTension: 0,
                fill: false
            }, {
                label: ['ковзні середні 4х значень (нецентричні)'],
                data: [,,average4n_1,average4n_2,average4n_3,average4n_4,average4n_5,average4n_6,average4n_7,average4n_8,
                    average4n_9,],
                backgroundColor: "fuchsia",
                borderColor: "rgba(128,3,171,0.3)",
                pointBorderColor: "#fff",
                lineTension: 0,
                fill: false
            }, {
                label: ['ковзні середні 4х значень (центричні)'],
                data: [,,,averCenter4n_1,averCenter4n_2,averCenter4n_3,averCenter4n_4,averCenter4n_5,averCenter4n_6,
                    averCenter4n_7,averCenter4n_8,],
                backgroundColor: "purple",
                borderColor: "rgba(246,59,123,0.3)",
                pointBorderColor: "#fff",
                lineTension: 0,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'механічне вирівнювання часового ряду методом ковзного середнього',
                fontColor: 'white'
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: "white",
                        beginAtZero: true
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: "white"
                    }
                }]
            },
            legend: {
                labels: {
                    fontColor: 'white'
                }
            }
        }
    });

    const sum12n = Number(inputVal1) + Number(inputVal2) + Number(inputVal3) + Number(inputVal4) + Number(inputVal5) + Number(inputVal6)
     + Number(inputVal7) + Number(inputVal8) + Number(inputVal9) + Number(inputVal10) + Number(inputVal11) + Number(inputVal12);
    const averageAll = Math.round(sum12n/12);

    const sum12multTime = Number(inputVal1) + Number(inputVal2)*2 + Number(inputVal3)*3 + Number(inputVal4)*4 + Number(inputVal5)*5
        + Number(inputVal6)*6 + Number(inputVal7)*7 + Number(inputVal8)*8 + Number(inputVal9)*9 + Number(inputVal10)*10
        + Number(inputVal11)*11 + Number(inputVal12)*12;

    const coefB = ((sum12multTime - 6.5*sum12n)/143).toFixed(2);
    const coefA = ((sum12n - 78*coefB)/12).toFixed(2);

    const trendT1 = Math.round(Number(coefA) + Number(coefB*1));
    const trendT2 = Math.round(Number(coefA) + Number(coefB*2));
    const trendT3 = Math.round(Number(coefA) + Number(coefB*3));
    const trendT4 = Math.round(Number(coefA) + Number(coefB*4));
    const trendT5 = Math.round(Number(coefA) + Number(coefB*5));
    const trendT6 = Math.round(Number(coefA) + Number(coefB*6));
    const trendT7 = Math.round(Number(coefA) + Number(coefB*7));
    const trendT8 = Math.round(Number(coefA) + Number(coefB*8));
    const trendT9 = Math.round(Number(coefA) + Number(coefB*9));
    const trendT10 = Math.round(Number(coefA) + Number(coefB*10));
    const trendT11 = Math.round(Number(coefA) + Number(coefB*11));
    const trendT12 = Math.round(Number(coefA) + Number(coefB*12));

    const trendT13 = Math.round(Number(coefA) + Number(coefB*13));
    const trendT14 = Math.round(Number(coefA) + Number(coefB*14));
    const trendT15 = Math.round(Number(coefA) + Number(coefB*15));

    const idSeason1 = (Number(inputVal1)/averageAll).toFixed(2);
    const idSeason2 = (Number(inputVal2)/averageAll).toFixed(2);
    const idSeason3 = (Number(inputVal3)/averageAll).toFixed(2);
    const idSeason4 = (Number(inputVal4)/averageAll).toFixed(2);
    const idSeason5 = (Number(inputVal5)/averageAll).toFixed(2);
    const idSeason6 = (Number(inputVal6)/averageAll).toFixed(2);
    const idSeason7 = (Number(inputVal7)/averageAll).toFixed(2);
    const idSeason8 = (Number(inputVal8)/averageAll).toFixed(2);
    const idSeason9 = (Number(inputVal9)/averageAll).toFixed(2);
    const idSeason10 = (Number(inputVal10)/averageAll).toFixed(2);
    const idSeason11 = (Number(inputVal11)/averageAll).toFixed(2);
    const idSeason12 = (Number(inputVal12)/averageAll).toFixed(2);

    const nextNum1 = Math.round(trendT13*idSeason1);
    const nextNum2 = Math.round(trendT14*idSeason2);
    const nextNum3 = Math.round(trendT15*idSeason3);

    const otklon = (Math.sqrt((Math.pow((Number(inputVal1)-averageAll), 2)+Math.pow((Number(inputVal2)-averageAll),2)+Math.pow((Number(inputVal3)-averageAll),2)
        +Math.pow((Number(inputVal4)-averageAll),2)+Math.pow((Number(inputVal5)-averageAll),2)+Math.pow((Number(inputVal6)-averageAll),2)+Math.pow((Number(inputVal7)-averageAll),2)
        +Math.pow((Number(inputVal8)-averageAll),2)+Math.pow((Number(inputVal9)-averageAll),2)+Math.pow((Number(inputVal10)-averageAll),2)+
        Math.pow((Number(inputVal11)-averageAll),2)+Math.pow((Number(inputVal12)-averageAll),2))/12)).toFixed(2);

    const coefV = (otklon/averageAll).toFixed(2);

    const t3 = `
    <div id="t3" style="background-position: inherit; position: relative">
        <br/>
        <p>Аналітичне вирівнювання часового ряду по прямій. Лінія тренду</p>
        
        <table><thead><tr>
                <th>коефіцієнт a</th> <th>коефіцієнт b</th> <th>середнє квадратичне відхилення σt</th> 
                <th>коефіцієнт варіації</th> <th>середнє продажу за рік</th> 
            </tr></thead>
            <tbody><tr class="tb_tr1">
                <td class="td1">${coefA}</td> <td class="td2">${coefB}</td> <td class="td3">${otklon}</td>
                <td class="td4">${coefV}</td>  <td class="td5">${averageAll}</td> 
            </tr></tbody>
        </table>
        
        <table>
            <thead><tr>
                <th>місяць t</th> <th>об'єм продажу y</th> <th>значеня тренду Т</th> <th>значення тренду на наступні 3 місяці</th> 
                <th>періоди для прогнозу</th> <th>прогноз на наступні 3 місяці з врахуванням сезонності</th>
            </tr></thead>
            <tbody><tr class="tb_tr1">
                <td class="td1">1</td> <td class="td2">${inputVal1}</td> <td class="td3">${trendT1}</td> 
                <td class="td4">${trendT13}</td> <td class="td5">13</td> <td class="td6">${nextNum1}</td>
            </tr>
            <tr class="tb_tr2">
                <td class="td1">2</td> <td class="td2">${inputVal2}</td> <td class="td3">${trendT2}</td> 
                <td class="td4">${trendT14}</td> <td class="td5">14</td> <td class="td6">${nextNum2}</td>
            </tr>
            <tr class="tb_tr3">
                <td class="td1">3</td> <td class="td2">${inputVal3}</td> <td class="td3">${trendT3}</td> 
                <td class="td4">${trendT15}</td> <td class="td5">15</td> <td class="td6">${nextNum3}</td>
            </tr>
            <tr class="tb_tr4">
                <td class="td1">4</td> <td class="td2">${inputVal4}</td> <td class="td3">${trendT4}</td> 
                <td class="td4"></td> <td class="td5"></td> <td class="td6"></td>
            </tr>
            <tr class="tb_tr5">
                <td class="td1">5</td> <td class="td2">${inputVal5}</td> <td class="td3">${trendT5}</td> 
                <td class="td4"></td> <td class="td5"></td> <td class="td6"></td>
            </tr>
            <tr class="tb_tr6">
                <td class="td1">6</td> <td class="td2">${inputVal6}</td> </td> <td class="td3">${trendT6}</td> 
                <td class="td4"></td> <td class="td5"></td> <td class="td6"></td>
            </tr>
            <tr class="tb_tr7">
                <td class="td1">7</td> <td class="td2">${inputVal7}</td> </td> <td class="td3">${trendT7}</td> 
                <td class="td4"></td> <td class="td5"></td> <td class="td6"></td>
            </tr>
            <tr class="tb_tr8">
                <td class="td1">8</td> <td class="td2">${inputVal8}</td> </td> <td class="td3">${trendT8}</td> 
                <td class="td4"></td> <td class="td5"></td> <td class="td6"></td>
            </tr>
            <tr class="tb_tr9">
                <td class="td1">9</td> <td class="td2">${inputVal9}</td> <td class="td3">${trendT9}</td> 
                <td class="td4"></td> <td class="td5"></td> <td class="td6"></td>
            </tr>
            <tr class="tb_tr10">
                <td class="td1">10</td> <td class="td2">${inputVal10}</td> <td class="td3">${trendT10}</td> 
                <td class="td4"></td> <td class="td5"></td> <td class="td6"></td>
            </tr>
            <tr class="tb_tr11">
                <td class="td1">11</td> <td class="td2">${inputVal11}</td> <td class="td3">${trendT11}</td> 
                <td class="td4"></td> <td class="td5"></td> <td class="td6"></td>
            </tr>
            <tr class="tb_tr12">
                <td class="td1">12</td> <td class="td2">${inputVal12}</td> <td class="td3">${trendT12}</td> 
                <td class="td4"></td> <td class="td5"></td> <td class="td6"></td>
            </tr>
            </tbody>
        </table>
        <br/><br/>
        <canvas id="Chart2" style="width:100%;"></canvas>
        <br/><br/>
        
        <p>Індекси сезонності попиту</p>
        <table><thead><tr>
                <th>місяць t</th> <th>об'єм продажу y</th> <th>індекс сезонності I %</th>
            </tr></thead>
            <tbody><tr class="tb_tr1">
                <td class="td1">1</td> <td class="td2">${inputVal1}</td> <td class="td3">${idSeason1*100} %</td>  
            </tr>
            <tr class="tb_tr2">
                <td class="td1">2</td> <td class="td2">${inputVal2}</td> <td class="td3">${idSeason2*100} %</td>  
            </tr>
            <tr class="tb_tr3">
                <td class="td1">3</td> <td class="td2">${inputVal3}</td> <td class="td3">${idSeason3*100} %</td>  
            </tr>
            <tr class="tb_tr4">
                <td class="td1">4</td> <td class="td2">${inputVal4}</td> <td class="td3">${idSeason4*100} %</td>  
            </tr>
            <tr class="tb_tr5">
                <td class="td1">5</td> <td class="td2">${inputVal5}</td> <td class="td3">${idSeason5*100} %</td>  
            </tr>
            <tr class="tb_tr6">
                <td class="td1">6</td> <td class="td2">${inputVal6}</td> <td class="td3">${idSeason6*100} %</td>  
            </tr>
            <tr class="tb_tr7">
                <td class="td1">7</td> <td class="td2">${inputVal7}</td> <td class="td3">${idSeason7*100} %</td>  
            </tr>
            <tr class="tb_tr8">
                <td class="td1">8</td> <td class="td2">${inputVal8}</td> <td class="td3">${Math.round(idSeason8*100)} %</td>  
            </tr>
            <tr class="tb_tr9">
                <td class="td1">9</td> <td class="td2">${inputVal9}</td> <td class="td3">${idSeason9*100} %</td>  
            </tr>
            <tr class="tb_tr10">
                <td class="td1">10</td> <td class="td2">${inputVal10}</td> <td class="td3">${idSeason10*100} %</td>  
            </tr>
            <tr class="tb_tr11">
                <td class="td1">11</td> <td class="td2">${inputVal11}</td> <td class="td3">${idSeason11*100} %</td>  
            </tr>
            <tr class="tb_tr12">
                <td class="td1">12</td> <td class="td2">${inputVal12}</td> <td class="td3">${Math.round(idSeason12*100)} %</td>  
            </tr>
            </tbody>
        </table>
        <br/><br/>
        <canvas id="Chart3" style="width:100%;"></canvas>
        <br/><br/>
    </div>
    
    `;
    const contT3 = document.getElementById('t2');
    contT3.insertAdjacentHTML('beforeend', t3);

    const xVal2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    new Chart("Chart2", {
        type: "line",
        data: {
            labels: xVal2,
            datasets: [{
                label:['об\'єм продажу (y) з прогнозом'],
                data: [inputVal1,inputVal2,inputVal3,inputVal4,inputVal5,inputVal6,inputVal7,inputVal8,inputVal9,inputVal10,
                    inputVal11,inputVal12,nextNum1,nextNum2,nextNum3],
                backgroundColor: "coral",
                borderColor: "rgba(242,250,8,0.46)",
                pointBorderColor: "#fff",
                lineTension: 0,
                fill: false
            }, {
                label: ['значеня тренду (Т) з прогнозом'],
                data: [trendT1,trendT2,trendT3,trendT4,trendT5,trendT6,trendT7,trendT8,trendT9,trendT10,trendT11,trendT12,
                    trendT13,trendT14,trendT15],
                backgroundColor: "fuchsia",
                borderColor: "rgba(246,70,149,0.62)",
                pointBorderColor: "#fff",
                lineTension: 0,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'аналітичне вирівнювання часового ряду по прямій та екстраполяція',
                fontColor: 'white'
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: "white",
                        beginAtZero: true
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: "white"
                    }
                }]
            },
            legend: {
                labels: {
                    fontColor: 'white'
                }
            }
        }
    });
    new Chart("Chart3", {
        type: "line",
        data: {
            labels: xVal1,
            datasets: [{
                label:['індекси'],
                data: [idSeason1,idSeason2,idSeason3,idSeason4,idSeason5,idSeason6,idSeason7,idSeason8,idSeason9,idSeason10,
                    idSeason11,idSeason12],
                backgroundColor: "coral",
                borderColor: "rgba(231,229,114,0.5)",
                pointBorderColor: "#fff",
                lineTension: 0,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'індекси сезонності попиту',
                fontColor: 'white'
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: "white",
                        beginAtZero: true
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: "white"
                    }
                }]
            },
            legend: {
                labels: {
                    fontColor: 'white'
                }
            }
        }
    });

    const yCos1 = Number(inputVal1);
    const yCos2 = Number(inputVal2)*0.866;
    const yCos3 = Number(inputVal3)*0.5;
    const yCos4 = 0;
    const yCos5 = Number(inputVal5)*(-0.5);
    const yCos6 = Number(inputVal6)*(-0.866);
    const yCos7 = Number(inputVal7)*(-1);
    const yCos8 = Number(inputVal8)*(-0.866);
    const yCos9 = Number(inputVal9)*(-0.5);
    const yCos10 = 0;
    const yCos11 = Number(inputVal11)*0.5;
    const yCos12 = Number(inputVal12)*0.866;

    const ySin1 = 0;
    const ySin2 = Number(inputVal2)*0.5;
    const ySin3 = Number(inputVal3)*0.866;
    const ySin4 = Number(inputVal4);
    const ySin5 = Number(inputVal5)*0.866;
    const ySin6 = Number(inputVal6)*0.5;
    const ySin7 = 0;
    const ySin8 = Number(inputVal8)*(-0.5);
    const ySin9 = Number(inputVal9)*(-0.866);
    const ySin10 = Number(inputVal10)*(-1);
    const ySin11 = Number(inputVal11)*(-0.866);
    const ySin12 = Number(inputVal12)*(-0.5);

    const sumyCos = yCos1 + yCos2 + yCos3 + yCos4 + yCos5 + yCos6 + yCos7 + yCos8 + yCos9 + yCos10 + yCos11 + yCos12;
    const sumySin = ySin1 + ySin2 + ySin3 + ySin4 + ySin5 + ySin6 + ySin7 + ySin8 + ySin9 + ySin10 + ySin11 + ySin12;

    const a1 = (2*sumyCos)/12;
    const b1 = (2*sumySin)/12

    const ȳt1 = Math.round(averageAll + a1);
    const ȳt2 = Math.round(averageAll + a1*0.866 + b1*0.5);
    const ȳt3 = Math.round(averageAll + a1*0.5 + b1*0.866);
    const ȳt4 = Math.round(averageAll + b1);
    const ȳt5 = Math.round(averageAll + a1*(-0.5) + b1*0.866);
    const ȳt6 = Math.round(averageAll + a1*(-0.866) + b1*0.5);
    const ȳt7 = Math.round(averageAll + a1*(-1));
    const ȳt8 = Math.round(averageAll + a1*(-0.866) + b1*(-0.5));
    const ȳt9 = Math.round(averageAll + a1*(-0.5) + b1*(-0.866));
    const ȳt10 = Math.round(averageAll + b1*(-1));
    const ȳt11 = Math.round(averageAll + a1*0.5 + b1*(-0.866));
    const ȳt12 = Math.round(averageAll + a1*0.866 + b1*(-0.5));

    const y2Cos1 = Number(inputVal1);
    const y2Cos2 = Number(inputVal2)*0.5;
    const y2Cos3 = Number(inputVal3)*(-0.5);
    const y2Cos4 = Number(inputVal4)*(-1);
    const y2Cos5 = Number(inputVal5)*(-0.5);
    const y2Cos6 = Number(inputVal6)*0.5;
    const y2Cos7 = Number(inputVal7);
    const y2Cos8 = Number(inputVal8)*0.5;
    const y2Cos9 = Number(inputVal9)*(-0.5);
    const y2Cos10 = Number(inputVal10)*(-1);
    const y2Cos11 = Number(inputVal11)*(-0.5);
    const y2Cos12 = Number(inputVal12)*0.5;

    const y2Sin1 = 0;
    const y2Sin2 = Number(inputVal2)*0.866;
    const y2Sin3 = Number(inputVal3)*0.866;
    const y2Sin4 = 0;
    const y2Sin5 = Number(inputVal5)*(-0.866);
    const y2Sin6 = Number(inputVal6)*(-0.866);
    const y2Sin7 = 0;
    const y2Sin8 = Number(inputVal8)*0.866;
    const y2Sin9 = Number(inputVal9)*0.866;
    const y2Sin10 = 0;
    const y2Sin11 = Number(inputVal11)*(-0.866);
    const y2Sin12 = Number(inputVal12)*(-0.866);

    const sumy2Cos = y2Cos1 + y2Cos2 + y2Cos3 + y2Cos4 + y2Cos5 + y2Cos6 + y2Cos7 + y2Cos8 + y2Cos9 + y2Cos10 + y2Cos11 + y2Cos12;
    const sumy2Sin = y2Sin1 + y2Sin2 + y2Sin3 + y2Sin4 + y2Sin5 + y2Sin6 + y2Sin7 + y2Sin8 + y2Sin9 + y2Sin10 + y2Sin11 + y2Sin12;

    const a2 = (2*sumy2Cos)/12;
    const b2 = (2*sumy2Sin)/12

    const ȳt_1 = Math.round(averageAll + a1 + a2);
    const ȳt_2 = Math.round(averageAll + a1*0.866 + b1*0.5 + a2*0.5 + b2*0.866);
    const ȳt_3 = Math.round(averageAll + a1*0.5 + b1*0.866 + a2*(-0.5) + b2*0.866);
    const ȳt_4 = Math.round(averageAll + b1 + a2*(-1));
    const ȳt_5 = Math.round(averageAll + a1*(-0.5) + b1*0.866 + a2*(-0.5) + b2*(-0.866));
    const ȳt_6 = Math.round(averageAll + a1*(-0.866) + b1*0.5 + a2*0.5 + b2*(-0.866));
    const ȳt_7 = Math.round(averageAll + a1*(-1) + a2);
    const ȳt_8 = Math.round(averageAll + a1*(-0.866) + b1*(-0.5) + a2*0.5 + b2*0.866);
    const ȳt_9 = Math.round(averageAll + a1*(-0.5) + b1*(-0.866) + a2*(-0.5) + b2*0.866);
    const ȳt_10 = Math.round(averageAll + b1*(-1) + a2*(-1));
    const ȳt_11 = Math.round(averageAll + a1*0.5 + b1*(-0.866) + a2*(-0.5) + b2*(-0.866));
    const ȳt_12 = Math.round(averageAll + a1*0.866 + b1*(-0.5) + a2*0.5 + b2*(-0.866));

    const g1 = Math.pow((Number(inputVal1)-ȳt1),2);
    const g2 = Math.pow((Number(inputVal2)-ȳt2),2);
    const g3 = Math.pow((Number(inputVal3)-ȳt3),2);
    const g4 = Math.pow((Number(inputVal4)-ȳt4),2);
    const g5 = Math.pow((Number(inputVal5)-ȳt5),2);
    const g6 = Math.pow((Number(inputVal6)-ȳt6),2);
    const g7 = Math.pow((Number(inputVal7)-ȳt7),2);
    const g8 = Math.pow((Number(inputVal8)-ȳt8),2);
    const g9 = Math.pow((Number(inputVal9)-ȳt9),2);
    const g10 = Math.pow((Number(inputVal10)-ȳt10),2);
    const g11 = Math.pow((Number(inputVal11)-ȳt11),2);
    const g12 = Math.pow((Number(inputVal12)-ȳt12),2);

    const g_1 = Math.pow((Number(inputVal1)-ȳt_1),2);
    const g_2 = Math.pow((Number(inputVal2)-ȳt_2),2);
    const g_3 = Math.pow((Number(inputVal3)-ȳt_3),2);
    const g_4 = Math.pow((Number(inputVal4)-ȳt_4),2);
    const g_5 = Math.pow((Number(inputVal5)-ȳt_5),2);
    const g_6 = Math.pow((Number(inputVal6)-ȳt_6),2);
    const g_7 = Math.pow((Number(inputVal7)-ȳt_7),2);
    const g_8 = Math.pow((Number(inputVal8)-ȳt_8),2);
    const g_9 = Math.pow((Number(inputVal9)-ȳt_9),2);
    const g_10 = Math.pow((Number(inputVal10)-ȳt_10),2);
    const g_11 = Math.pow((Number(inputVal11)-ȳt_11),2);
    const g_12 = Math.pow((Number(inputVal12)-ȳt_12),2);

    const σG1 = ((g1 + g2 + g3 + g4 + g5 + g6 + g7 + g8 + g9 + g10 + g11 + g12)/12).toFixed(2);
    const σG2 = ((g_1 + g_2 + g_3 + g_4 + g_5 + g_6 + g_7 + g_8 + g_9 + g_10 + g_11 + g_12)/12).toFixed(2);

    const t4 = `
    <div id="t4" style="background-position: inherit; position: relative">
        <br/>
        <p>Аналітична форма сезонної хвилі. Вирівнювання часового ряду по ряду Фурьє</p>
        <br/>
        <p>по 1-й гармоніці</p>
        <table>
            <thead><tr>
                <th>t</th> <th>об'єм продажу y</th> <th>y*cos(t)</th> <th>y*sin(t)</th> <th>ȳt, объем </th> 
            </tr></thead>
            <tbody><tr class="tb_tr1">
                <td class="td1">0</td> <td class="td2">${inputVal1}</td> <td class="td3">${yCos1}</td> 
                <td class="td4">${ySin1}</td> <td class="td5">${ȳt1}</td>
            </tr>
            <tr class="tb_tr2">
                <td class="td1">30</td> <td class="td2">${inputVal2}</td> <td class="td3">${yCos2}</td> 
                <td class="td4">${ySin2}</td> <td class="td5">${ȳt2}</td> 
            </tr>
            <tr class="tb_tr3">
                <td class="td1">60</td> <td class="td2">${inputVal3}</td> <td class="td3">${yCos3}</td> 
                <td class="td4">${ySin3}</td> <td class="td5">${ȳt3}</td> 
            </tr>
            <tr class="tb_tr4">
                <td class="td1">90</td> <td class="td2">${inputVal4}</td> <td class="td3">${yCos4}</td> 
                <td class="td4">${ySin4}</td> <td class="td5">${ȳt4}</td>
            </tr>
            <tr class="tb_tr5">
                <td class="td1">120</td> <td class="td2">${inputVal5}</td> <td class="td3">${yCos5}</td> 
                <td class="td4">${ySin5}</td> <td class="td5">${ȳt5}</td>
            </tr>
            <tr class="tb_tr6">
                <td class="td1">150</td> <td class="td2">${inputVal6}</td> </td> <td class="td3">${yCos6}</td> 
                <td class="td4">${ySin6}</td> <td class="td5">${ȳt6}</td>
            </tr>
            <tr class="tb_tr7">
                <td class="td1">180</td> <td class="td2">${inputVal7}</td> </td> <td class="td3">${yCos7}</td> 
                <td class="td4">${ySin7}</td> <td class="td5">${ȳt7}</td>
            </tr>
            <tr class="tb_tr8">
                <td class="td1">210</td> <td class="td2">${inputVal8}</td> </td> <td class="td3">${yCos8}</td> 
                <td class="td4">${ySin8}</td> <td class="td5">${ȳt8}</td>
            </tr>
            <tr class="tb_tr9">
                <td class="td1">240</td> <td class="td2">${inputVal9}</td> <td class="td3">${yCos9}</td> 
                <td class="td4">${ySin9}</td> <td class="td5">${ȳt9}</td>
            </tr>
            <tr class="tb_tr10">
                <td class="td1">270</td> <td class="td2">${inputVal10}</td> <td class="td3">${yCos10}</td> 
                <td class="td4">${ySin10}</td> <td class="td5">${ȳt10}</td> 
            </tr>
            <tr class="tb_tr11">
                <td class="td1">300</td> <td class="td2">${inputVal11}</td> <td class="td3">${yCos11}</td> 
                <td class="td4">${ySin11}</td> <td class="td5">${ȳt11}</td> 
            </tr>
            <tr class="tb_tr12">
                <td class="td1">320</td> <td class="td2">${inputVal12}</td> <td class="td3">${yCos12}</td> 
                <td class="td4">${ySin12}</td> <td class="td5">${ȳt12}</td> 
            </tr>
            </tbody>
        </table>
        <br/><br/>
        
        <p>по 2-й гармоніці</p>
        <table>
            <thead><tr>
                <th>t</th> <th>об'єм продажу y</th> <th>y*cos(2t)</th> <th>y*sin(2t)</th> <th>ȳt, объем </th> 
            </tr></thead>
            <tbody><tr class="tb_tr1">
                <td class="td1">0</td> <td class="td2">${inputVal1}</td> <td class="td3">${y2Cos1}</td> 
                <td class="td4">${y2Sin1}</td> <td class="td5">${ȳt_1}</td>
            </tr>
            <tr class="tb_tr2">
                <td class="td1">30</td> <td class="td2">${inputVal2}</td> <td class="td3">${y2Cos2}</td> 
                <td class="td4">${y2Sin2}</td> <td class="td5">${ȳt_2}</td> 
            </tr>
            <tr class="tb_tr3">
                <td class="td1">60</td> <td class="td2">${inputVal3}</td> <td class="td3">${y2Cos3}</td> 
                <td class="td4">${y2Sin3}</td> <td class="td5">${ȳt_3}</td> 
            </tr>
            <tr class="tb_tr4">
                <td class="td1">90</td> <td class="td2">${inputVal4}</td> <td class="td3">${y2Cos4}</td> 
                <td class="td4">${y2Sin4}</td> <td class="td5">${ȳt_4}</td>
            </tr>
            <tr class="tb_tr5">
                <td class="td1">120</td> <td class="td2">${inputVal5}</td> <td class="td3">${y2Cos5}</td> 
                <td class="td4">${y2Sin5}</td> <td class="td5">${ȳt_5}</td>
            </tr>
            <tr class="tb_tr6">
                <td class="td1">150</td> <td class="td2">${inputVal6}</td> </td> <td class="td3">${y2Cos6}</td> 
                <td class="td4">${y2Sin6}</td> <td class="td5">${ȳt_6}</td>
            </tr>
            <tr class="tb_tr7">
                <td class="td1">180</td> <td class="td2">${inputVal7}</td> </td> <td class="td3">${y2Cos7}</td> 
                <td class="td4">${y2Sin7}</td> <td class="td5">${ȳt_7}</td>
            </tr>
            <tr class="tb_tr8">
                <td class="td1">210</td> <td class="td2">${inputVal8}</td> </td> <td class="td3">${y2Cos8}</td> 
                <td class="td4">${y2Sin8}</td> <td class="td5">${ȳt_8}</td>
            </tr>
            <tr class="tb_tr9">
                <td class="td1">240</td> <td class="td2">${inputVal9}</td> <td class="td3">${y2Cos9}</td> 
                <td class="td4">${y2Sin9}</td> <td class="td5">${ȳt_9}</td>
            </tr>
            <tr class="tb_tr10">
                <td class="td1">270</td> <td class="td2">${inputVal10}</td> <td class="td3">${y2Cos10}</td> 
                <td class="td4">${y2Sin10}</td> <td class="td5">${ȳt_10}</td> 
            </tr>
            <tr class="tb_tr11">
                <td class="td1">300</td> <td class="td2">${inputVal11}</td> <td class="td3">${y2Cos11}</td> 
                <td class="td4">${y2Sin11}</td> <td class="td5">${ȳt_11}</td> 
            </tr>
            <tr class="tb_tr12">
                <td class="td1">320</td> <td class="td2">${inputVal12}</td> <td class="td3">${y2Cos12}</td> 
                <td class="td4">${y2Sin12}</td> <td class="td5">${ȳt_12}</td> 
            </tr>
            </tbody>
        </table>
        <br/><br/>
        <canvas id="Chart4" style="width:100%;"></canvas>
        <br/><br/>
        
        <p>Вичислення залишкових дисперсій</p>
        <table><thead><tr>
                <th>t</th> <th>об'єм продажу y</th> <th>1-а гармоніка</th> <th>2-а гармоніка</th> <th>залишкові дисперсії σ² </th>
            </tr></thead>
            <tbody><tr class="tb_tr1">
                <td class="td1">1</td> <td class="td2">${inputVal1}</td> <td class="td3">${g1}</td> 
                <td class="td4">${g_1}</td> <td class="td5">${σG1} (1-а гармоніка)</td>
            </tr>
            <tr class="tb_tr2">
                <td class="td1">2</td> <td class="td2">${inputVal2}</td> <td class="td3">${g2}</td> 
                <td class="td4">${g_2}</td> <td class="td5">${σG2} (2-а гармоніка)</td> 
            </tr>
            <tr class="tb_tr3">
                <td class="td1">3</td> <td class="td2">${inputVal3}</td> <td class="td3">${g3}</td> 
                <td class="td4">${g_3}</td> <td class="td5"></td> 
            </tr>
            <tr class="tb_tr4">
                <td class="td1">4</td> <td class="td2">${inputVal4}</td> <td class="td3">${g4}</td> 
                <td class="td4">${g_4}</td> <td class="td5"></td>
            </tr>
            <tr class="tb_tr5">
                <td class="td1">5</td> <td class="td2">${inputVal5}</td> <td class="td3">${g5}</td> 
                <td class="td4">${g_5}</td> <td class="td5"></td>
            </tr>
            <tr class="tb_tr6">
                <td class="td1">6</td> <td class="td2">${inputVal6}</td> </td> <td class="td3">${g6}</td> 
                <td class="td4">${g_6}</td> <td class="td5"></td>
            </tr>
            <tr class="tb_tr7">
                <td class="td1">7</td> <td class="td2">${inputVal7}</td> </td> <td class="td3">${g7}</td> 
                <td class="td4">${g_7}</td> <td class="td5"></td>
            </tr>
            <tr class="tb_tr8">
                <td class="td1">8</td> <td class="td2">${inputVal8}</td> </td> <td class="td3">${g8}</td> 
                <td class="td4">${g_8}</td> <td class="td5"></td>
            </tr>
            <tr class="tb_tr9">
                <td class="td1">9</td> <td class="td2">${inputVal9}</td> <td class="td3">${g9}</td> 
                <td class="td4">${g_9}</td> <td class="td5"></td>
            </tr>
            <tr class="tb_tr10">
                <td class="td1">10</td> <td class="td2">${inputVal10}</td> <td class="td3">${g10}</td> 
                <td class="td4">${g_10}</td> <td class="td5"></td> 
            </tr>
            <tr class="tb_tr11">
                <td class="td1">11</td> <td class="td2">${inputVal11}</td> <td class="td3">${g11}</td> 
                <td class="td4">${g_11}</td> <td class="td5"></td> 
            </tr>
            <tr class="tb_tr12">
                <td class="td1">12</td> <td class="td2">${inputVal12}</td> <td class="td3">${g12}</td> 
                <td class="td4">${g_12}</td> <td class="td5"></td> 
            </tr>
            </tbody>
        </table>
        <br/><br/>
        <canvas id="Chart5" style="width:100%;"></canvas>
        <br/><br/>
    </div>
    
    `;
    const contT4 = document.getElementById('t3');
    contT4.insertAdjacentHTML('beforeend', t4);

    new Chart("Chart4", {
        type: "line",
        data: {
            labels: xVal1,
            datasets: [{
                label:['по 1-й гармоніці ȳt'],
                data: [ȳt1,ȳt2,ȳt3,ȳt4,ȳt5,ȳt6,ȳt7,ȳt8,ȳt9,ȳt10,ȳt11,ȳt12],
                backgroundColor: "coral",
                borderColor: "rgba(176,111,245,0.51)",
                pointBorderColor: "#fff",
                lineTension: 0,
                fill: false
            }, {
                label: ['по 2-й гармоніці ȳt'],
                data: [ȳt_1,ȳt_2,ȳt_3,ȳt_4,ȳt_5,ȳt_6,ȳt_7,ȳt_8,ȳt_9,ȳt_10,ȳt_11,ȳt_12],
                backgroundColor: "fuchsia",
                borderColor: "rgba(238,53,202,0.65)",
                pointBorderColor: "#fff",
                lineTension: 0,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'вирівнювання часового ряду по ряду Фурьє',
                fontColor: 'white'
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: "white",
                        beginAtZero: true
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: "white"
                    }
                }]
            },
            legend: {
                labels: {
                    fontColor: 'white'
                }
            }
        }
    });

    new Chart("Chart5", {
        type: "line",
        data: {
            labels: xVal1,
            datasets: [{
                label:['1-а гармоніка'],
                data: [g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12],
                backgroundColor: "coral",
                borderColor: "rgba(63,16,63,0.45)",
                pointBorderColor: "#fff",
                lineTension: 0,
                fill: false
            }, {
                label: ['2-а гармоніка'],
                data: [g_1,g_2,g_3,g_4,g_5,g_6,g_7,g_8,g_9,g_10,g_11,g_12],
                backgroundColor: "fuchsia",
                borderColor: "rgba(150,6,70,0.43)",
                pointBorderColor: "#fff",
                lineTension: 0,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: '1-а гармоніка і 2-а гармоніка',
                fontColor: 'white'
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: "white",
                        beginAtZero: true
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: "white"
                    }
                }]
            },
            legend: {
                labels: {
                    fontColor: 'white'
                }
            }
        }
    });

    //use random demand function
    function getRndIntDemand(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    const v1 = nextNum1;
    const v2 = nextNum2;
    const v3 = nextNum3;

    const arrRand = [];
    const p = [0.1,0.2,0.3,0.2,0.1,0.1];

    let income = 0;
    let income2 = 0;
    let income3 = 0;
    for(let j = 0; j < 6; j++){
        arrRand.push(getRndIntDemand(10000,63000));

        let arrnSold = [0, v1-arrRand[j]];
        let notSold = Math.max(...arrnSold);
        let arrSd = [0, arrRand[j]-v1];
        let notSatisfDem = Math.max(...arrSd);
        if (v1 >= arrRand[j]) {
            income += (priceVal*arrRand[j] + priceLessVal*notSold - priceBoughtVal*v1)*p[j];
        }else{
            income += (priceVal*arrRand[j] - price2Val*notSatisfDem - priceBoughtVal*v1)*p[j];
        }

        arrnSold = [0, v2-arrRand[j]];
        notSold = Math.max(...arrnSold);
        arrSd = [0, arrRand[j]-v2];
        notSatisfDem = Math.max(...arrSd);
        if (v2 >= arrRand[j]) {
            income2 += (priceVal*arrRand[j] + priceLessVal*notSold - priceBoughtVal*v2)*p[j];
        }else{
            income2 += (priceVal*arrRand[j] - price2Val*notSatisfDem - priceBoughtVal*v2)*p[j];
        }

        arrnSold = [0, v3-arrRand[j]];
        notSold = Math.max(...arrnSold);
        arrSd = [0, arrRand[j]-v3];
        notSatisfDem = Math.max(...arrSd);
        if (v3 >= arrRand[j]) {
            income3 += (priceVal*arrRand[j] + priceLessVal*notSold - priceBoughtVal*v3)*p[j];
        }else{
            income3 += (priceVal*arrRand[j] - price2Val*notSatisfDem - priceBoughtVal*v3)*p[j];
        }
    }
    const expectIncome1 = (income).toFixed(2);
    const expectIncome2 = (income2).toFixed(2);
    const expectIncome3 = (income3).toFixed(2);


    const arrRnd = [];
    const arrRnd2 = [];
    const arrRnd3 = [];
    let numI1 = 0;
    let numI2 = 0;
    let numI3 = 0;
    for(let i = 0; i < 100; i++){
        arrRnd.push(getRndIntDemand(15000,60000));
        arrRnd2.push(getRndIntDemand(15000,60000));
        arrRnd3.push(getRndIntDemand(15000,60000));

        let arrnSold = [0, v1-arrRnd[i]];
        let notSold = Math.max(...arrnSold);
        let arrSd = [0, arrRnd[i]-v1];
        let notSatisfDem = Math.max(...arrSd);
        if (v1 >= arrRnd[i]) {
            numI1 += (priceVal*arrRnd[i] + priceLessVal*notSold - priceBoughtVal*v1);
        }else{
            numI1 += (priceVal*arrRnd[i] - price2Val*notSatisfDem - priceBoughtVal*v1);
        }

        arrnSold = [0, v2-arrRnd2[i]];
        notSold = Math.max(...arrnSold);
        arrSd = [0, arrRnd2[i]-v2];
        notSatisfDem = Math.max(...arrSd);
        if (v2 >= arrRnd2[i]) {
            numI2 += (priceVal*arrRnd2[i] + priceLessVal*notSold - priceBoughtVal*v2);
        }else{
            numI2 += (priceVal*arrRnd2[i] - price2Val*notSatisfDem - priceBoughtVal*v2);
        }

        arrnSold = [0, v3-arrRnd3[i]];
        notSold = Math.max(...arrnSold);
        arrSd = [0, arrRnd3[i]-v3];
        notSatisfDem = Math.max(...arrSd);
        if (v3 >= arrRnd3[i]) {
            numI3 += (priceVal*arrRnd3[i] + priceLessVal*notSold - priceBoughtVal*v3);
        }else{
            numI3 += (priceVal*arrRnd3[i] - price2Val*notSatisfDem - priceBoughtVal*v3);
        }
    }

    const averageIncome1 = (numI1/100).toFixed(2);
    const averageIncome2 = (numI2/100).toFixed(2);
    const averageIncome3 = (numI3/100).toFixed(2);

    const dif1 = (averageIncome1 - expectIncome1).toFixed(2);
    const dif2 = (averageIncome2 - expectIncome2).toFixed(2);
    const dif3 = (averageIncome3 - expectIncome3).toFixed(2);
    let str = '';
    if (dif1 > dif2 || dif1 > dif3){
        str = `висновок за результатами імітації: в залежності від випадкового попиту зпрогнозований
        об'єм замовлень в ${v1} шт може збільшити очікуваний дохід на ${dif1} $ `;
    }else if(dif2 > dif1 || dif2 > dif3){
        str = `висновок за результатами імітації: в залежності від випадкового попиту зпрогнозований
        об'єм замовлень в ${v2} шт може збільшити очікуваний дохід на ${dif2} $ `;
    }else if(dif3 > dif2 || dif3 > dif1){
        str = `висновок за результатами імітації: в залежності від випадкового попиту зпрогнозований
        об'єм замовлень в ${v3} шт може збільшити очікуваний дохід на ${dif3} $ `;
    }

    if (dif1 < dif2 || dif1 < dif3){
        str = `висновок за результатами імітації: в залежності від випадкового попиту зпрогнозований
        об'єм замовлень в ${v1} шт може зменшити очікуваний дохід на ${dif1} $ `;
    }else if(dif2 < dif1 || dif2 < dif3){
        str = `висновок за результатами імітації: в залежності від випадкового попиту зпрогнозований
        об'єм замовлень в ${v2} шт може зменшити очікуваний дохід на ${dif2} $ `;
    }else if(dif3 < dif2 || dif3 < dif1){
        str = `висновок за результатами імітації: в залежності від випадкового попиту зпрогнозований
        об'єм замовлень в ${v3} шт може зменшити очікуваний дохід на ${dif3} $ `;
    }

    const t5 = `
    <div id="t5" style="background-position: inherit; position: relative">
        <br/>
        <p>Вичислення об'єму замовлень продукції на склад для продажу</p>
        <table>
            <thead><tr>
                <th>об'єм замовлень</th> <th>очікуваний дохід</th> <th>середній дохід після 100 ітерацій</th> 
            </tr></thead>
            <tbody><tr class="tb_tr1">
                <td class="td1">${v1}</td> <td class="td2">${expectIncome1}</td> <td class="td3">${averageIncome1}</td> 
            </tr>
            <tr class="tb_tr2">
                <td class="td1">${v2}</td> <td class="td2">${expectIncome2}</td> <td class="td3">${averageIncome2}</td> 
            </tr>
            <tr class="tb_tr3">
                <td class="td1">${v3}</td> <td class="td2">${expectIncome3}</td> <td class="td3">${averageIncome3}</td> 
            </tr>
            
            </tbody>
        </table>
        <br/><br/>
        
        <canvas id="Chart6" style="width:100%;"></canvas>
        <br/><br/>
        <p>${str}</p><br/>
    </div>
    
    `;
    const contT5 = document.getElementById('t4');
    contT5.insertAdjacentHTML('beforeend', t5);

    const xVal3 = [v1, v2, v3];
    new Chart("Chart6", {
        type: "line",
        data: {
            labels: xVal3,
            datasets: [{
                label:['очікуваний дохід'],
                data: [expectIncome1,expectIncome2,expectIncome3],
                backgroundColor: "coral",
                borderColor: "rgba(227,60,227,0.55)",
                pointBorderColor: "#fff",
                lineTension: 0,
                fill: false
            }, {
                label: ['середній дохід після 100 ітерацій'],
                data: [averageIncome1,averageIncome2,averageIncome3],
                backgroundColor: "fuchsia",
                borderColor: "rgba(239,214,53,0.5)",
                pointBorderColor: "#fff",
                lineTension: 0,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Вичислення об\'єму замовлень продукції на склад для продажу',
                fontColor: 'white'
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: "white",
                        beginAtZero: true
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: "white"
                    }
                }]
            },
            legend: {
                labels: {
                    fontColor: 'white'
                }
            }
        }
    });

}
