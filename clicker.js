

function increase() {
    var qty = document.getElementById('qty').value;
    var new_qty = qty++;
    }
    
    document.getElementById('qty').value = new_qty;
    return new_qty;
}
