

document.getElementById('left-arrow').addEventListener('click',function(){
    var imgContainer = document.getElementById('img-container');
    imgContainer.scrollLeft = imgContainer.scrollLeft - 222;
});

document.getElementById('right-arrow').addEventListener('click', function(){
    var imgContainer = document.getElementById('img-container');
    imgContainer.scrollLeft = imgContainer.scrollLeft + 222;
});
