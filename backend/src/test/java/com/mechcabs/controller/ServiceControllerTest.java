package com.mechcabs.controller;

import com.mechcabs.model.ServiceRequest;
import com.mechcabs.model.User;
import com.mechcabs.repository.ServiceRequestRepository;
import com.mechcabs.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

public class ServiceControllerTest {

    @Mock
    private ServiceRequestRepository serviceRequestRepository;

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private ServiceController serviceController;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
        SecurityContextHolder.getContext().setAuthentication(
                new UsernamePasswordAuthenticationToken("1234567890", null)
        );
    }

    @Test
    public void testCreateRequestSuccess() {
        User mockUser = new User();
        mockUser.setId(1L);
        mockUser.setPhone("1234567890");

        when(userRepository.findByPhone("1234567890")).thenReturn(Optional.of(mockUser));
        when(serviceRequestRepository.save(any(ServiceRequest.class))).thenReturn(1);

        ServiceController.CreateRequest request = new ServiceController.CreateRequest();
        request.serviceType = "mechanic";
        request.location = "Downtown";

        ResponseEntity<?> response = serviceController.createRequest(request);

        assertEquals(200, response.getStatusCodeValue());
        assertEquals("Service request created successfully.", response.getBody());
    }
}
