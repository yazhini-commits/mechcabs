package com.mechcabs.controller;

import com.mechcabs.model.ServiceRequest;
import com.mechcabs.model.User;
import com.mechcabs.repository.ServiceRequestRepository;
import com.mechcabs.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/services")
public class ServiceController {

    @Autowired
    private ServiceRequestRepository serviceRequestRepository;

    @Autowired
    private UserRepository userRepository;

    public static class CreateRequest {
        public String serviceType;
        public String location;
    }

    private User getCurrentUser() {
        String phone = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByPhone(phone).orElseThrow(() -> new RuntimeException("User not found"));
    }

    @PostMapping("/request")
    public ResponseEntity<?> createRequest(@RequestBody CreateRequest createRequest) {
        User user = getCurrentUser();
        
        ServiceRequest req = new ServiceRequest();
        req.setUserId(user.getId());
        req.setServiceType(createRequest.serviceType);
        req.setLocation(createRequest.location);
        req.setStatus("PENDING");
        
        serviceRequestRepository.save(req);
        return ResponseEntity.ok("Service request created successfully.");
    }

    @GetMapping("/history")
    public ResponseEntity<List<ServiceRequest>> getHistory() {
        User user = getCurrentUser();
        return ResponseEntity.ok(serviceRequestRepository.findByUserId(user.getId()));
    }
}
