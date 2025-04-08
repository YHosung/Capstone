// 광고 1: site1.html을 새 창으로 열기
document.getElementById("ad-image1").addEventListener("click", function(event) {
    window.open("/site1", "Site1", "width=300,height=200");
});

// 광고 2: site2.html을 새 창으로 열기
document.getElementById("ad-image2").addEventListener("click", function(event) {
    window.open("/site2", "Site2", "width=300,height=200");
});

// 광고 3: site3.html을 새 창으로 열기
document.getElementById("ad-image3").addEventListener("click", function(event) {
    window.open("/site3", "Site3", "width=300,height=200");
});

document.querySelector('.search-container button').onclick = function() {
    const query = document.querySelector('.search-container input[type="text"]').value;
    alert(`검색어: ${query}`);