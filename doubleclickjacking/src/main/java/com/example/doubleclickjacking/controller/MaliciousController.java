package com.example.doubleclickjacking.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class MaliciousController {

    @GetMapping("/main")
    public String main() {
        return "main"; // main.html을 렌더링
    }

    // 첫 번째 사이트
    @GetMapping("/site1")
    public String site1() {
        return "site1"; // site1.html을 렌더링
    }

    @PostMapping("/malicious-action1")
    public void handleMaliciousAction1(@RequestBody String data) {
        System.out.println("첫 번째 사이트: 악성 데이터 수신 - " + data);
    }

    @GetMapping("/malicious-site1")
    public String maliciousSite1() {
        return "malicious-site1"; // 악성 웹사이트 페이지 렌더링
    }

    // 두 번째 사이트
    @GetMapping("/site2")
    public String site2() {
        return "site2"; // site2.html을 렌더링
    }

    @PostMapping("/malicious-action2")
    public void handleMaliciousAction2(@RequestBody String data) {
        System.out.println("두 번째 사이트: 악성 데이터 수신 - " + data);
    }

    @GetMapping("/malicious-site2")
    public String maliciousSite2() {
        return "malicious-site2"; // 악성 웹사이트 페이지 렌더링
    }

    // 세 번째 사이트
    @GetMapping("/site3")
    public String site3() {
        return "site3"; // site3.html을 렌더링
    }

    @PostMapping("/malicious-action3")
    public void handleMaliciousAction3(@RequestBody String data) {
        System.out.println("세 번째 사이트: 악성 데이터 수신 - " + data);
    }

    @GetMapping("/malicious-site3")
    public String maliciousSite3() {
        return "malicious-site3"; // 악성 웹사이트 페이지 렌더링
    }
}