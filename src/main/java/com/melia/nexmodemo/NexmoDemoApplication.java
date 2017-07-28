package com.melia.nexmodemo;

import com.nexmo.client.NexmoClient;
import com.nexmo.client.NexmoClientException;
import com.nexmo.client.auth.AuthMethod;
import com.nexmo.client.auth.TokenAuthMethod;
import com.nexmo.client.sms.SmsSubmissionResult;
import com.nexmo.client.sms.messages.TextMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@SpringBootApplication
@RestController
public class NexmoDemoApplication {
    private static final Logger log = LoggerFactory.getLogger(NexmoDemoApplication.class);

    private static String API_SECRET;

    private static String API_KEY;

    private static String FROM_NUMBER;

    // Get the nexmo values from the application.properties file
    // ( as the variables are static we need to add setters
    @Value("${nexmo.api.secret}")
    public void setApiSecret(String apiSecret) {
        API_SECRET = apiSecret;
    }

    @Value("${nexmo.api.from.number}")
    public void setFromNumber(String fromNumber) {
        FROM_NUMBER = fromNumber;
    }

    @Value("${nexmo.api.key}")
    public void setApiKey(String apiKey) {
        API_KEY = apiKey;
    }

    //TODO need to implement proper concurrency
    private AtomicInteger messageId = new AtomicInteger(0);
    private List<String> messages = new ArrayList();

    // create static nested class for the message representation
    //TODO Move to own file
    static class MyMessage {
        String message;
        int number;

        public MyMessage(String message, int number) {
            this.message = message;
            this.number = number;
        }

        public String getMessage() {
            return message;
        }

        public int getNumber() {
            return number;
        }
    }

    // Allow all CORS : ONLY FOR TESTING
    @Configuration
    static class WebConfig extends WebMvcConfigurerAdapter {
        private final Logger logger = LoggerFactory.getLogger(this.getClass());

        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/**");
        }
    }

    public static void main(String[] args) {
        SpringApplication.run(NexmoDemoApplication.class, args);
    }

    @GetMapping("/getLastMsgId")
    public int getLastMsgId() {
        return this.messageId.get();
    }

    @GetMapping("/getMsg")
    public MyMessage getMsg() {
        return new MyMessage(messages.get(this.messageId.get() - 1), this.messageId.get());
    }

    @GetMapping("/")
    public String helloWorld() {
        return "hello World";
    }

    @GetMapping("/update")
    public String update(@RequestParam("text") String text) {
        log.info("I am in the update method : The message is -> " + text);
        this.messages.add(text);
        this.messageId.getAndIncrement();
        return "updated with text";
    }

    @GetMapping("/send")
    public String send(@RequestParam("number") String number,
                       @RequestParam("msg") String msg) throws IOException, NexmoClientException {
        AuthMethod auth = new TokenAuthMethod(API_KEY, API_SECRET);
        NexmoClient client = new NexmoClient(auth);
        log.info("sending message from : "+FROM_NUMBER);
        SmsSubmissionResult[] responses = client.getSmsClient().submitMessage(new TextMessage(
                FROM_NUMBER,
                number,
                msg));
        return "done";
    }
}
