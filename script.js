let selectedImageDiv = document.getElementById('image_div');
let selectedInput = document.getElementById('image_select');
selectedInput.addEventListener("change", function()
{
	const reader = new FileReader();
	reader.addEventListener("load", () => 
	{
		const uploadedImage = reader.result;
		selectedImageDiv.innerHTML = '<img src="'+uploadedImage+'" alt="...">';
	});
	reader.readAsDataURL(this.files[0]);
});
var filterControls = document.querySelectorAll('input[type=range]');
function applyFilter() {
var image = document.querySelector('img');
	var computedFilters = '';
	filterControls.forEach(function(item, index) {
		computedFilters += item.getAttribute('data-filter') + '(' + item.value + item.getAttribute('data-scale') + ') ';
	});
	image.style.filter = computedFilters;
};