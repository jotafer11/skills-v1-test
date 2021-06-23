
// Recorrer y seleccionar todo los botones

let btnItems = document.querySelectorAll(".item .btn-item")

for (let i=0; i<btnItems.length; i++){

	btnItems[i].addEventListener("click", function(e){

		// Remove actve, activar en caso de que no.

		let btn = e.target;

		if(btn.className=="btn-item active"){
			btn.classList.remove("active")
		} else {
			btn.classList.add("active")
		}

	})
}



