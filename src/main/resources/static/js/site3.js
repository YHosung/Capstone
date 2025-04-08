document.getElementById("captcha-button").addEventListener("click", function(event) {
    // 새 창 열기 (site3와 동일한 크기)
    const newWindow = window.open("/double-click-instruction", "DoubleClick", "width=600,height=400");

    // 부모 창의 위치를 악성 웹사이트로 변경
    window.location.href = "/malicious-site3";

    // 새 창에서 "더블클릭 하시오" 안내
    newWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>더블클릭 하시오</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background-color: #f9f9f9;
                }
                .instruction-container {
                    border: 1px solid #ccc;
                    padding: 20px;
                    border-radius: 5px;
                    background-color: #fff;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }
                #double-click-button {
                    padding: 10px 20px;
                    background-color: #4285f4;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1rem;
                    transition: background-color 0.3s ease;
                }
                #double-click-button.clicked {
                    background-color: #8ab4f8; /* 한 번 클릭 시 색상 변경 */
                }
            </style>
        </head>
        <body>
            <div class="instruction-container">
                <h2>더블클릭 하시오</h2>
                <p>창을 닫으려면 더블클릭하세요.</p>
                <button id="double-click-button">더블클릭</button>
            </div>
            <script>
                let clickCount = 0;
                let timeoutId;
                const button = document.getElementById("double-click-button");

                button.addEventListener("click", function() {
                    clickCount++;
                    if (clickCount === 1) {
                        // 첫 번째 클릭 시 버튼 색상 변경
                        button.classList.add("clicked");
                        // 500ms 후에 클릭 카운트 초기화
                        timeoutId = setTimeout(() => {
                            clickCount = 0;
                            button.classList.remove("clicked");
                        }, 500);
                    } else if (clickCount === 2) {
                        // 두 번째 클릭 시 창 닫기
                        clearTimeout(timeoutId); // 타이머 취소
                        window.close();
                    }
                });
            <\/script>
        </body>
        </html>
    `);
});