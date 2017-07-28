package com.melia.nexmodemo;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.embedded.LocalServerPort;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.concurrent.atomic.AtomicInteger;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class NexmoDemoApplicationTests {

    @Autowired
    NexmoDemoApplication nda;

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Test
    public void update_should_add_a_message_and_update_counter() {
        int i = nda.getLastMsgId();
        assertThat(testRestTemplate.getForObject("http://localhost:" + port + "/update?text=hello", String.class)).contains("updated with text");
        assertThat(nda.getLastMsgId()).isEqualTo(i + 1);
    }

    @Test
    public void get_msg_should_return_last_message() {
        testRestTemplate.getForObject("http://localhost:" + port + "/update?text=my message is this", String.class);
        assertThat(testRestTemplate.getForObject("http://localhost:" + port + "/getMsg", String.class)).contains("my message is this");
    }


}
