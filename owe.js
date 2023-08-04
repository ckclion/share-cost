document.addEventListener('DOMContentLoaded', function() {
    var pax = document.querySelectorAll('.paid').length

    document.querySelector('tbody').addEventListener('change', function(event) {
        let paid = document.querySelectorAll('.paid');
        let owe = document.querySelectorAll('.owe');
        let total = 0;

        for (let i = 0; i < pax; i++) {
            total += parseFloat(paid[i].value);
        }
        document.querySelector('#total').innerHTML = "$" + total.toFixed(2);

        total /= pax;

        for (let i = 0; i < pax; i++) {
            owe[i].innerHTML = "$" + (total - paid[i].value).toFixed(2);
        }
    });

    document.querySelector('#add').addEventListener('click', function(event) {
        let tbody = document.querySelector('tbody');

        let tr = document.createElement("tr");
        tr.setAttribute("scope", "row");
        
        let td1 = document.createElement("td");
        let name = document.createElement("input");
        name.setAttribute("type", "text");
        name.setAttribute("autocomplete", "off");
        name.setAttribute("placeholder", "Name");
        td1.appendChild(name);
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        let sign = document.createTextNode("$");
        td2.appendChild(sign)
        let number = document.createElement("input");
        number.setAttribute("type", "number");
        number.setAttribute("class", "paid");
        number.setAttribute("required", "");
        number.setAttribute("value", "0");
        number.setAttribute("min", "0");
        number.setAttribute("step", "0.01");
        td2.appendChild(number);
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.setAttribute("class", "owe");
        let value = document.createTextNode("$0.00");
        td3.appendChild(value);
        tr.appendChild(td3);

        tbody.appendChild(tr);

        pax += 1;
    });

    document.querySelector('#remove').addEventListener('click', function(event) {

        if (pax > 2) {
            let tbody = document.querySelector('tbody');
            tbody.removeChild(tbody.lastElementChild);
            pax -= 1;
        }
        else {
            alert("Minimum of 2 Pax!")
        }
    });
});