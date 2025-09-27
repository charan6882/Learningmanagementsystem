package com.example.lms.repository;

import com.example.lms.entity.Certificate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CertificateRepository extends JpaRepository<Certificate, Long> {
}
