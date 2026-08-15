package backend.controller;

import backend.dto.PortfolioChatRequest;
import backend.dto.PortfolioChatResponse;
import backend.service.PortfolioChatService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/portfolio")
@CrossOrigin(origins = "http://localhost:5176")
public class PortfolioController {

    private final PortfolioChatService portfolioChatService;

    public PortfolioController(PortfolioChatService portfolioChatService) {
        this.portfolioChatService = portfolioChatService;
    }

    @PostMapping("/chat")
    public PortfolioChatResponse chat(
            @RequestBody PortfolioChatRequest request) {

        String reply = portfolioChatService.getReply(
                request.getMessage()
        );

        return new PortfolioChatResponse(reply);
    }
}