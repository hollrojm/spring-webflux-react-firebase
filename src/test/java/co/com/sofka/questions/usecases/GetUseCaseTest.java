package co.com.sofka.questions.usecases;


import static org.junit.jupiter.api.Assertions.*;

import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Mono;

import java.util.Arrays;
import java.util.Objects;


@SpringBootTest
class GetUseCaseTest {

    @MockBean
    private QuestionRepository questionRepository;
    @SpyBean
    private GetUseCase getQuestion;

    @Test
    void get(){

        var questionDTO = new QuestionDTO("111","33333","Que lenguaje de programacion te gusta?","PROGRAMACION",
                "TECNOLOGIA Y PROGRAMACION",1,2, Arrays.asList("1", "2"),  "pruebas@gmail.com");


        var question= new Question();
        question.setId("111");
        question.setQuestion("Que lenguaje de programacion te gusta?");
        question.setUserId("33333");
        question.setType("PROGRAMACION");
        question.setCategory("TECNOLOGIA Y PROGRAMACION");

        Mockito.when(questionRepository.findById(Mockito.any(String.class))).thenReturn(Mono.just(question));

        var result = getQuestion.apply("1");
        Assertions.assertEquals(Objects.requireNonNull(result.block()).getQuestion(), "Que lenguaje de programacion te gusta?");
    }

}
