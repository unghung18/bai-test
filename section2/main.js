var itemElements = document.querySelectorAll('.container_decor-content-left-list-item');

if (itemElements.length > 0) {
    itemElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var child = element.querySelector('.container_decor-content-left-list-item-container');
            console.log(child);
            var isActive = child.classList.contains('active');
            if (isActive) {
                child.classList.remove('active');
            } else {
                child.classList.add('active');
            }
        });
    });
} 