package com.example.lms.controller;

import com.example.lms.entity.Certificate;
import com.example.lms.repository.CertificateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/certificates")
public class CertificateController {
    @Autowired
    private CertificateRepository certificateRepository;

    @GetMapping
    public List<Certificate> getAll() {
        return certificateRepository.findAll();
    }

    @PostMapping
    public Certificate issue(@RequestBody Certificate cert) {
        cert.setIssuedOn(LocalDate.now());
        return certificateRepository.save(cert);
    }
}
