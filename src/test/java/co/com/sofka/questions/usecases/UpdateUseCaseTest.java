package co.com.sofka.questions.usecases;

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
import java.util.List;
import java.util.Objects;

import static org.mockito.Mockito.when;

@SpringBootTest

class UpdateUseCaseTest {

    @SpyBean
    private UpdateUseCase updateUseCase;

    @MockBean
    private QuestionRepository repository;

    @Test
    void updateTest(){

        var questionDTO = new QuestionDTO("hhhhh","hhhhh1111","Que lenguaje de programacion te gusta?","Desarrollo",
                "TECNOLOGIA Y DESARROLLO",1,2, Arrays.asList("x1","x2"),  "hollman@gmail.com ");
        var question = new Question();
        question.setId("hhhhh");
        question.setUserId("hhhhh1111");
        question.setQuestion("Que lenguaje de programacion te gusta?");
        question.setType("Desarrollo");
        question.setCategory("TECNOLOGIA Y DESARROLLO");
        question.setNumberOfReviews(1);
        question.setSumOfReviewScores(2);
        question.setUserReviews(List.of("x1","x2"));
        question.setUserMail("hollman@gmail.com");

        when(repository.save(Mockito.any(Question.class))).thenReturn(Mono.just(question));

        var result = updateUseCase.apply(questionDTO);

        Assertions.assertEquals(Objects.requireNonNull(result.block()),"hhhhh");
    }

}
